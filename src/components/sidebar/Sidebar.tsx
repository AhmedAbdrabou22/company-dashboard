import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// ─── Icons (inline SVG to avoid dependencies) ───────────────────────────────

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);
const ServicesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
  </svg>
);
const TicketsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-2-3.46V6h16v2.54z" />
  </svg>
);
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const CategoriesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l-5.5 9h11z" /><circle cx="17.5" cy="17.5" r="4.5" /><rect x="3" y="13" width="8" height="8" />
  </svg>
);
const IssuesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);
const DisputesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H5v-2h7v2zm7-4H5v-2h14v2zm0-4H5V7h14v2z" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
  </svg>
);
const RequestsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>
);
const ReportingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
);
const SupportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
  </svg>
);
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

// ─── Types ───────────────────────────────────────────────────────────────────

type SubItem = {
  label: string;
  path: string;
};

type NavItem = {
  label: string;
  path?: string;
  icon: React.ReactNode;
  children?: SubItem[];
  isLogout?: boolean;
};

// ─── Nav Configs per role ────────────────────────────────────────────────────

const superAdminNav: NavItem[] = [
  { label: "Home", path: "/", icon: <HomeIcon /> },
  {
    label: "Users", icon: <UsersIcon />,
    children: [
      { label: "Management", path: "/users/management" },
      { label: "Service Provider", path: "/users/service-provider" },
      { label: "Building Owners", path: "/users/building-owners" },
    ],
  },
  { label: "Services", path: "/services", icon: <ServicesIcon /> },
  { label: "Tickets", path: "/tickets", icon: <TicketsIcon /> },
  {
    label: "Cities & Areas", icon: <LocationIcon />,
    children: [
      { label: "Countries", path: "/cities/countries" },
      { label: "Cities", path: "/cities/cities" },
      { label: "Zones", path: "/cities/zones" },
    ],
  },
  { label: "Categories", path: "/categories", icon: <CategoriesIcon /> },
  { label: "Issues", path: "/issues", icon: <IssuesIcon /> },
  { label: "Disputes", path: "/disputes", icon: <DisputesIcon /> },
  { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
  { label: "Log Out", icon: <LogoutIcon />, isLogout: true },
];

const serviceProviderNav: NavItem[] = [
  { label: "Dashboard", path: "/sp/dashboard", icon: <DashboardIcon /> },
  { label: "Users", path: "/sp/users", icon: <UsersIcon /> },
  { label: "Services", path: "/sp/services", icon: <ServicesIcon /> },
  { label: "Requests", path: "/sp/requests", icon: <RequestsIcon /> },
  { label: "Reporting", path: "/sp/reporting", icon: <ReportingIcon /> },
  { label: "Disputes", path: "/sp/disputes", icon: <DisputesIcon /> },
  { label: "Support", path: "/sp/support", icon: <SupportIcon /> },
  { label: "Settings", path: "/sp/settings", icon: <SettingsIcon /> },
  { label: "Log Out", icon: <LogoutIcon />, isLogout: true },
];

const buildingOwnerNav: NavItem[] = [
  { label: "Dashboard", path: "/bo/dashboard", icon: <DashboardIcon /> },
  { label: "Users", path: "/bo/users", icon: <UsersIcon /> },
  { label: "Services", path: "/bo/services", icon: <ServicesIcon /> },
  { label: "Requests", path: "/bo/requests", icon: <RequestsIcon /> },
  { label: "Reporting", path: "/bo/reporting", icon: <ReportingIcon /> },
  { label: "Disputes", path: "/bo/disputes", icon: <DisputesIcon /> },
  { label: "Support", path: "/bo/support", icon: <SupportIcon /> },
  { label: "Settings", path: "/bo/settings", icon: <SettingsIcon /> },
  { label: "Log Out", icon: <LogoutIcon />, isLogout: true },
];

// ─── Single Nav Item ─────────────────────────────────────────────────────────

const SidebarNavItem = ({
  item,
  onLogout,
}: {
  item: NavItem;
  onLogout?: () => void;
}) => {
  const location = useLocation();
  const [open, setOpen] = useState(() =>
    item.children?.some((c) => location.pathname.startsWith(c.path)) ?? false
  );

  const isParentActive =
    item.children?.some((c) => location.pathname.startsWith(c.path)) ?? false;

  // Item with children (accordion)
  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setOpen((p) => !p)}
          className={`
            w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg
            text-sm font-medium transition-all duration-200 group
            ${isParentActive
              ? "bg-[#1B2B4B] text-white"
              : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1B2B4B]"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <span className={isParentActive ? "text-white" : "text-[#94a3b8] group-hover:text-[#1B2B4B]"}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
          <span
            className={`transition-transform duration-200 ${open ? "rotate-0" : "-rotate-90"}`}
          >
            <ChevronDown />
          </span>
        </button>

        {/* Sub-items */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#e2e8f0] pl-4">
            {item.children.map((child) => {
              const isActive = location.pathname.startsWith(child.path);
              return (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-md text-sm
                    transition-colors duration-150
                    ${isActive
                      ? "text-[#e53935] font-semibold"
                      : "text-[#64748b] hover:text-[#1B2B4B]"
                    }
                  `}
                >
                  <ChevronRight />
                  {child.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Logout button
  if (item.isLogout) {
    return (
      <button
        onClick={onLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
          text-sm font-medium text-[#64748b] hover:bg-[#fff1f0] hover:text-[#e53935]
          transition-all duration-200 group"
      >
        <span className="text-[#94a3b8] group-hover:text-[#e53935]">
          {item.icon}
        </span>
        {item.label}
      </button>
    );
  }

  // Regular link
  return (
    <NavLink
      to={item.path!}
      end={item.path === "/"}
      className={({ isActive }) => `
        flex items-center gap-3 px-4 py-3 rounded-lg
        text-sm font-medium transition-all duration-200 group
        ${isActive
          ? "bg-[#1B2B4B] text-white"
          : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1B2B4B]"
        }
      `}
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? "text-white" : "text-[#94a3b8] group-hover:text-[#1B2B4B]"}>
            {item.icon}
          </span>
          {item.label}
        </>
      )}
    </NavLink>
  );
};

// ─── Main Sidebar Component ───────────────────────────────────────────────────

type SidebarRole = "superAdmin" | "serviceProvider" | "buildingOwner";

interface SidebarProps {
  role?: SidebarRole;
  onLogout?: () => void;
  companyName?: string;
  logoSrc?: string;
}

const navByRole: Record<SidebarRole, NavItem[]> = {
  superAdmin: superAdminNav,
  serviceProvider: serviceProviderNav,
  buildingOwner: buildingOwnerNav,
};

export const Sidebar = ({
  role = "superAdmin",
  onLogout,
  companyName = "COMPANY",
  logoSrc,
}: SidebarProps) => {
  const navItems = navByRole[role];

  return (
    <aside
      className="
        w-[240px] h-screen bg-white border-r border-[#e2e8f0]
        flex flex-col overflow-hidden flex-shrink-0
      "
    >
      {/* ── Logo ── */}
      <div className="px-5 py-5 border-b border-[#e2e8f0]">
        <div className="flex items-center gap-2">
          {logoSrc ? (
            <img src={logoSrc} alt="logo" className="h-10 w-auto" />
          ) : (
            // Default logo matching the PDF design
            <div className="flex items-center gap-2">
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
                <path
                  d="M6 28 C6 28, 14 8, 22 18 C26 24, 30 12, 38 6"
                  stroke="#1B2B4B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="8" cy="28" r="3" fill="#1B2B4B" />
              </svg>
              <span className="text-[#1B2B4B] font-bold text-sm tracking-widest uppercase">
                {companyName}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item, index) => {
          // Divider before Log Out
          const isLast = index === navItems.length - 1;
          return (
            <div key={item.label}>
              {isLast && (
                <div className="border-t border-[#e2e8f0] my-3" />
              )}
              <SidebarNavItem item={item} onLogout={onLogout} />
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

// ─── Root Layout using Sidebar ────────────────────────────────────────────────

/**
 * RootLayout — wraps all authenticated pages.
 * Drop <Outlet /> inside for React Router v6.
 *
 * Usage in your router:
 *
 * <Route path="/" element={<RootLayout role="superAdmin" />}>
 *   <Route index element={<Dashboard />} />
 *   ...
 * </Route>
 */
export const RootLayout = ({
  role = "superAdmin",
  onLogout,
  children,
}: {
  role?: SidebarRole;
  onLogout?: () => void;
  children?: React.ReactNode; // replace with <Outlet /> in real usage
}) => {
  return (
    <div className="flex h-screen bg-[#f1f4f7] overflow-hidden">
      {/* Sidebar */}
      <Sidebar role={role} onLogout={onLogout} />

      {/* Main area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="h-[60px] bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6 flex-shrink-0">
          {/* Left: Breadcrumb placeholder */}
          <div className="text-sm text-[#94a3b8]">Dashboard / Home</div>

          {/* Right: User + Lang */}
          <div className="flex items-center gap-4">
            {/* Lang toggle */}
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#e2e8f0] text-sm text-[#1B2B4B] hover:bg-[#f8fafc]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#1B2B4B]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Ar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
            </button>

            {/* User avatar */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#1B2B4B] flex items-center justify-center text-white text-sm font-semibold">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-[#1B2B4B]">Ahmed Mohamed</p>
                <p className="text-xs text-[#94a3b8]">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children ?? (
            <div className="text-[#94a3b8] text-sm">
              {/* React Router: replace this with <Outlet /> */}
              Page content goes here
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;