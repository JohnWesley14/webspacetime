import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { cookies } from 'next/headers'




const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        
        <main 
          // className="grid grid-cols-2 min-h-screen"
          className="flex min-h-screen md:flex-col"
        >
      {/*Left */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)]  items-start justify-between px-28 py-16 relative overflow-hidden border-r border-gray-500 min-h-screen md:px-20">
        {/* Blur */}

        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full rounded-full" />

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes "></div>

        
        {isAuthenticated ? <Profile />:<SignIn />}
        <Hero />
        <Copyright />
      </div>
      
      {/* Right */}
      <div className="flex overflow-y-scroll min-h-screen flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
        {children}
      </div>
    </main>
      </body>
    </html>
  )
}
