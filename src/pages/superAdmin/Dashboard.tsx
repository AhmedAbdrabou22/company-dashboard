import DashboardSuperAdmin from "../../components/superadmin/dashboard/DashboardSuperAdmin";


type Activities_TP = {
  title: string;
};
function SuperAdminDashboard({ title }: Activities_TP) {
  return (
    <>
      <title>{title}</title>

      <div>
        <DashboardSuperAdmin/>
      </div>
    </>
  );
}

export default SuperAdminDashboard;