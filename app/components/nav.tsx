import Link from 'next/link'

import { ThemeSwitch } from './theme-switch'
import { metaData } from '../config'

export function Navbar() {
  return (
    <nav className='mb-12 py-5 lg:mb-16'>
      <div className='flex flex-col justify-between md:flex-row md:items-center'>
        <div className='flex items-center'>
          <Link href='/' className='text-3xl font-semibold'>
            {metaData.title}
          </Link>
        </div>
        <div className='mt-6 flex flex-row items-center gap-4 md:ml-auto md:mt-0'>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}
