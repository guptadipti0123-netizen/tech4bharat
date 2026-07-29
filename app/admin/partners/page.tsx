"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ResourceManager from "@/components/admin/ResourceManager";
import Badge from "@/components/ui/Badge";
import { getPartners, createPartner, updatePartner, deletePartner } from "@/lib/api/partners";
import { getCategoriesByType } from "@/lib/api/categories";
import type { Partner, Category } from "@/lib/api/types";
import type { AdminColumnConfig, AdminFieldConfig } from "@/components/admin/types";

const columns: AdminColumnConfig<Partner>[] = [
  {
    header: "Partner",
    render: (item) => (
      <div className="flex items-center gap-3">
        {item.logoUrl ? (
          <Image src={item.logoUrl} alt="" width={36} height={36} className="rounded-lg object-cover" />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-900 text-xs font-bold text-white">
            {item.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <p className="font-medium text-ink-900">{item.name}</p>
      </div>
    ),
  },
  { header: "Category", render: (item) => item.categoryName || "—" },
  {
    header: "Status",
    render: (item) => <Badge variant={item.status === "published" ? "success" : "neutral"}>{item.status}</Badge>,
  },
];

export default function AdminPartnersPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategoriesByType("partner_category").then(setCategories);
  }, []);

  const fields: AdminFieldConfig[] = [
    { name: "name", label: "Partner Name", type: "text", required: true },
    {
      name: "categoryId",
      label: "Category",
      type: "select",
      options: categories.map((c) => ({ label: c.name, value: c.id })),
    },
    { name: "website", label: "Website", type: "url" },
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
    { name: "description", label: "Description", type: "textarea", colSpan: 2 },
    { name: "logo", label: "Logo", type: "file" },
  ];

  return (
    <ResourceManager<Partner>
      resourceKey="partners"
      title="Partners"
      description="Manage partners & collaborators shown across the site."
      columns={columns}
      fields={fields}
      searchPlaceholder="Search partners..."
      fetchList={async () => (await getPartners({ limit: 100 })).items}
      createItem={(formFields, file, token) => createPartner(formFields, file, token)}
      updateItem={(id, formFields, file, token) => updatePartner(id, formFields, file, token)}
      deleteItem={(id, token) => deletePartner(id, token)}
      getFormValues={(item) => ({
        name: item?.name ?? "",
        categoryId: item?.categoryId ?? "",
        website: item?.website ?? "",
        status: item?.status ?? "draft",
        description: item?.description ?? "",
      })}
    />
  );
}
