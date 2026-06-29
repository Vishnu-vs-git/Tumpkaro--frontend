import AIShowcase from "./components/AIShowcase/AIShowcase"
import Features from "./components/features/Features"
import Hero from "./components/hero/Hero"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import TrustedBy from "./components/TrustedBy/TrustedBy"


const LandingPage = () => {
  return (
    <>
     {/* <Hero/> */}
     <Hero/>
     <TrustedBy/>
     <Features/>
     <HowItWorks/>
     <AIShowcase/>
    </>
  )
}

export default LandingPage