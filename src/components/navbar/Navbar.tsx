import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="h-[60px] bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6 flex-shrink-0">

      {/* Breadcrumb */}
      <p className="text-sm text-[#94a3b8]">Dashboard</p>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Lang */}
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#e2e8f0] text-sm text-[#1B2B4B] hover:bg-[#f8fafc]">
          🌐 Ar ▾
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#1B2B4B] flex items-center justify-center text-white text-sm font-bold">
            {user?.name?.[0] ?? "A"}
          </div>
          <div>
            <p className="text-sm font-medium text-[#1B2B4B]">{user?.name ?? "Ahmed Mohamed"}</p>
            <p className="text-xs text-[#94a3b8] capitalize">{user?.role ?? "Admin"}</p>
          </div>
        </div>

      </div>
    </header>
  );
};