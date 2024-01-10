import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className='max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row items-center gap-2 justify-between px-4 lg:px-10 mt-20'>
        <div className=''>
          <h1 className='font-bold text-6xl lg:text-8xl mb-2'>Learn.ai</h1>
          <p className='text-gray-500 text-xl lg:text-3xl font-normal max-w-lg'>AI Grading Made Simple: Fast, Fair, and Flawless.</p>
          <div className='my-8 max-w-sm'>
            <LoginForm />
          </div>
          New User? <Link href="/register"><span>Sign Up</span></Link>
        </div>
        <div className=''>
          <Image src="/header.svg" height={500} width={500} alt='Header' />
        </div>
      </div>

      <div className='border-t h-32 w-full flex flex-col lg:flex-row items-center justify-between px-10 max-w-7xl mx-auto'>
        <h1 className='text-gray-500'>@2024 Learn.ai. All Right Reserved.</h1>
        <div className='flex items-center gap-4'>
          <Link href="/contact">
            <p className='underline text-gray-500 cursor-pointer'>Contact Us</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
