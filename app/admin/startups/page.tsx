"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ResourceManager from "@/components/admin/ResourceManager";
import Badge from "@/components/ui/Badge";
import { getStartups, createStartup, updateStartup, deleteStartup } from "@/lib/api/startups";
import { getCategoriesByType } from "@/lib/api/categories";
import type { Startup, Category } from "@/lib/api/types";
import type { AdminColumnConfig, AdminFieldConfig } from "@/components/admin/types";

const STAGES = ["Idea Stage", "Early Stage", "Growth Stage", "Scaled"];

export default function AdminStartupsPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategoriesByType("startup_domain").then(setCategories);
  }, []);

  const fields: AdminFieldConfig[] = [
    { name: "name", label: "Startup Name", type: "text", required: true },
    { name: "founderName", label: "Founder Name", type: "text", required: true },
    {
      name: "categoryId",
      label: "Domain",
      type: "select",
      options: categories.map((c) => ({ label: c.name, value: c.id })),
    },
    { name: "stage", label: "Stage", type: "select", required: true, options: STAGES.map((s) => ({ label: s, value: s })) },
    { name: "tagline", label: "Tagline", type: "text", colSpan: 2 },
    { name: "description", label: "Description", type: "textarea", colSpan: 2 },
    { name: "website", label: "Website", type: "url" },
    { name: "foundedYear", label: "Founded Year", type: "number" },
    { name: "location", label: "Location", type: "text" },
    {
      name: "status",
      label: "Status",
      type: "select",
      required: true,
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
    { name: "isFeatured", label: "Feature on homepage", type: "checkbox" },
    { name: "logo", label: "Logo", type: "file", helpText: "PNG/JPG, square works best." },
  ];

  const columns: AdminColumnConfig<Startup>[] = [
    {
      header: "Startup",
      render: (item) => (
        <div className="flex items-center gap-3">
          {item.logoUrl ? (
            <Image src={item.logoUrl} alt="" width={36} height={36} className="rounded-lg object-cover" />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-900 text-xs font-bold text-white">
              {item.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-medium text-ink-900">{item.name}</p>
            <p className="text-xs text-slate-500">{item.founderName}</p>
          </div>
        </div>
      ),
    },
    { header: "Domain", render: (item) => item.categoryName || "—" },
    { header: "Stage", render: (item) => item.stage },
    {
      header: "Status",
      render: (item) => (
        <Badge variant={item.status === "published" ? "success" : "neutral"}>{item.status}</Badge>
      ),
    },
  ];

  return (
    <ResourceManager<Startup>
      resourceKey="startups"
      title="Startups"
      description="Manage the Startup Portfolio shown across the site."
      columns={columns}
      fields={fields}
      searchPlaceholder="Search startups..."
      fetchList={async () => (await getStartups({ limit: 100 })).items}
      createItem={(fields, file, token) => createStartup(fields, file, token)}
      updateItem={(id, fields, file, token) => updateStartup(id, fields, file, token)}
      deleteItem={(id, token) => deleteStartup(id, token)}
      getFormValues={(item) => ({
        name: item?.name ?? "",
        founderName: item?.founderName ?? "",
        categoryId: item?.categoryId ?? "",
        stage: item?.stage ?? "Idea Stage",
        tagline: item?.tagline ?? "",
        description: item?.description ?? "",
        website: item?.website ?? "",
        foundedYear: item?.foundedYear ?? "",
        location: item?.location ?? "",
        status: item?.status ?? "draft",
        isFeatured: item?.isFeatured ?? false,
      })}
    />
  );
}
