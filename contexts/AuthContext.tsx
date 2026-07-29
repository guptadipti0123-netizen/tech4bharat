"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import * as authApi from "@/lib/api/auth";
import type { AdminUser } from "@/lib/api/types";

interface AuthContextValue {
  user: AdminUser | null;
  accessToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  hasPermission: (resource: string, action: string) => boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function checkPermission(permissions: string[] | undefined, resource: string, action: string): boolean {
  if (!permissions) return false;
  if (permissions.includes("*")) return true;
  if (permissions.includes(`${resource}:manage`)) return true;
  return permissions.includes(`${resource}:${action}`);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // On load, try to silently mint a new access token from the httpOnly refresh
    // cookie — the access token itself is kept only in memory, never persisted.
    authApi
      .refreshAccessToken()
      .then((result) => {
        if (result) {
          setUser(result.user);
          setAccessToken(result.accessToken);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const result = await authApi.login(email, password);
    setUser(result.user);
    setAccessToken(result.accessToken);
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } finally {
      setUser(null);
      setAccessToken(null);
    }
  }, []);

  const hasPermission = useCallback(
    (resource: string, action: string) => checkPermission(user?.permissions, resource, action),
    [user]
  );

  return (
    <AuthContext.Provider value={{ user, accessToken, isLoading, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
