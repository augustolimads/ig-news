import Image from 'next/image'
import Link from 'next/link'
import { NavLinkComponent } from '../NavLinkComponent'
import { SignInButtonComponent } from '../SignInButtonComponent'

export const HeaderComponent = () => {
  return (
    <header className="absolute w-full">
      <div className="container mx-auto flex items-center ">
        <Link href="/" passHref>
          <Image
            src="/images/logo.svg"
            width={'100%'}
            height={'100%'}
            alt="ig.news"
            className="cursor-pointer"
          />
        </Link>
        <nav className="ml-20 h-20 flex items-center justify-center space-x-6">
          <Link href="/" passHref>
            <NavLinkComponent isActive={true}>Home</NavLinkComponent>
          </Link>
          <Link href="/" passHref>
            <NavLinkComponent>Post</NavLinkComponent>
          </Link>
        </nav>
        <div className="ml-auto">
          <SignInButtonComponent />
        </div>
      </div>
    </header>
  )
}
