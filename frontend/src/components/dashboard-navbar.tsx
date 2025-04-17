'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const navItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Profile', href: '/admin/profile' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Roles', href: '/admin/roles' },
    { name: 'Logout', href: '/login' }, // You can wire actual logout logic later
  ];
  

const DashboardNavbar = () => {
    const pathname = usePathname();


    return (
        <nav className="flex flex-col h-full p-6 space-y-4">
            <h1 className="text-2xl font-bold mb-8">ETL Orchastrator</h1>

            {navItems.map(({ name, href }) => (
                <Link key={href} href={href}>
                <span
                    className={clsx(
                    'block px-4 py-2 rounded hover:bg-gray-700 cursor-pointer',
                    pathname === href && 'bg-blue-600'
                    )}
                >
                    {name}
                </span>
                </Link>
            ))}
        </nav>
    )
}

export default DashboardNavbar;