import Link from 'next/link';
import React from 'react'

const AuthLayout  = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className='flex h-screen'>
    <div className='bg-gray-200 flex-shrink-0'>
        <div className='flex flex-col p-8 w-60'>
              <Link href="/settings/account" className='mt-4 mb-4 text-lg font-semibold text-gray-900'>アカウント情報</Link>
              <Link href="/settings/function" className='mt-4 mb-4 text-lg font-semibold text-gray-900'>関数の追加</Link>
              <Link href="/settings/payment" className='mt-4 mb-4 text-lg font-semibold text-gray-900'>お支払い情報</Link>
            </div>
        </div>
            {children}
    </div>
  )
}

export default AuthLayout;
