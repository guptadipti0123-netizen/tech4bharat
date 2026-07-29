"use client";

import type { AdminFieldConfig } from "@/components/admin/types";

interface FormFieldProps {
  field: AdminFieldConfig;
  value: unknown;
  onChange: (name: string, value: unknown) => void;
  onFileChange?: (name: string, file: File | null) => void;
}

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-ink-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export default function FormField({ field, value, onChange, onFileChange }: FormFieldProps) {
  const id = `field-${field.name}`;

  if (field.type === "checkbox") {
    return (
      <label htmlFor={id} className="flex items-center gap-3 pt-6">
        <input
          id={id}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(field.name, e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-400"
        />
        <span className="text-sm font-medium text-slate-700">{field.label}</span>
      </label>
    );
  }

  if (field.type === "file") {
    return (
      <div>
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {field.label}
        </label>
        <input
          id={id}
          type="file"
          accept="image/*"
          onChange={(e) => onFileChange?.(field.name, e.target.files?.[0] || null)}
          className="mt-2 w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand-700 hover:file:bg-brand-100"
        />
        {field.helpText && <p className="mt-1 text-xs text-slate-500">{field.helpText}</p>}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {field.label}
          {field.required && <span className="text-red-500"> *</span>}
        </label>
        <select
          id={id}
          required={field.required}
          value={value === undefined || value === null ? "" : String(value)}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={inputClass}
        >
          <option value="" disabled>
            Select {field.label.toLowerCase()}
          </option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {field.label}
          {field.required && <span className="text-red-500"> *</span>}
        </label>
        <textarea
          id={id}
          required={field.required}
          rows={4}
          placeholder={field.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={inputClass}
        />
        {field.helpText && <p className="mt-1 text-xs text-slate-500">{field.helpText}</p>}
      </div>
    );
  }

  const inputType = field.type === "tags" ? "text" : field.type;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {field.label}
        {field.required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={id}
        type={inputType}
        required={field.required}
        placeholder={field.placeholder}
        value={value === undefined || value === null ? "" : String(value)}
        onChange={(e) => onChange(field.name, e.target.value)}
        className={inputClass}
      />
      {field.helpText && <p className="mt-1 text-xs text-slate-500">{field.helpText}</p>}
    </div>
  );
}
