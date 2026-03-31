"use client";

import * as React from "react";
import { LoaderCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogWarning,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type ConfirmDialogProps = {
  title: string;
  description: string;
  trigger?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  loadingLabel?: string;
  confirmVariant?: "default" | "destructive";
  warningTitle?: string;
  warningDescription?: string;
  children?: React.ReactNode;
  onConfirm?: () => void | Promise<void>;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function ConfirmDialog({
  title,
  description,
  trigger,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  loadingLabel = "Working...",
  confirmVariant = "destructive",
  warningTitle,
  warningDescription,
  children,
  onConfirm,
  open,
  onOpenChange,
}: ConfirmDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);

  const resolvedOpen = open === undefined ? internalOpen : open;

  function updateOpen(nextOpen: boolean) {
    if (isPending) {
      return;
    }

    if (open === undefined) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  }

  async function handleConfirm() {
    try {
      setIsPending(true);
      await Promise.resolve(onConfirm?.());
      updateOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <AlertDialog open={resolvedOpen} onOpenChange={updateOpen}>
      {trigger ? <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger> : null}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        {confirmVariant === "destructive" ? (
          <AlertDialogWarning
            title={warningTitle}
            description={warningDescription}
          />
        ) : null}

        {children}

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>{cancelLabel}</AlertDialogCancel>
          <Button
            type="button"
            variant={confirmVariant}
            disabled={isPending}
            onClick={handleConfirm}
          >
            {isPending ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                {loadingLabel}
              </>
            ) : (
              confirmLabel
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
