import { API_BASE_URL } from "./config";
import { ApiError } from "./client";

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Sends a multipart/form-data POST or PUT — used by every admin create/update
 * endpoint that accepts an image upload alongside regular fields. Array/object
 * field values are JSON-stringified (the backend parses them back with
 * parseJsonField), matching how express-validator + Multer expect them.
 */
export async function adminMutateWithFile<T>(
  path: string,
  method: "POST" | "PUT",
  fields: Record<string, unknown>,
  file: File | null,
  fileFieldName: string,
  token: string
): Promise<T> {
  const formData = new FormData();

  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value) || (typeof value === "object" && !(value instanceof File))) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  });

  if (file) {
    formData.append(fileFieldName, file);
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  const body = (await res.json()) as ApiEnvelope<T>;
  if (!res.ok || !body.success) {
    throw new ApiError(body.message || `Request failed with status ${res.status}`, res.status);
  }

  return body.data;
}
