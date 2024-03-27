import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense, useState, useEffect } from "react"

const Home = lazy(() => import("./Home"));
const Gallery = lazy(() => import("./Gallery"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
import Loading from "../components/Loading";


const PagesContainer = ({containerRef, setMenuOn}) => {

//-----page transition---------------------------------//
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setMenuOn(false)
      setTransistionStage("fadeOut");
    }
  }, [location, displayLocation]);


  return (
    <div ref={containerRef} className={`${transitionStage} absolute top-0 bg-white text-black h-dvh`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}>

        <Suspense fallback={<Loading />}>
          <Routes location={displayLocation}>
            <Route path="/" exact element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

      </div>
  )
}

export default PagesContainer