"use client";

import Image from "next/image";
import ResourceManager from "@/components/admin/ResourceManager";
import Badge from "@/components/ui/Badge";
import { getMentors, createMentor, updateMentor, deleteMentor } from "@/lib/api/mentors";
import type { Mentor } from "@/lib/api/types";
import type { AdminColumnConfig, AdminFieldConfig } from "@/components/admin/types";

const CATEGORIES = ["Leadership Advisors", "Industry Experts", "Academic Mentors", "Startup Mentors"];

function parseTags(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

const fields: AdminFieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "designation", label: "Designation", type: "text" },
  { name: "organization", label: "Organization", type: "text" },
  {
    name: "category",
    label: "Category",
    type: "select",
    required: true,
    options: CATEGORIES.map((c) => ({ label: c, value: c })),
  },
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
  {
    name: "expertise",
    label: "Expertise",
    type: "tags",
    colSpan: 2,
    placeholder: "Product Strategy, Fundraising, Growth Marketing",
    helpText: "Comma-separated list of skills.",
  },
  { name: "photo", label: "Photo", type: "file" },
];

const columns: AdminColumnConfig<Mentor>[] = [
  {
    header: "Mentor",
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
  { header: "Category", render: (item) => item.category },
  {
    header: "Status",
    render: (item) => <Badge variant={item.status === "published" ? "success" : "neutral"}>{item.status}</Badge>,
  },
];

export default function AdminMentorsPage() {
  return (
    <ResourceManager<Mentor>
      resourceKey="mentors"
      title="Mentors"
      description="Manage mentors shown on the Mentors & Advisors page."
      columns={columns}
      fields={fields}
      searchPlaceholder="Search mentors..."
      fetchList={async () => (await getMentors({ limit: 100 })).items}
      createItem={(formFields, file, token) =>
        createMentor({ ...formFields, expertise: parseTags(formFields.expertise) }, file, token)
      }
      updateItem={(id, formFields, file, token) =>
        updateMentor(id, { ...formFields, expertise: parseTags(formFields.expertise) }, file, token)
      }
      deleteItem={(id, token) => deleteMentor(id, token)}
      getFormValues={(item) => ({
        name: item?.name ?? "",
        designation: item?.designation ?? "",
        organization: item?.organization ?? "",
        category: item?.category ?? "Startup Mentors",
        linkedinUrl: item?.linkedinUrl ?? "",
        status: item?.status ?? "draft",
        bio: item?.bio ?? "",
        expertise: item?.expertise?.join(", ") ?? "",
      })}
    />
  );
}
