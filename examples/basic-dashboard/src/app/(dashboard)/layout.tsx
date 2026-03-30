import type { PropsWithChildren } from "react";
import { AppShell } from "@/components/admin/app-shell";
import { PageContainer } from "@/components/admin/page-container";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <AppShell>
      <PageContainer>{children}</PageContainer>
    </AppShell>
  );
}
