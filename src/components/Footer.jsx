import { useTranslation } from "react-i18next"

const Footer = () => {

    const {t} = useTranslation()


    return (
        <div className='absolute bottom-0 w-full flex flex-col items-center justify-center'>

            <div className='flex items-center justify-center md:justify-between w-[80%] border-t-[0.5px] border-[#94a3b8] pt-2 md:pt-4 md:px-4'>

            <div className="flex items-center justify-between w-36">
                <a href='https://www.instagram.com/omarbarka82/?igsh=MWhlanN3NXZndXcybA%3D%3D' target='_blank' aria-label='Instagram' className="hover:opacity-70 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9m0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3m213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165m-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8" /></svg>
                </a>
                <a href='https://www.facebook.com/people/%D8%B9%D9%85%D8%B1-%D8%A8%D8%B1%D9%83%D8%A9/100001398281150/?mibextid=ZbWKwL' target='_blank' aria-label='Facebook' className="hover:opacity-70 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1" /></svg>
                </a>
                <a href='https://twitter.com/omar_barka?t=Xk3kVlwWqCntJdfaAp7sCQ&s=09' target='_blank' aria-label='Twitter' className="hover:opacity-70 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                </a>
                <a href='https://www.linkedin.com/in/omar-barka-881a911bb' target='_blank' aria-label='Linkedin' className="hover:opacity-70 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.511 1.511 0 0 1-1.5 1.5H5.56a1.511 1.511 0 0 1-1.5-1.5V5.56a1.511 1.511 0 0 1 1.5-1.5h12.88a1.511 1.511 0 0 1 1.5 1.5Z" /><path fill="currentColor" d="M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z" /><circle cx="7.376" cy="6.744" r="1" fill="currentColor" /><path fill="currentColor" d="M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1a.94.94 0 0 1 .84.47a3.609 3.609 0 0 1 5.39 3.15" /></svg>
                </a>
              </div>


            <p className='text-xs'>
                <span className='font-sans'>&#169;</span>
                <span>{new Date().getFullYear()}, {t("omar")} {t("barka")}, {t("rights")}.</span>
            </p>

            </div>

        </div>
    )
}

export default Footer