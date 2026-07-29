import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import type { AdminUser, Role } from "./types";

export interface GetUsersParams {
  page?: number;
  limit?: number;
}

export async function getUsers(
  params: GetUsersParams,
  token: string
): Promise<{ items: AdminUser[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params });
  const { data, meta } = await apiFetch<AdminUser[]>(`/users${query}`, { token, revalidate: false });
  return { items: data, meta };
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  roleId: number;
}

export async function createUser(payload: CreateUserPayload, token: string): Promise<AdminUser> {
  const { data } = await apiFetch<AdminUser>("/users", { method: "POST", body: payload, token, revalidate: false });
  return data;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  roleId?: number;
  isActive?: boolean;
}

export async function updateUser(id: number, payload: UpdateUserPayload, token: string): Promise<AdminUser> {
  const { data } = await apiFetch<AdminUser>(`/users/${id}`, {
    method: "PUT",
    body: payload,
    token,
    revalidate: false,
  });
  return data;
}

export async function resetUserPassword(id: number, password: string, token: string): Promise<void> {
  await apiFetch(`/users/${id}/reset-password`, {
    method: "PATCH",
    body: { password },
    token,
    revalidate: false,
  });
}

export async function deleteUser(id: number, token: string): Promise<void> {
  await apiFetch(`/users/${id}`, { method: "DELETE", token, revalidate: false });
}

export async function getRoles(token: string): Promise<Role[]> {
  const { data } = await apiFetch<Role[]>("/roles", { token, revalidate: false });
  return data;
}
