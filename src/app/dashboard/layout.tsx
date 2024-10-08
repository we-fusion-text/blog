import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="flex w-full">
                <main className="w-full flex justify-end">{children}</main>
            </div>
        </div>
    );
}
