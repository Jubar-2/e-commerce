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
  ChevronRight
} from "lucide-react";

type NavItem = {
  label: string;
  icon: React.ElementType;
  active?: boolean;
  sub?: boolean;
};

const mainNav: NavItem[] = [
  { label: "Home", icon: Home },
  { label: "Orders", icon: ShoppingBag },
  { label: "Products", icon: Package },
  { label: "Collections", icon: Tag, sub: true, active: true },
  { label: "Inventory", icon: Archive, sub: true },
  { label: "Purchase orders", icon: Truck, sub: true },
  { label: "Transfers", icon: ArrowLeftRight, sub: true },
  { label: "Gift cards", icon: Gift, sub: true },
];

const secondNav: NavItem[] = [
  { label: "Customers", icon: Users },
  { label: "Growth", icon: TrendingUp },
  { label: "Discounts", icon: Percent },
  { label: "Content", icon: FileText },
  { label: "Markets", icon: Globe },
  { label: "Analytics", icon: BarChart3 },
];

function Sidebar() {
    return (
        <aside className="flex w-60 shrink-0 flex-col justify-between overflow-y-auto px-3 py-4 bg-bg-admin-sid">
            <nav className="flex flex-col gap-0.5">
                {mainNav.map((item) => (
                    <NavRow key={item.label} item={item} />
                ))}

                <div className="my-3 h-px bg-neutral-800" />

                {secondNav.map((item) => (
                    <NavRow key={item.label} item={item} />
                ))}

                <div className="mt-4 flex items-center justify-between px-2 py-1.5 text-xs font-medium text-neutral-400">
                    <span>Sales channels</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </div>
                <NavRow item={{ label: "Online Store", icon: Store }} />
                <NavRow item={{ label: "Agentic", icon: Bot }} />

                <div className="mt-4 flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-neutral-400">
                    <span>Apps</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </div>
                <NavRow item={{ label: "Flow", icon: Boxes }} />
            </nav>

            <div>
                <div className="my-2 h-px bg-neutral-800" />
                <NavRow item={{ label: "Settings", icon: Settings }} />
            </div>
        </aside>
    )
}

function NavRow({ item }: { item: NavItem }) {
    const Icon = item.icon;
    return (
        <button
            className={cn(
                "flex items-center gap-2.5 rounded-md py-1.5 text-sm text-neutral-300 hover:bg-neutral-800",
                item.sub ? "pl-7 pr-2" : "px-2",
                item.active && "bg-neutral-800 font-medium text-white"
            )}
        >
            {!item.sub && <Icon className="h-4 w-4 shrink-0" />}
            <span className="truncate">{item.label}</span>
        </button>
    );
}

export default Sidebar;