import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";
import type { Role } from "../types";
import Logo from "../assets/logo.png";

interface RootLayoutProps {
  role: Role;
  onLogout?: () => void;
}

export const RootLayout = ({ role, onLogout }: RootLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("role",role)

  return (
    <div className="flex h-screen  overflow-hidden">

      <Sidebar
        role={role}
        onLogout={onLogout}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        logoSrc={Logo}
      />

      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};