import * as React from "react";
import { Gift, Plus, ArrowDownToLine } from "lucide-react";
import { AdminPageHeader } from "@/components/common/admin-page-header";

export interface GiftCardsHeaderProps {
  onExport?: () => void;
  onIssueGiftCard?: () => void;
}

export function GiftCardsHeader({
  onExport,
  onIssueGiftCard,
}: GiftCardsHeaderProps) {
  return (
    <AdminPageHeader
      title="Gift cards"
      icon={Gift}
      secondaryActions={[
        {
          label: "Export",
          onClick: onExport,
          icon: ArrowDownToLine,
        },
      ]}
      primaryAction={{
        label: "Issue gift card",
        onClick: onIssueGiftCard,
        icon: Plus,
      }}
    />
  );
}
