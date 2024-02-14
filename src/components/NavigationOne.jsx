import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function NavigationOne() {
    const [mobile, setMobile] = useState(window.innerWidth <= 640);
    const [menuOpend, setMenuOpend] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 640);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className='w-full h-fit bg-slate-800 min-[0px]:hidden min-[140px]:block drop-shadow-2xl fixed'>
            <nav className='flex justify-between sm:items-center sm:w-[92%]  w-[70%] mx-auto'>
                <div className='sm:static relative z-10'>
                    <img src={logo} className='w-20 cursor-pointer ' />
                </div>

                {menuOpend === false && mobile === true ? (
                    <div className="">
                        <FontAwesomeIcon icon={faBars} onClick={() => setMenuOpend(true)} className="text-slate-50 text-3xl relative top-5" />
                    </div>) : (
                    <div className=' sm:static absolute sm:min-h-fit  min-h-screen right-0  top-[9vw] bg-slate-800 sm:w-auto sm:py-0 py-16  w-1/2 flex  px-5 z-0 '>
                        <ul className='flex sm:flex-row flex-col sm:items-center sm:gap-[4vw] gap-10 text-slate-50'>
                            <li className="absolute top-[-4vw] right-10"> <FontAwesomeIcon icon={faXmark} onClick={() => setMenuOpend(false)} className="text-slate-50 text-3xl" /></li>
                            <li className='hover:text-pink-700 '><a href='#home'>Home</a></li>
                            <li className='hover:text-pink-700 '><a href='#About'>About</a></li>
                            <li className='hover:text-pink-700 '><a href='#Projects'>Projects</a></li>
                            <li className='hover:text-pink-700 '><a href='#Experience'>Experience</a></li>
                            <li><button className='w-24 h-8 bg-pink-600 text-white rounded-md btn hover:bg-pink-700 cursor-pointer sm:hidden '>Get Start</button></li>
                        </ul>
                    </div>
                )}


                <div className='sm:block hidden sm:static relative  items-center gap-6 z-10 '>
                    <button className='w-24 h-8 bg-pink-600 text-white rounded-md btn hover:bg-pink-700 cursor-pointer '>Get Start</button>
                </div>

            </nav>
        </header>

    )
}

export default NavigationOne