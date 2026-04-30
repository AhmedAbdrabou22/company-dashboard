import { useAuth } from "../../context/AuthContext";

// ── Hamburger Icon ────────────────────────────────────────────────────────────
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

interface NavbarProps {
  onMenuClick?: () => void;   // ← جديد
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { user } = useAuth();

  return (
    <header className="h-[60px] bg-white border-b border-[#e2e8f0] flex items-center justify-between px-4 lg:px-6 flex-shrink-0">

      <div className="flex items-center gap-3">
        {/* Hamburger — يظهر فقط على mobile/tablet */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1B2B4B] transition-colors"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>

        {/* Breadcrumb */}
        <p className="text-sm text-[#94a3b8]">Dashboard</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Lang */}
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#e2e8f0] text-sm text-[#1B2B4B] hover:bg-[#f8fafc]">
          🌐 Ar ▾
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#1B2B4B] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
            {user?.name?.[0] ?? "A"}
          </div>
          {/* الاسم يختفي على الشاشات الصغيرة */}
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[#1B2B4B]">{user?.name ?? "Ahmed Mohamed"}</p>
            <p className="text-xs text-[#94a3b8] capitalize">{user?.role ?? "Admin"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};