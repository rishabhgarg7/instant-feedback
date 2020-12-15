import React from 'react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
export default function Header() {
   
    return (
        <div className='border-b-2 border-gray-300 bg-white'>
            <div className='color-bar h-1 bg-indigo-400'></div>
            <div className='main-bar mt-3 mb-3 px-20 flex justify-between items-center'>
                <div className='logo-lhs flex justify-center items-center'>
                    <img src='/feedback-icon.svg' /> 
                    <Link href='/sites'><a className='ml-4 text-xl border-b-1 border-gray-700 hover:border-b-2 hover:border-gray-700'>Sites</a></Link>
                    <Link href='/feedback'><a className='ml-4 text-xl border-b-1 border-gray-700 hover:border-b-2 hover:border-gray-700'>Feedback</a></Link>
                </div>
                <div className='account-rhs '>
                    <Link href='account'>
                        <a>
                            <div className='avatar ml-4 rounded-full overflow-hidden border-2 border-gray-600'>
                                <img className='h-8 w-8 object-contain cursor-pointer' src='' />
                            </div>
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    )
}
