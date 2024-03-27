import { useEffect, useRef } from 'react'
import omar from '/omar_480.webp'
import gsap from 'gsap'
import { useTranslation } from "react-i18next"

const About = () => {

  const { t } = useTranslation()
  const containerRef = useRef()
  const imgRef = useRef()
  const nameRef = useRef()
  const bioRef = useRef()

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.fromTo(containerRef.current, 1, { yPercent: -100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, delay: 1 })
      .from(imgRef.current, 1, { yPercent: 100, scale: 1.3, delay: -1 })
      .fromTo(nameRef.current, 1.2, { yPercent: 200, skewY: 7 }, { yPercent: 0, skewY: 0 })
      .fromTo(bioRef.current, 0.7, { autoAlpha: 0, yPercent: 70 }, { autoAlpha: 1, yPercent: 0 }, '-=0.5')

    return () => tl.kill()
  }, [])


  return (
    <>
      <div className='p-6 mt-8 flex flex-col md:flex-row justify-between items-center'>

        <div className='relative overflow-hidden' ref={containerRef} >
          <img src={omar} alt='img' className='object-cover origin-top' ref={imgRef} />
        </div>

        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='overflow-hidden py-2'>
            <h1 className='Playfair text-[44px] text-5xl font-semibold tracking-wide uppercase' ref={nameRef} >{t("omar")} {t('barka')}</h1>
          </div>
          <p className='omnes text-gray text-xl leading-10  mt-4 w-full md:w-[75%]' ref={bioRef} >{t("bio")}</p>
        </div>

      </div>     
    </>

  )
}

export default About