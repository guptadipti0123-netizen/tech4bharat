"use client";

import Image from "next/image";
import ResourceManager from "@/components/admin/ResourceManager";
import Badge from "@/components/ui/Badge";
import { getAdvisors, createAdvisor, updateAdvisor, deleteAdvisor } from "@/lib/api/advisors";
import type { Advisor } from "@/lib/api/types";
import type { AdminColumnConfig, AdminFieldConfig } from "@/components/admin/types";

const fields: AdminFieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "designation", label: "Designation", type: "text" },
  { name: "organization", label: "Organization", type: "text" },
  { name: "linkedinUrl", label: "LinkedIn URL", type: "url" },
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
  { name: "bio", label: "Bio", type: "textarea", colSpan: 2 },
  { name: "photo", label: "Photo", type: "file" },
];

const columns: AdminColumnConfig<Advisor>[] = [
  {
    header: "Advisor",
    render: (item) => (
      <div className="flex items-center gap-3">
        {item.photoUrl ? (
          <Image src={item.photoUrl} alt="" width={36} height={36} className="rounded-full object-cover" />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
            {item.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-medium text-ink-900">{item.name}</p>
          <p className="text-xs text-slate-500">{item.organization}</p>
        </div>
      </div>
    ),
  },
  { header: "Designation", render: (item) => item.designation || "—" },
  {
    header: "Status",
    render: (item) => <Badge variant={item.status === "published" ? "success" : "neutral"}>{item.status}</Badge>,
  },
];

export default function AdminAdvisorsPage() {
  return (
    <ResourceManager<Advisor>
      resourceKey="advisors"
      title="Advisors"
      description="Manage advisors shown on the Mentors & Advisors page."
      columns={columns}
      fields={fields}
      searchPlaceholder="Search advisors..."
      fetchList={async () => (await getAdvisors({ limit: 100 })).items}
      createItem={(formFields, file, token) => createAdvisor(formFields, file, token)}
      updateItem={(id, formFields, file, token) => updateAdvisor(id, formFields, file, token)}
      deleteItem={(id, token) => deleteAdvisor(id, token)}
      getFormValues={(item) => ({
        name: item?.name ?? "",
        designation: item?.designation ?? "",
        organization: item?.organization ?? "",
        linkedinUrl: item?.linkedinUrl ?? "",
        status: item?.status ?? "draft",
        bio: item?.bio ?? "",
      })}
    />
  );
}
