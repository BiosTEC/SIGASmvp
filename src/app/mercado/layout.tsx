import React from 'react'

export default function MercadoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2>Layout do mercado</h2>
            {children}
        </div>
    )
}
