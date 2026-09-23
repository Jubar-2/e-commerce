import * as React from "react";
import { ShoppingBag, ArrowDownToLine, Plus } from "lucide-react";
import { AdminPageHeader } from "@/components/common/admin-page-header";

export interface OrdersHeaderProps {
  onExport?: () => void;
  onCreateOrder?: () => void;
}

export function OrdersHeader({
  onExport,
  onCreateOrder,
}: OrdersHeaderProps) {
  return (
    <AdminPageHeader
      title="Orders"
      icon={ShoppingBag}
      secondaryActions={[
        {
          label: "Export",
          onClick: onExport,
          icon: ArrowDownToLine,
        },
      ]}
      primaryAction={{
        label: "Create order",
        onClick: onCreateOrder,
        icon: Plus,
      }}
    />
  );
}
