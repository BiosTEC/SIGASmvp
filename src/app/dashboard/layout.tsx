import DashboardNavbar from '@/componentes/dashboardNavbar/DashboardNavbar';
import Sidebar from '@/componentes/sidebar/Sidebar';
import React from 'react'
import { SessionProvider } from 'next-auth/react'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='mainDash'>
            <SessionProvider>
                <Sidebar />
            </SessionProvider>
            <div className='center'>
                {/* <DashboardNavbar /> */}
                {children}
            </div>
        </main>
    )
}
