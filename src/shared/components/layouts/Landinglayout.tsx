import type { ReactNode } from "react"
import Navbar from "./NavBar"
import Footer from "./Footer"

interface LandingLayoutProps{
  children:ReactNode
}


const LandingLayout = ({children}:LandingLayoutProps) => {

  return (
    <div className="min-h-screen bg-slate-950 text white">
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default LandingLayout