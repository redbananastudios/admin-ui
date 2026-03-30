import type { ReactNode } from "react";
import {
  BadgeCheck,
  CarFront,
  FileClock,
  ShieldAlert,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import { AppCard } from "@/components/admin/app-card";
import { PageHeader } from "@/components/admin/page-header";
import { SectionCard } from "@/components/admin/section-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  amenityOptions,
  assignmentDefaults,
  complianceChecklist,
  depotOptions,
  formHighlights,
  readinessToggles,
  resourceFormRecord,
  serviceTierOptions,
  shiftWindowOptions,
  vehicleClassOptions,
} from "@/lib/mock-resource-form";

function FormField({
  id,
  label,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {hint ? (
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

function ToggleTile({
  title,
  detail,
  enabled,
}: {
  title: string;
  detail: string;
  enabled: boolean;
}) {
  return (
    <div className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-sm leading-6 text-muted-foreground">{detail}</p>
        </div>
        <Switch defaultChecked={enabled} aria-label={title} />
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

export function ResourceFormPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Resource form"
        title={`${resourceFormRecord.id} · ${resourceFormRecord.model}`}
        description={resourceFormRecord.summary}
        actions={
          <>
            <Button variant="outline">Discard edits</Button>
            <Button variant="outline">Save draft</Button>
            <Button>Publish update</Button>
          </>
        }
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {formHighlights.map((highlight, index) => {
          const Icon = [CarFront, SlidersHorizontal, BadgeCheck][index];

          return (
            <AppCard
              key={highlight.label}
              className="gap-3 border-border/60 bg-surface-2/92 p-4"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Icon className="size-4 text-primary" />
                {highlight.label}
              </div>
              <p className="text-lg font-semibold text-foreground">{highlight.value}</p>
              <p className="text-sm leading-6 text-muted-foreground">
                {highlight.detail}
              </p>
            </AppCard>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
        <div className="space-y-4">
          <SectionCard
            title="Vehicle profile"
            description="Use this primary form section for the core schema fields that define the record."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                id="registration"
                label="Registration mark"
                hint="Use the live fleet identifier or API value as the canonical record key."
              >
                <Input id="registration" defaultValue="LF26 RTX" />
              </FormField>

              <FormField
                id="alias"
                label="Display alias"
                hint="Short operator-facing name used in dispatch boards and alerts."
              >
                <Input id="alias" defaultValue="Executive airport unit" />
              </FormField>

              <FormField id="vehicle-class" label="Vehicle class">
                <Select defaultValue={vehicleClassOptions[0]?.value}>
                  <SelectTrigger id="vehicle-class">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleClassOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormField>

              <FormField id="service-tier" label="Service tier">
                <Select defaultValue={serviceTierOptions[0]?.value}>
                  <SelectTrigger id="service-tier">
                    <SelectValue placeholder="Select tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTierOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormField>

              <FormField id="depot" label="Base depot">
                <Select defaultValue={depotOptions[0]?.value}>
                  <SelectTrigger id="depot">
                    <SelectValue placeholder="Select depot" />
                  </SelectTrigger>
                  <SelectContent>
                    {depotOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormField>

              <FormField
                id="seats"
                label="Seat capacity"
                hint="Keep operational capacity explicit so booking rules stay predictable."
              >
                <Input id="seats" type="number" defaultValue="6" />
              </FormField>

              <FormField id="odometer" label="Odometer">
                <Input id="odometer" defaultValue="42,180 km" />
              </FormField>

              <FormField id="insurance-renewal" label="Insurance renewal">
                <Input id="insurance-renewal" type="date" defaultValue="2026-09-14" />
              </FormField>

              <FormField
                id="dispatch-notes"
                label="Dispatch notes"
                hint="Use this for the short operational summary that needs to surface beside the record."
                className="md:col-span-2"
              >
                <Textarea
                  id="dispatch-notes"
                  rows={5}
                  defaultValue="Pinned to premium airport demand corridors with concierge pickup prep, reduced idle threshold, and protected charging windows between executive runs."
                />
              </FormField>
            </div>

            <Separator className="my-5" />

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Passenger amenities
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {amenityOptions.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className="flex items-start gap-3 rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-4"
                  >
                    <Checkbox
                      id={option.id}
                      defaultChecked={option.checked}
                      className="mt-0.5"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        {option.label}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {option.detail}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Dispatch configuration"
            description="Suggested middle section for automation flags, route defaults, and operator-facing workflow switches."
          >
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
              <div className="space-y-3">
                {readinessToggles.map((toggle) => (
                  <ToggleTile
                    key={toggle.title}
                    title={toggle.title}
                    detail={toggle.detail}
                    enabled={toggle.enabled}
                  />
                ))}
              </div>

              <div className="space-y-4">
                <FormField id="shift-window" label="Primary shift window">
                  <Select defaultValue={shiftWindowOptions[0]?.value}>
                    <SelectTrigger id="shift-window">
                      <SelectValue placeholder="Select window" />
                    </SelectTrigger>
                    <SelectContent>
                      {shiftWindowOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField
                  id="reserve-priority"
                  label="Reserve priority"
                  hint="Use lower numbers for assets that should be surfaced earlier in reserve pools."
                >
                  <Input id="reserve-priority" type="number" defaultValue="2" />
                </FormField>

                <FormField
                  id="briefing"
                  label="Driver briefing"
                  hint="Short internal brief that appears in handoff or assignment summaries."
                >
                  <Textarea
                    id="briefing"
                    rows={6}
                    defaultValue="Prioritize Terminal 5 concierge pickups, keep cabin amenities topped up, and avoid overflow pool usage unless reserve activation is confirmed by the duty manager."
                  />
                </FormField>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Commercial and compliance"
            description="Keep supporting admin fields in a separate low-noise panel so the page still scans cleanly."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FormField id="contract-id" label="Contract reference">
                <Input id="contract-id" defaultValue="PRM-AIR-UK-204" />
              </FormField>

              <FormField id="cost-centre" label="Cost centre">
                <Input id="cost-centre" defaultValue="AIRPORT-PREMIUM" />
              </FormField>

              <FormField id="airport-pass" label="Airport pass renewal">
                <Input id="airport-pass" type="date" defaultValue="2026-04-04" />
              </FormField>

              <FormField id="pricing-band" label="Pricing band">
                <Input id="pricing-band" defaultValue="Executive corridor band A" />
              </FormField>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button size="sm" variant="outline">
                Upload document
              </Button>
              <Button size="sm" variant="outline">
                View audit trail
              </Button>
              <Button size="sm">Request approval</Button>
            </div>
          </SectionCard>
        </div>

        <div className="space-y-4">
          <SectionCard
            title="Draft summary"
            description="Compact right rail for the metadata that helps an operator decide whether the draft is ready to publish."
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {resourceFormRecord.mode}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {resourceFormRecord.publishWindow}
                  </p>
                </div>
                <StatusBadge status={resourceFormRecord.status}>
                  {resourceFormRecord.status}
                </StatusBadge>
              </div>

              <Separator />

              <div className="space-y-3">
                <SummaryRow label="Ops manager" value={resourceFormRecord.manager} />
                <SummaryRow label="Fleet team" value={resourceFormRecord.team} />
                <SummaryRow label="Last updated" value={resourceFormRecord.updatedAt} />
                <SummaryRow label="Publish window" value={resourceFormRecord.publishWindow} />
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Release checklist"
            description="Use this panel for validation states before pushing a new record or edit live."
          >
            <div className="space-y-3">
              {complianceChecklist.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                    <StatusBadge status={item.tone}>{item.tone}</StatusBadge>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Assignment defaults"
            description="Suggested right-rail companion for route defaults, policy hints, or SLA notes."
          >
            <div className="space-y-3">
              {assignmentDefaults.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[calc(var(--radius)*0.92)] border border-border/60 bg-surface-2 px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          <AppCard className="gap-3 border-primary/18 bg-primary/10 p-4 text-primary">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ShieldAlert className="size-4" />
              Pattern intent
            </div>
            <p className="text-sm leading-6 text-primary/80">
              Use this page for create and edit flows. Keep the same two-column rhythm, form density, and right-rail validation context, then map your API fields into the existing sections.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
              <FileClock className="size-3.5" />
              Ready for API-backed workflows
            </div>
          </AppCard>

          <AppCard className="gap-3 border-border/60 bg-surface-2/92 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <UserRound className="size-4 text-primary" />
              Handoff rule
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Another AI should preserve this layout and simply bind real form state, validation, and submit actions from the target API. The shell and composition should stay intact.
            </p>
          </AppCard>
        </div>
      </section>
    </div>
  );
}
