import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="min-h-screen flex">
    <div className="w-1/2 flex items-center justify-center p-12 bg-white">
      <div className="w-full max-w-lg">
        <Outlet />
      </div>
    </div>
    <div className="w-1/2 bg-[#1B2B4B]" />
  </div>
);

export default AuthLayout;