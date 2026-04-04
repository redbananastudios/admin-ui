import { AppShell } from "@/components/admin/app-shell";
import { SidebarNavigationPatternPage } from "@/components/admin/sidebar-navigation-pattern-page";
import { PageContainer } from "@/components/admin/page-container";

export default function CollapsedSidebarPreviewPage() {
  return (
    <AppShell defaultSidebarOpen={false}>
      <PageContainer>
        <SidebarNavigationPatternPage />
      </PageContainer>
    </AppShell>
  );
}
