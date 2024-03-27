import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer"
import img_0 from '/landing/img_0.webp'
import img_1 from '/landing/img_1.webp'
import img_2 from '/landing/img_2.webp'
import img_3 from '/landing/img_3.webp'
import img_4 from '/landing/img_4.webp'
import img_5 from '/landing/img_5.webp'
import img_6 from '/landing/img_6.webp'

gsap.registerPlugin(Flip);

const Home = () => {

  const { t, i18n } = useTranslation()

//--------start animation----------------------------// 
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.main_container img', { y: '100%', ease: 'expo.inOut', duration: 2.5, delay: 1 })
      .fromTo('.main_container', { height: 600 }, { height: 400, ease: 'expo.inOut', duration: 1, delay: 0.5 })
      .from('.omar', { y: '100%', duration: 0.8 })
      .from('.barka', { y: '100%', duration: 0.8 })
      .from('.container' , { y: '100vh', autoAlpha: 0, ease: 'power2.out', stagger : 0.2, duration: 1, delay: 0.5 })
  })

//----motion animation-------------------------------//
  useGSAP(() => {
    const main_container = document.querySelector('.main_container')
    const imgs = document.querySelectorAll('.img')

    imgs.forEach((img) => {
      
      const handleConatiner = () => {
        let mainImg = document.querySelector('.main_container .img')
        let container = img.parentNode
        const mainImgState = Flip.getState(mainImg)
        container.appendChild(mainImg)
        Flip.from(mainImgState, { duration: 1, ease: 'power1.inOut'})

        const imgState = Flip.getState(img)
        main_container.appendChild(img)
        Flip.from(imgState, { duration: 1, absolute: true, ease: 'power1.inOut'})
      }

      img.addEventListener('click', handleConatiner)
      return () => img.removeEventListener('click', handleConatiner)
    })

  })


  return (
    <div className="w-full h-dvh flex items-center justify-center">

      <div className="container w-28 absolute top-20 left-28 cursor-pointer">
        <div className="img overflow-hidden h-full z-10">
          <img src={img_1} alt="img" className=" h-full w-full object-cover" width="498" height="600"/>
        </div>
      </div>

      <div className="container w-32 absolute top-28 right-8 cursor-pointer">
        <div className="img overflow-hidden h-full z-10">
          <img src={img_4} alt="img" className="h-full w-full object-cover" width="426" height="600"/>
        </div>
      </div>

      <div className="container w-32 absolute top-[410px] right-24 cursor-pointer">
        <div className="img overflow-hidden h-full z-10">
          <img src={img_2} alt="img" className=" h-full w-full object-cover" width="398" height="600"/>
        </div>
      </div>

      <div className="container w-32 absolute top-[400px] left-8 cursor-pointer">
        <div className="img overflow-hidden h-full z-10">
          <img src={img_3} alt="img" className=" h-full w-full object-cover" width="444" height="599"/>
        </div>
      </div>

      <div className="container w-28 absolute top-56 left-72 cursor-pointer">
        <div className="img overflow-hidden h-full z-10">
          <img src={img_5} alt="img" className=" h-full w-full object-cover" width="524" height="600" />
        </div>
      </div>

      <div className="container w-28 absolute top-48 right-72 cursor-pointer">
        <div className="img overflow-hidden h-full z-10">
          <img src={img_6} alt="img" className=" h-full w-full object-cover" width="450" height="600" />
        </div>
      </div>

      <section className={`${i18n.language === 'en' ? 'Playfair uppercase text-[115px] md:text-9xl tracking-wider' : 'Faseh text-[250px] md:text-[300px]'} relative`}>
        <div className={`${i18n.language === 'en' ? 'top-[-115px] md:top-[-105px]' : 'top-[-250px] md:top-[-300px]' } absolute left-1/2 transform -translate-x-1/2 overflow-hidden`} >
          <h1 className="omar">{t("omar")}</h1>
        </div>

        <div className="main_container flex items-center justify-center w-[400px] h-auto">
          <div className="img overflow-hidden h-full z-10">
            <img src={img_0} alt="img" className="h-full w-full object-cover" width="446" height="600"/>
          </div>
        </div>

        <div className={`${i18n.language === 'en' ? 'bottom-[-90px] md:bottom-[-80px]' : 'bottom-[-200px]' } z-20 absolute left-1/2 transform -translate-x-1/2 mix-blend-difference text-white overflow-hidden`}>
          <h1 className="barka">{t("barka")}</h1>
        </div>
      </section>


      {/* <Footer /> */}
    </div>
  )
}

export default Home