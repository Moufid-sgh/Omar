import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import omar from '/omar_480.webp'
import Modal from "../components/Modal";

gsap.registerPlugin(Flip);

const Gallery = () => {


  //----opan modal----------------------------------------------------//
  useGSAP(() => {

    const image = document.querySelector('.image')
    const imgContainer2 = document.querySelector('.imgContainer2')

    const handleClick = () => {

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to('.modalContainer', { x: '0%', duration: 1, ease: 'power4.easeInOut' })

          const boxState = Flip.getState(image);
          imgContainer2.appendChild(image);
          Flip.from(boxState, { duration: 0.8, ease: 'power1.out'})
    
        }
      })

      tl.to('.bloc', { width: '+=100', ease: 'power2.out', duration: 1.2 })
        .to('.bloc', { width: 0, ease: "power4.in", delay: 0.2, duration: 0.2 })

    }

    image.addEventListener('click', handleClick)

    return () => image.removeEventListener('click', handleClick)
  })

  //----close modal--------------------------------------------------//
  useGSAP(() => {

    const image = document.querySelector('.image')
    const imgContainer1 = document.querySelector('.imgContainer1');
    const close = document.querySelector('.close')

    const handleClick = () => {

          gsap.to('.modalContainer', { x: "200%", duration: 1, delay: 0.5, ease: 'power4.easeInOut' })

          const boxState = Flip.getState(image);
          imgContainer1.appendChild(image);
          Flip.from(boxState, { duration: 1, delay: 0.5,  ease: 'power1.out'})
  
    }

    close.addEventListener('click', handleClick)

    return () => close.removeEventListener('click', handleClick)
  })



  return (
    <div className="m-8">
      <div className="imgContainer1 relative w-fit overflow-hidden">
        <div className="bloc absolute top-0 right-0 h-full bg-white"></div>
        <div className="image w-fit z-50">
          <img src={omar} alt='omar' className="img object-fit" />
        </div>
      </div>

      <Modal />
    </div>
  )
}

export default Gallery