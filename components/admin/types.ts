export type AdminFieldType = "text" | "textarea" | "select" | "number" | "checkbox" | "file" | "tags" | "date" | "email" | "url";

export interface AdminFieldOption {
  label: string;
  value: string | number;
}

export interface AdminFieldConfig {
  name: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
  options?: AdminFieldOption[];
  placeholder?: string;
  helpText?: string;
  colSpan?: 1 | 2;
}

export interface AdminColumnConfig<T> {
  header: string;
  render: (item: T) => React.ReactNode;
}
