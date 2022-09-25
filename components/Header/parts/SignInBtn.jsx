import React from "react"

const SignInBtn = () => {
  return (
    <div>
      <button className="rounded-full bg-transparent text-white  uppercase text-[0.65rem] tracking-wider sm:text-[0.75rem] px-6 py-1 font-semibold sm:tracking-widest transition-all duration-200">
        Sign in
      </button>
      <button className="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wider sm:tracking-widest uppercase border-transparent text-[0.65rem] sm:text-[0.75rem] rounded-full text-white bg-gradient-to-r from-indigo-500 to-pink-500  hover:from-indigo-500 hover:to-pink-600  transition-all duration-200">
        Sign up <span className="hidden sm:inline ml-1">now</span>
      </button>
    </div>
  )
}

export default SignInBtn
