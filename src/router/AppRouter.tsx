import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { RootLayout } from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import SuperAdminDashboard from "../pages/superAdmin/Dashboard";
import SpDashboard from "../pages/serviceProvider/Dashboard";
import BoDashboard from "../pages/buildingOwner/Dashboard";
import AdminLogin from "../pages/superAdmin/Auth/AdminLogin";
import AdminForgot from "../pages/superAdmin/Auth/AdminForgot";
import AdminVerifyOtp from "../pages/superAdmin/Auth/AdminVerifyOtp";
import AdminNewPassword from "../pages/superAdmin/Auth/AdminNewPassword";
import Users from "../pages/superAdmin/users/index";
import ServiceProvider from "../pages/superAdmin/serviceprovider";
import { AddServiceProviderForm } from "../components/superadmin/serviceprovider/AddUserForm";
import Owners from "../pages/superAdmin/owners";
import Services from "../pages/superAdmin/services";

const AppRouter = () => {
  const { logout } = useAuth();

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/forgot-password" element={<AdminForgot />} />
          <Route path="/admin/verify-otp" element={<AdminVerifyOtp />} />
          <Route path="/admin/new-password" element={<AdminNewPassword />} />
        </Route>


        <Route path="/admin" element={<RootLayout role="superAdmin" onLogout={logout} />}>
          <Route index element={<SuperAdminDashboard  title="Dashboard"/>} />
          <Route path="users/management" element={
            <Users title="User Management" />
          } />
          <Route path="users/service-provider" element={
            <ServiceProvider title="Service Provider"/>  
          } />
          <Route path="users/service-provider/add" element={
            <AddServiceProviderForm/>  
          } />
          <Route path="users/building-owners" element={<Owners title="Building Owners"/>} />
          <Route path="services" element={<Services title="Services"/>} />
          <Route path="tickets" element={<div className="p-4 text-xl">Tickets</div>} />
          <Route path="cities/countries" element={<div className="p-4 text-xl">Countries</div>} />
          <Route path="cities/cities" element={<div className="p-4 text-xl">Cities</div>} />
          <Route path="cities/zones" element={<div className="p-4 text-xl">Zones</div>} />
          <Route path="categories" element={<div className="p-4 text-xl">Categories</div>} />
          <Route path="issues" element={<div className="p-4 text-xl">Issues</div>} />
          <Route path="disputes" element={<div className="p-4 text-xl">Disputes</div>} />
          <Route path="settings" element={<div className="p-4 text-xl">Settings</div>} />
        </Route>

        {/* ── Service Provider ── */}
        <Route path="/sp" element={<RootLayout role="serviceProvider" onLogout={logout} />}>
          <Route index element={<SpDashboard />} />
          <Route path="users" element={<div className="p-4 text-xl">SP Users</div>} />
          <Route path="services" element={<div className="p-4 text-xl">SP Services</div>} />
          <Route path="requests" element={<div className="p-4 text-xl">SP Requests</div>} />
          <Route path="reporting" element={<div className="p-4 text-xl">SP Reporting</div>} />
          <Route path="disputes" element={<div className="p-4 text-xl">SP Disputes</div>} />
          <Route path="support" element={<div className="p-4 text-xl">SP Support</div>} />
          <Route path="settings" element={<div className="p-4 text-xl">SP Settings</div>} />
        </Route>

        {/* ── Building Owner ── */}
        <Route path="/bo" element={<RootLayout role="buildingOwner" onLogout={logout} />}>
          <Route index element={<BoDashboard />} />
          <Route path="users" element={<div className="p-4 text-xl">BO Users</div>} />
          <Route path="services" element={<div className="p-4 text-xl">BO Services</div>} />
          <Route path="requests" element={<div className="p-4 text-xl">BO Requests</div>} />
          <Route path="reporting" element={<div className="p-4 text-xl">BO Reporting</div>} />
          <Route path="disputes" element={<div className="p-4 text-xl">BO Disputes</div>} />
          <Route path="support" element={<div className="p-4 text-xl">BO Support</div>} />
          <Route path="settings" element={<div className="p-4 text-xl">BO Settings</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/admin/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;