import React from 'react'
import Logo from "../../assets/logo.png";
import {BiPhoneCall} from "react-icons/bi";
import DarkMode from './DarkMode';
export const Navlinks =[
    {
        id: 1,
        name: "SERVICES",
        link: "/#services",
    },
    {
        id: 2,
        name: "ABOUT",
        links: "/#about",
    },
    {
        id: 3,
        name:"JOIN",
        links:"/#join",
    },
];

const Navbar = () => {
  return (
    <>
     <nav className="relative z-10 shadow-md w-full dark:bg-dark dark:text-white">
        <div className="Container ">
         <div className="flex items-center justify-between">
            <div className="flex item_centre gap-2 group py-3 sm:py-0" >
                <BiPhoneCall className="text-2xl text-primary animate-pulse group-hover: scale-105 duration-200"/>
                <span>+91 123456789</span>
            </div>
            <div>
             <img src={Logo} alt=""
             className="w-16 sm:w-24 absolute top-0 right-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0"/>
             </div>
             <div className="hidden sm:block">
                <ul className="flex items-center gap-8">
                 {Navlinks.map((links) =>(
                    <li key={links.id}>
                        <a href={links.link} className="inline-block py-3 text-lg font-semibold hover:text-primary duration-200">
                            {links.name}</a>
                    </li>
                 ))}
                 <DarkMode />
                 </ul>
             </div>
         </div>
        </div>
     </nav>
    </>
  )
}

export default Navbar
