import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex items-center justify-center py-6 px-6 md:px-20 lg:px-32 xl:px-40  bg-blue-500 '> 
    <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
