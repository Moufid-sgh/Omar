import { createPortal } from "react-dom"
// import  gsap  from "gsap";
// import { useGSAP } from "@gsap/react";

const Modal = () => {


  return createPortal(
    <div className="modalContainer fixed top-0 left-0 md:left-48 translate-x-[200%] right-0 bottom-0 bg-black z-40">
        <span className='close absolute top-4 right-5 z-20 text-3xl text-white hover:text-red duration-300 cursor-pointer'>&#10005;</span>
        <div className="imgContainer2 absolute top-16 md:top-10 left-2 right-2 md:left-10"></div>
    </div>
    ,document.getElementById("portalModal")     
  )
}

export default Modal