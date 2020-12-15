import React from 'react'

export default function AppPageLayout({children}) {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='pt-16 pl-36'>
                {children}
            </div>
        </div>
    )
}
