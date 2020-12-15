import Head from 'next/head'
import {useAuth} from '../src/lib/auth'

export default function Home() {

  const auth = useAuth()
  console.log("User: ",auth.user)

  return (
    <div className={''}>
      <main className='text-xl'>
        {
          auth.user?
          <div>
            <p>User: {auth.user.name}</p>
            <button className='border-2 border-indigo-200' onClick={(evt)=>auth.signout() }>Signout</button>
          </div>
          :
          <button className='border-2 border-indigo-200' onClick={(evt)=>auth.signInWithGithub() }>Signin with Github</button>

        }

      </main>
    </div>
  )
}
