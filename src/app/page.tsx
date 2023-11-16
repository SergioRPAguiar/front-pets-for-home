import { getServerSession } from 'next-auth'
import UserInfo from './components/Userinfo'
import Link from 'next/link'


export default async function Home() {
  const session = await getServerSession()
  return (
        <div>
          {session ? <UserInfo user={session?.user}  />  : <div> Not logged in, <Link href={'api/auth/signin'}> Click here to Sign in </Link></div>
        }
        </div>
      
  )
}