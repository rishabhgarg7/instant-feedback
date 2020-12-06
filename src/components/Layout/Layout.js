import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Instant Feedback</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    )
}
