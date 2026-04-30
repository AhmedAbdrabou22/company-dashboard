import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";
import type { Role } from "../types";

interface RootLayoutProps {
  role: Role;
  onLogout?: () => void;
}

export const RootLayout = ({ role, onLogout }: RootLayoutProps) => {
  return (
    <div className="flex h-screen bg-[#f1f4f7] overflow-hidden">

      <Sidebar role={role} onLogout={onLogout} />

      <div className="flex flex-col flex-1 overflow-hidden">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};