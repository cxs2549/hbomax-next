import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src="/logo.png" className="w-[110px] sm:w-[140px] aspect-auto transition-all duration-200" alt="" />
      </a>
    </Link>
  )
}

export default Logo
