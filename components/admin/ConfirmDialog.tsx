"use client";

import { AlertCircle } from "lucide-react";
import AdminModal from "@/components/admin/AdminModal";
import Button from "@/components/ui/Button";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  isOpen,
  title,
  description,
  confirmLabel = "Delete",
  isLoading = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <AdminModal isOpen={isOpen} onClose={onCancel} title={title} maxWidth="max-w-md">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
          <AlertCircle size={20} />
        </div>
        <p className="text-slate-600">{description}</p>
      </div>
      <div className="mt-8 flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          disabled={isLoading}
          className="bg-red-600 shadow-red-600/20 hover:bg-red-700"
        >
          {isLoading ? "Deleting..." : confirmLabel}
        </Button>
      </div>
    </AdminModal>
  );
}
