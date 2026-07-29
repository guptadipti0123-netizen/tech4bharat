"use client";

import ResourceManager from "@/components/admin/ResourceManager";
import Badge from "@/components/ui/Badge";
import { getEvents, createEvent, updateEvent, deleteEvent } from "@/lib/api/events";
import type { EventItem, EventSpeaker } from "@/lib/api/types";
import type { AdminColumnConfig, AdminFieldConfig } from "@/components/admin/types";

const TYPES = ["Bootcamp", "Workshop", "Summit", "Webinar", "Challenge"];
const STATUSES = ["Upcoming", "Past"];

function parseSpeakers(value: unknown): EventSpeaker[] {
  if (Array.isArray(value)) return value as EventSpeaker[];
  if (typeof value !== "string") return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, designation] = line.split("|").map((s) => s.trim());
      return { name, designation: designation || null };
    });
}

function speakersToText(speakers: EventSpeaker[] | undefined): string {
  if (!speakers || speakers.length === 0) return "";
  return speakers.map((s) => `${s.name}${s.designation ? ` | ${s.designation}` : ""}`).join("\n");
}

const fields: AdminFieldConfig[] = [
  { name: "title", label: "Event Title", type: "text", required: true },
  { name: "type", label: "Type", type: "select", required: true, options: TYPES.map((t) => ({ label: t, value: t })) },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: STATUSES.map((s) => ({ label: s, value: s })),
  },
  { name: "eventDateLabel", label: "Date (display text)", type: "text", required: true, placeholder: "Sept 12–14, 2026" },
  { name: "venue", label: "Venue", type: "text" },
  { name: "isFeatured", label: "Feature as flagship bootcamp", type: "checkbox" },
  { name: "description", label: "Short Description", type: "textarea", colSpan: 2 },
  { name: "longDescription", label: "Full Description", type: "textarea", colSpan: 2 },
  {
    name: "speakers",
    label: "Speakers",
    type: "textarea",
    colSpan: 2,
    placeholder: "Priya Nair | Founder & CEO, NimbusPay",
    helpText: "One speaker per line, format: Name | Designation",
  },
  { name: "banner", label: "Banner Image", type: "file" },
];

const columns: AdminColumnConfig<EventItem>[] = [
  { header: "Title", render: (item) => <span className="font-medium text-ink-900">{item.title}</span> },
  { header: "Type", render: (item) => item.type },
  { header: "Date", render: (item) => item.eventDateLabel },
  {
    header: "Status",
    render: (item) => <Badge variant={item.status === "Upcoming" ? "success" : "neutral"}>{item.status}</Badge>,
  },
];

export default function AdminEventsPage() {
  return (
    <ResourceManager<EventItem>
      resourceKey="events"
      title="Events"
      description="Manage upcoming and past events, workshops, and bootcamps."
      columns={columns}
      fields={fields}
      searchPlaceholder="Search events..."
      fetchList={async () => (await getEvents({ limit: 100 })).items}
      createItem={(formFields, file, token) =>
        createEvent({ ...formFields, speakers: parseSpeakers(formFields.speakers) }, file, token)
      }
      updateItem={(id, formFields, file, token) =>
        updateEvent(id, { ...formFields, speakers: parseSpeakers(formFields.speakers) }, file, token)
      }
      deleteItem={(id, token) => deleteEvent(id, token)}
      getFormValues={(item) => ({
        title: item?.title ?? "",
        type: item?.type ?? "Workshop",
        status: item?.status ?? "Upcoming",
        eventDateLabel: item?.eventDateLabel ?? "",
        venue: item?.venue ?? "",
        isFeatured: item?.isFeatured ?? false,
        description: item?.description ?? "",
        longDescription: item?.longDescription ?? "",
        speakers: speakersToText(item?.speakers),
      })}
    />
  );
}
