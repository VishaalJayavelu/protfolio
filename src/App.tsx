import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import Loader from './components/Loader'

const LandingPage = React.lazy(() => import("./view/LandingPage"));

function App() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  return (
    <div className="no-scrollbar">
      <Analytics/>
      <SpeedInsights/>
      <Loader isOpen={loading}/>
      <BrowserRouter>
        <Suspense fallback={<Loader isOpen={loading} />}>
          <Routes>
            <Route element={<LandingPage isOpen={loading} />} path="*"></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
