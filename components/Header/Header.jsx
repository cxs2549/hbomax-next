import React from 'react'
import Logo from './parts/Logo'
import SignInBtn from './parts/SignInBtn'

const Header = () => {
  return (
    <header className='bg-black'>
        <div className='px-4 h-[54px] flex items-center justify-between'>
            <Logo />
            <SignInBtn />
        </div>
    </header>
  )
}

export default Header