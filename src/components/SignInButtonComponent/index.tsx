import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export const SignInButtonComponent = () => {
  const { data } = useSession()

  const notLoggedTitle = 'SignIn with Github'
  const userName = data?.user?.name || 'anon'
  const notLoggedColor = 'text-amber-500'
  const loggedColor = 'text-green-500'

  return data ? (
    <button
      type="button"
      className="bg-gray-800 rounded-full py-3 px-4 flex items-center hover:brightness-75 transition-all"
      onClick={() => signOut()}
    >
      <FaGithub className={`text-2xl mr-4 ${loggedColor}`} />
      <span>{userName}</span>
      <FiX className="text-xl ml-4 text-slate-500" />
    </button>
  ) : (
    <button
      type="button"
      className="bg-gray-800 rounded-full py-3 px-4 flex items-center hover:brightness-75 transition-all"
      onClick={() => signIn('github')}
    >
      <FaGithub className={`text-2xl mr-4 ${notLoggedColor}`} />
      <span>{notLoggedTitle}</span>
    </button>
  )
}
