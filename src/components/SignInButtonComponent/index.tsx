import React, { useState } from 'react'
import { FaTimes, FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export const SignInButtonComponent = () => {
  const [islogged, setLogged] = useState(true)
  const notLoggedTitle = 'SignIn with Github'
  const userName = 'Augusto'
  const notLoggedColor = 'text-amber-500'
  const loggedColor = 'text-green-500'

  return (
    <button
      type="button"
      className="bg-gray-800 rounded-full py-3 px-4 flex items-center hover:brightness-75 transition-all"
    >
      <FaGithub
        className={`text-2xl mr-4 ${islogged ? loggedColor : notLoggedColor}`}
      />
      <span>{islogged ? userName : notLoggedTitle}</span>
      {islogged && <FiX className="text-xl ml-4 text-slate-500" />}
    </button>
  )
}
