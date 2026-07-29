"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import AdminModal from "@/components/admin/AdminModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import FormField from "@/components/admin/FormField";
import EmptyState from "@/components/ui/EmptyState";
import Spinner from "@/components/ui/Spinner";
import type { AdminColumnConfig, AdminFieldConfig } from "@/components/admin/types";
import { ApiError } from "@/lib/api/client";

interface ResourceItem {
  id: number;
}

interface ResourceManagerProps<T extends ResourceItem> {
  resourceKey: string;
  title: string;
  description: string;
  columns: AdminColumnConfig<T>[];
  fields: AdminFieldConfig[];
  fetchList: (token: string) => Promise<T[]>;
  createItem: (fields: Record<string, unknown>, file: File | null, token: string) => Promise<T>;
  updateItem: (id: number, fields: Record<string, unknown>, file: File | null, token: string) => Promise<T>;
  deleteItem: (id: number, token: string) => Promise<void>;
  getFormValues: (item?: T) => Record<string, unknown>;
  searchPlaceholder?: string;
}

export default function ResourceManager<T extends ResourceItem>({
  resourceKey,
  title,
  description,
  columns,
  fields,
  fetchList,
  createItem,
  updateItem,
  deleteItem,
  getFormValues,
  searchPlaceholder = "Search...",
}: ResourceManagerProps<T>) {
  const { accessToken, hasPermission } = useAuth();
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [modalItem, setModalItem] = useState<T | "new" | null>(null);
  const [formValues, setFormValues] = useState<Record<string, unknown>>({});
  const [formFile, setFormFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState<T | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const canCreate = hasPermission(resourceKey, "create");
  const canUpdate = hasPermission(resourceKey, "update");
  const canDelete = hasPermission(resourceKey, "delete");

  // Bumping this re-runs the effect below to refetch — used after create/update/delete.
  const [refetchIndex, setRefetchIndex] = useState(0);

  useEffect(() => {
    if (!accessToken) return;
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchList(accessToken);
        if (cancelled) return;
        setItems(data);
        setLoadError(null);
      } catch (error) {
        if (cancelled) return;
        setLoadError(error instanceof ApiError ? error.message : "Failed to load data.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [accessToken, fetchList, refetchIndex]);

  const refetch = useCallback(() => setRefetchIndex((n) => n + 1), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return items;
    const query = search.trim().toLowerCase();
    return items.filter((item) => JSON.stringify(item).toLowerCase().includes(query));
  }, [items, search]);

  function openCreateModal() {
    setFormValues(getFormValues());
    setFormFile(null);
    setModalItem("new");
  }

  function openEditModal(item: T) {
    setFormValues(getFormValues(item));
    setFormFile(null);
    setModalItem(item);
  }

  function closeModal() {
    setModalItem(null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!accessToken) return;
    setIsSaving(true);
    try {
      if (modalItem === "new") {
        await createItem(formValues, formFile, accessToken);
        toast.success(`${title.replace(/s$/, "")} created successfully.`);
      } else if (modalItem) {
        await updateItem(modalItem.id, formValues, formFile, accessToken);
        toast.success(`${title.replace(/s$/, "")} updated successfully.`);
      }
      closeModal();
      refetch();
    } catch (error) {
      toast.error(error instanceof ApiError ? error.message : "Something went wrong.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!accessToken || !deleteTarget) return;
    setIsDeleting(true);
    try {
      await deleteItem(deleteTarget.id, accessToken);
      toast.success("Deleted successfully.");
      setDeleteTarget(null);
      refetch();
    } catch (error) {
      toast.error(error instanceof ApiError ? error.message : "Failed to delete.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        {canCreate && (
          <Button onClick={openCreateModal} size="sm">
            <Plus size={16} /> Add New
          </Button>
        )}
      </div>

      <div className="relative mt-6 max-w-sm">
        <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Spinner />
          </div>
        ) : loadError ? (
          <div className="p-10">
            <EmptyState title="Couldn't load data" description={loadError} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10">
            <EmptyState title="Nothing here yet" description="Once records are added, they'll show up here." />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  {columns.map((col) => (
                    <th key={col.header} className="px-5 py-3">
                      {col.header}
                    </th>
                  ))}
                  {(canUpdate || canDelete) && <th className="px-5 py-3 text-right">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-slate-50">
                    {columns.map((col) => (
                      <td key={col.header} className="px-5 py-3.5 text-slate-700">
                        {col.render(item)}
                      </td>
                    ))}
                    {(canUpdate || canDelete) && (
                      <td className="px-5 py-3.5">
                        <div className="flex justify-end gap-2">
                          {canUpdate && (
                            <button
                              type="button"
                              onClick={() => openEditModal(item)}
                              aria-label="Edit"
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
                            >
                              <Pencil size={16} />
                            </button>
                          )}
                          {canDelete && (
                            <button
                              type="button"
                              onClick={() => setDeleteTarget(item)}
                              aria-label="Delete"
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminModal
        isOpen={modalItem !== null}
        onClose={closeModal}
        title={modalItem === "new" ? `Add ${title.replace(/s$/, "")}` : `Edit ${title.replace(/s$/, "")}`}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className={field.colSpan === 2 ? "sm:col-span-2" : ""}>
                <FormField
                  field={field}
                  value={formValues[field.name]}
                  onChange={(name, value) => setFormValues((prev) => ({ ...prev, [name]: value }))}
                  onFileChange={(_name, file) => setFormFile(file)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
            <Button type="button" variant="outline" onClick={closeModal} disabled={isSaving}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </AdminModal>

      <ConfirmDialog
        isOpen={deleteTarget !== null}
        title={`Delete this ${title.toLowerCase().replace(/s$/, "")}?`}
        description="This action can't be undone."
        isLoading={isDeleting}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

export type { ResourceManagerProps };
