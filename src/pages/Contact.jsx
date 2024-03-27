import { useEffect, useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import emailjs from '@emailjs/browser';
import gsap  from 'gsap';

const Contact = () => {

  const { t } = useTranslation()
  const {name, email, message, send, gotMessage} = t("contact")

  const form = useRef();
  const msgRef = useRef();

  const [msgSent, setMsgSent] = useState(false);
  const [useName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [useMessage, setMessage] = useState("");
  const [adress, setadress] = useState("");
  const [empty, setEmpty] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();

    if(adress) {
      return;
    }
    else if (!useName) {
      setEmpty("nameError")
    }
    else if (!userEmail) {
      setEmpty("emailError")
    }
    else if (!useMessage) {
      setEmpty("messageError")
    }

    else {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
          setMsgSent(true)
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.target.reset();
    }
  };


    //----msg banner animation---------------------//
    useEffect(() => {

      const ctx = gsap.context(() => {
        if (msgSent) {
          gsap.fromTo(msgRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power4.easeIn' })
        }
      })
  
      return () => ctx.revert();
    }, [msgSent])
  
  
    //----clear msg banner----------------------//
    useEffect(() => {
      if (msgSent) {
        setTimeout(() => {
          setMsgSent(false)
        }, 5000)
      }
    }, [msgSent])
  

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>

      <form className='bg-black text-white rounded-lg flex flex-col items-center justify-center p-6' ref={form} onSubmit={sendEmail}  >
        <input type='text' placeholder={name}
          className={`${empty === 'nameError' ? 'border-b border-red placeholder-red' : 'border-b border-white placeholder-white'} w-80 my-4 bg-black block focus:outline-none focus:border-b-2 py-2 tracking-wide`}
          onChange={e => setName(e.target.value)} />

        <input type='email' placeholder={email}
          className={`${empty === 'emailError' ? 'border-b border-red placeholder-red' : 'border-b border-white placeholder-white'} w-80 my-4 bg-black block focus:outline-none focus:border-b-2 py-2 tracking-wide`}
          onChange={e => setEmail(e.target.value)}
        />

        <input type='text' placeholder='adress' 
          className="hidden"
          onChange={e => setadress(e.target.value)}
        />

        <textarea placeholder={message}
          className={`${empty === 'messageError' ? 'border-b border-red placeholder-red' : 'border-b border-white placeholder-white'} w-80 h-20 resize-none bg-black overflow-hidden block border-b border-[#090909] focus:outline-none focus:border-b-2 py-2 tracking-wide placeholder-gray-600`}
          onChange={e => setMessage(e.target.value)}>
        </textarea>

        {!msgSent ? <input type="submit" value={send} 
              className='relative block bg-white text-black rounded-md tracking-wide px-7 py-1.5 mt-6 z-10 cursor-pointer ' />
            : <p ref={msgRef} className='py-1.5 px-4 mt-6 text-center bg-white tracking-wide text-black'>{gotMessage}</p>
          }
      </form>

    </div>
  )
}

export default Contact