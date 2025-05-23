
import { Outlet } from "react-router-dom";
import {AdminSidebar} from "@/components/sidebar/AdminSidebar.tsx";


export default function AdminDashboardPage() {
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />

            <main className="flex-1 ml-[220px] p-8">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}