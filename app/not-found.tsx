import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
  description: 'Error 404',
}

export default function NotFound() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-medium'>404 - Page not found</h1>
      <p className='mb-4'>
        Oops! The page you&#39;re looking for doesn&#39;t seem to exist.
      </p>
    </section>
  )
}
