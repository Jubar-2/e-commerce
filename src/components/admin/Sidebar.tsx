"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Home,
    ShoppingBag,
    Package,
    Tag,
    Archive,
    Truck,
    ArrowLeftRight,
    Gift,
    Users,
    TrendingUp,
    Percent,
    FileText,
    Globe,
    BarChart3,
    Store,
    Bot,
    Boxes,
    Settings,
    ChevronRight,
} from "lucide-react";

type NavItem = {
    label: string;
    icon: React.ElementType;
    href?: string;
    active?: boolean;
    children?: NavItem[];
};

const mainNav: NavItem[] = [
    { label: "Home", icon: Home, href: "/admin" },
    { label: "Orders", icon: ShoppingBag, href: "/admin/orders" },
    {
        label: "Products",
        icon: Package,
        href: "/admin/products",
        children: [
            { label: "Collections", icon: Tag, href: "/admin/collections" },
            { label: "Inventory", icon: Archive, href: "/admin/inventory" },
            { label: "Purchase orders", icon: Truck, href: "/admin/purchase-orders" },
            { label: "Transfers", icon: ArrowLeftRight, href: "/admin/transfers" },
            { label: "Gift cards", icon: Gift, href: "/admin/gift-cards" },
        ],
    },
];

const secondNav: NavItem[] = [
    { label: "Customers", icon: Users, href: "/admin/customers" },
    { label: "Growth", icon: TrendingUp, href: "/admin/growth" },
    { label: "Discounts", icon: Percent, href: "/admin/discounts" },
    { label: "Content", icon: FileText, href: "/admin/content" },
    { label: "Markets", icon: Globe, href: "/admin/markets" },
    { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="flex w-60 shrink-0 flex-col justify-between overflow-y-auto px-3 py-4 bg-bg-admin-sid text-text-admin-sid text-[13px] font-normal">
            <nav className="flex flex-col gap-0.5">
                {mainNav.map((item) =>
                    item.children ? (
                        <NavSubTree key={item.label} item={item} pathname={pathname} />
                    ) : (
                        <NavRow
                            key={item.label}
                            item={item}
                            isActive={item.href ? pathname === item.href : false}
                        />
                    )
                )}

                <div className="my-3 h-px bg-neutral-300/70" />

                {secondNav.map((item) => (
                    <NavRow
                        key={item.label}
                        item={item}
                        isActive={item.href ? pathname === item.href : false}
                    />
                ))}

                <div className="mt-4 flex items-center justify-between px-2 py-1.5 text-xs font-medium text-neutral-500">
                    <span>Sales channels</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </div>
                <NavRow item={{ label: "Online Store", icon: Store, href: "/admin/online-store" }} />
                <NavRow item={{ label: "Agentic", icon: Bot, href: "/admin/agentic" }} />

                <div className="mt-4 flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-neutral-500">
                    <span>Apps</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </div>
                <NavRow item={{ label: "Flow", icon: Boxes, href: "/admin/flow" }} />
            </nav>

            <div>
                <div className="my-2 h-px dark:bg-neutral-800" />
                <NavRow item={{ label: "Settings", icon: Settings, href: "/admin/settings" }} />
            </div>
        </aside>
    );
}

function NavSubTree({
    item,
    pathname,
}: {
    item: NavItem;
    pathname: string;
}) {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const children = item.children || [];
    const isParentActive = item.href ? pathname === item.href : false;

    return (
        <div className="relative flex flex-col">
            {/* Parent Item */}
            <NavRow item={item} isActive={isParentActive} />

            {/* Sub Items with Tree Connector SVG */}
            {children.length > 0 && (
                <div className="relative mt-0.5 flex flex-col gap-0.5">
                    {/* SVG Connector Layer */}
                    <svg
                        className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible z-0"
                        fill="none"
                    >
                        {/* Individual curved branches */}
                        {children.map((child, index) => {
                            const isChildActive = child.href
                                ? (pathname === child.href || (child.href !== "/admin" && pathname.startsWith(child.href)))
                                : !!child.active;
                            const isHovered = hoveredIndex === index;

                            // Clean top offset: starts ~6px below parent icon bottom (translate-y-1.5 clearance)
                            const startY = -4;
                            const targetY = index * 34 + 16;
                            const r = 8;
                            const pathData = `M 16 ${startY} V ${targetY - r} A ${r} ${r} 0 0 0 ${16 + r} ${targetY} H 28.5 M 25.5 ${targetY - 2.5} L 28.5 ${targetY} L 25.5 ${targetY + 2.5}`;

                            return (
                                <path
                                    key={child.label}
                                    d={pathData}
                                    stroke="#b5b5b5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={isChildActive ? 1.5 : 1.25}
                                    className={cn(
                                        "transition-all duration-200 ease-in-out",
                                        isChildActive
                                            ? "opacity-100"
                                            : isHovered
                                                ? "opacity-50"
                                                : "opacity-0"
                                    )}
                                />
                            );
                        })}
                    </svg>

                    {/* Sub-item Links */}
                    {children.map((child, index) => {
                        const isChildActive = child.href
                            ? (pathname === child.href || (child.href !== "/admin" && pathname.startsWith(child.href)))
                            : !!child.active;

                        return (
                            <Link
                                key={child.label}
                                href={child.href || "#"}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={cn(
                                    "relative z-10 flex h-8 w-full items-center rounded-md pl-[34px] pr-2 text-[13px] transition-all duration-200",
                                    isChildActive
                                        ? "bg-black/[0.08] font-bold text-neutral-950 dark:bg-white/10 dark:text-white"
                                        : "font-normal text-text-admin-sid hover:bg-black/[0.05] hover:text-neutral-900 dark:hover:bg-white/5 dark:hover:text-white"
                                )}
                            >
                                <span className="truncate">{child.label}</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function NavRow({
    item,
    isActive,
}: {
    item: NavItem;
    isActive?: boolean;
}) {
    const Icon = item.icon;
    const content = (
        <>
            <Icon className="h-4 w-4 shrink-0 relative z-10" />
            <span className="truncate relative z-10">{item.label}</span>
        </>
    );

    const className = cn(
        "group relative flex h-8 w-full items-center gap-2.5 rounded-md px-2 text-[13px] transition-colors",
        isActive
            ? "bg-black/[0.08] font-bold text-neutral-950 dark:bg-white/10 dark:text-white"
            : "font-medium text-text-admin-sid hover:bg-black/[0.05] hover:text-neutral-900 dark:hover:bg-white/5 dark:hover:text-white"
    );

    if (item.href) {
        return (
            <Link href={item.href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" className={className}>
            {content}
        </button>
    );
}