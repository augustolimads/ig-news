type props = {
  children: React.ReactNode
  isActive?: boolean
}

export const NavLinkComponent = ({ children, isActive }: props) => {
  const activeStyle = `
        text-white font-bold
        after:h-1 after:rounded-t after:w-full after:bg-yellow-500
        after:absolute after:bottom-0 after:left-0
  `

  return (
    <a
      className={`
        inline-block relative px-2 leading-[5rem] cursor-pointer text-gray-300 transition-colors h-20
        hover:text-white
        ${isActive && activeStyle}
      `}
    >
      {children}
    </a>
  )
}
