"use client";

import * as React from "react";
import {
  AdminEmptyState,
  AdminTableContainer,
  TableSearchFilter,
} from "@/components/common";
import { Gift } from "lucide-react";
import { GiftCardsTableHeader } from "./gift-cards-table-header";
import { GiftCardsTableRow } from "./gift-cards-table-row";
import type { GiftCard } from "../../_types";

export interface GiftCardsTableProps {
  giftCards: GiftCard[];
  checked: boolean[];
  allChecked: boolean;
  someChecked: boolean;
  onToggleAll: () => void;
  onToggleOne: (idx: number) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  rightSlot?: React.ReactNode;
  showColumn?: (key: string) => boolean;
}

export function GiftCardsTable({
  giftCards,
  checked,
  allChecked,
  someChecked,
  onToggleAll,
  onToggleOne,
  searchValue,
  onSearchChange,
  rightSlot,
  showColumn = () => true,
}: GiftCardsTableProps) {
  return (
    <AdminTableContainer>
      <TableSearchFilter
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        placeholder="Search gift card code or customer..."
        showColumnsButton={false}
        rightSlot={rightSlot}
      />

      {giftCards.length === 0 ? (
        <AdminEmptyState
          icon={Gift}
          title="No gift cards found"
          description={
            searchValue
              ? `No gift cards matching "${searchValue}". Try clearing filters.`
              : "Issue digital gift cards to your customers."
          }
          primaryAction={{
            label: "Issue gift card",
            onClick: () => alert("Issue gift card"),
          }}
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <GiftCardsTableHeader
              allChecked={allChecked}
              someChecked={someChecked}
              onToggleAll={onToggleAll}
              showColumn={showColumn}
            />
            <tbody className="divide-y divide-neutral-100">
              {giftCards.map((gc, idx) => (
                <GiftCardsTableRow
                  key={gc.id}
                  giftCard={gc}
                  checked={checked[idx] ?? false}
                  onToggle={() => onToggleOne(idx)}
                  showColumn={showColumn}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminTableContainer>
  );
}
