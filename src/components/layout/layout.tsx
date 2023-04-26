import React, { ReactNode } from 'react'

interface ILayoutprops {
    children: ReactNode;
}

export const Layout = ({children}: ILayoutprops) => {
  return (
    <div className=''>
      <header className="p-6 flex items-start justify-start bg-gray-900">
        <p className="text-lg text-white font-semibold">Noahs Cart</p>
      </header>
      <main className=''>
        {children}
      </main>
    </div>
  )
}
