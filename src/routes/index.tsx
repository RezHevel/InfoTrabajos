import HomePage from "@/features/home/pages/HomePage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import SignInPage from "@/features/auth/pages/SignInPage";
import AdminDashboardPage from "@/features/dashboard/pages/AdminDashboardPage";
import ClientDashboardPage from "@/features/dashboard/pages/ClientDashboardPage";
import EmployeeDashboardPage from "@/features/dashboard/pages/EmployeeDashboardPage";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/auth/signin", element: <SignInPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/dashboard/admin", element: <AdminDashboardPage /> },
  { path: "/dashboard/client", element: <ClientDashboardPage /> },
  { path: "/dashboard/employee", element: <EmployeeDashboardPage /> },
];
