import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h2 className='text-2xl font-bold'>404 Error</h2>
      <p className='text-lg'>Sorry, this page does not exist.</p>
      <Link href="/" className='text-blue-500 hover:underline'>Go back to our home page</Link>
    </div>
  )
}