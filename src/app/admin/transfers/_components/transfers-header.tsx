import * as React from "react";
import { ArrowLeftRight, Plus } from "lucide-react";
import { AdminPageHeader } from "@/components/common/admin-page-header";

export interface TransfersHeaderProps {
  onCreateTransfer?: () => void;
}

export function TransfersHeader({
  onCreateTransfer,
}: TransfersHeaderProps) {
  return (
    <AdminPageHeader
      title="Transfers"
      icon={ArrowLeftRight}
      primaryAction={{
        label: "Create transfer",
        onClick: onCreateTransfer,
        icon: Plus,
      }}
    />
  );
}
