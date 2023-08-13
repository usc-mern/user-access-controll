/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from 'react-icons/ai';
import HeaderNavMenu from "./HeaderNavMenu";



const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="bg-gradient-to-t from-white to-[#E6FFFF]">
            <div className="max-w-[1140px]   mx-auto  ">

                <div className="  md:hidden  px-6 sm:px-16 md:px-6   py-2  items-center">
                    <div className="sm:flex sm:gap-10 justify-between  text-black/[.5]">
                        <div>
                            <h1 className="text-3xl font-extrabold cursor-pointer"> USC</h1>
                        </div>
                        <div
                            className="sm:flex-none  cursor-pointer flex  items-center mt-2"
                            onClick={() => setToggle(!toggle)}
                        >
                            <p className="pr-2 ">MENU </p>
                            <AiOutlineBars />
                        </div>

                    </div>

                    {
                        toggle &&
                        <div className=" flex flex-col  gap-5 py-3" onClick={() => setToggle(!toggle)}>

                            <HeaderNavMenu />

                        </div>
                    }

                </div>


                <div className=" hidden md:flex md:justify-between px-6 py-4   items-center text-slate-600">
                    <div>
                        <h1 className="text-4xl font-extrabold cursor-pointer">
                            <Link to='/' className="text-secondary">USC</Link>
                        </h1>
                    </div>

                    <div className=" flex  gap-10 text-lg" onClick={() => setToggle(false)}>
                        <HeaderNavMenu />

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Header;