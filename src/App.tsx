// import { useState } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
// import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react";
import Loader from './components/Loader'
import TopNavBar from "./components/TopNavBar";

function App() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  return (
    <div>
      <Analytics/>
      <SpeedInsights/>
      <Loader isOpen={loading}/>
      <TopNavBar isOpen={loading}/>

      <div className='flex flex-col gap-16 p-5 w-full h-[91vh] overflow-y-scroll bg-stone-100 pt-5'>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            Home
          </div>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            About
          </div>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            Skills
          </div>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            Projects
          </div>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            Qualifications
          </div>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            Contact
          </div>

          <div className="flex items-center space-x-4 border w-full border-black justify-center p-10">
            Footer
          </div>
      </div>
    </div>
  )
}

export default App
