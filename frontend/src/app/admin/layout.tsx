import DashboardNavbar from "@/components/dashboard-navbar";


const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {


    return (
        <div className="flex min-h-screen">
             <div className="w-[250px] bg-gray-900 text-white hidden md:block">
                <DashboardNavbar />
            </div>

            <div className="flex-1 p-6 bg-gray-100">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;