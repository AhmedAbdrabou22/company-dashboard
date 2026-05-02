import { useAuth } from "../../context/AuthContext";
import personImg from "../../assets/person.png";
import saFlag from "../../assets/sa.png";

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

interface NavbarProps {
  onMenuClick?: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { user } = useAuth();

  return (
    <header className="h-[60px] bg-white flex items-center justify-between px-4 lg:px-6 flex-shrink-0">

      <div className="flex items-center gap-2">
        <img
          src={personImg}
          alt={user?.name ?? "Admin"}
          className="w-9 h-9 rounded-full object-cover flex-shrink-0 ring-2 ring-[#e2e8f0]"
        />
        <div className="hidden lg:block leading-tight">
          <p className="text-sm font-semibold text-[#1B2B4B]">
            {user?.name ?? "Ahmed Mohamed"}
          </p>
          <p className="text-xs text-[#94a3b8] capitalize">
            {user?.role ?? "Admin"}
          </p>
        </div>

        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1B2B4B] transition-colors"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* ── Right: Language + User info (desktop only) ── */}
      <div className="flex items-center gap-3">

        {/* Language — always visible */}
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#e2e8f0] text-sm font-medium text-[#1B2B4B] hover:bg-[#f8fafc] transition-colors">
          <img
            src={saFlag}
            alt="Saudi Arabia"
            className="w-5 h-4 rounded-sm object-cover flex-shrink-0"
          />
          <span>Ar</span>
          <ChevronDown />
        </button>

        {/* <div className="hidden lg:block w-px h-7 bg-[#e2e8f0]" /> */}

       

      </div>
    </header>
  );
};