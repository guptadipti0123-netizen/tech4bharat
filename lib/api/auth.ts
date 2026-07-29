import { apiFetch } from "./client";
import type { AdminUser } from "./types";

interface RawUser {
  id: number;
  name: string;
  email: string;
  roleId: number;
  roleName: string;
  roleSlug: string;
  permissions: string[];
  avatarPath: string | null;
  isActive: boolean;
  lastLoginAt: string | null;
}

function mapUser(raw: RawUser): AdminUser {
  return {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    roleId: raw.roleId,
    roleName: raw.roleName,
    roleSlug: raw.roleSlug,
    permissions: raw.permissions,
    isActive: raw.isActive,
    lastLoginAt: raw.lastLoginAt,
  };
}

export interface LoginResult {
  user: AdminUser;
  accessToken: string;
}

/** credentials: "include" is required on every auth call so the httpOnly refresh cookie round-trips to the API's origin. */
export async function login(email: string, password: string): Promise<LoginResult> {
  const { data } = await apiFetch<{ user: RawUser; accessToken: string }>("/auth/login", {
    method: "POST",
    body: { email, password },
    credentials: "include",
    revalidate: false,
  });
  return { user: mapUser(data.user), accessToken: data.accessToken };
}

export async function refreshAccessToken(): Promise<LoginResult | null> {
  try {
    const { data } = await apiFetch<{ user: RawUser; accessToken: string }>("/auth/refresh", {
      method: "POST",
      credentials: "include",
      revalidate: false,
    });
    return { user: mapUser(data.user), accessToken: data.accessToken };
  } catch {
    return null;
  }
}

export async function logout(): Promise<void> {
  await apiFetch("/auth/logout", { method: "POST", credentials: "include", revalidate: false });
}
