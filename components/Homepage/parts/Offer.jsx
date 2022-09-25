import React from "react"

const Offer = () => {
  return (
    <div className="bg-[#5C0D8A] text-white h-[138px] md:h-[68px] px-10 flex flex-col md:flex-row md:gap-8 items-center justify-center pb-2">
      <div className="flex flex-col xl:flex-row xl:gap-1.5 items-center translate-y-1 md:translate-y-0">
        <h1 className="text-lg xl:text-2xl font-bold uppercase translate-y-1.5 xl:translate-y-0">Save over 40%</h1>
        <h1 className="uppercase text-center sm:whitespace-nowrap xl:text-xl">When you prepay for a year</h1>
      </div>
      <button className="rounded-full px-7 py-2 bg-[#B535F5] uppercase tracking-widest text-[.75rem] md:text-lg whitespace-nowrap font-bold mt-3 md:mt-1.5">view plans</button>
      <p className="text-[11px] text-center sm:text-left mt-2 md:mt-0 xl:mt-1 opacity-75 md:max-w-xs">
        Offer valid through 10/30/22. <br className="hidden xl:block" /> Discount applies to first year only. <br className="hidden xl:block" /> See
        offer details.
      </p>
    </div>
  )
}

export default Offer
