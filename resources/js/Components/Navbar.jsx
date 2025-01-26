import { Link } from "@inertiajs/react";
import React from "react";
const Navbar = ({ title = "My App", name = "Cat" , onClick =()=>{} }) => {

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-md md:text-3xl">
                        {title}
                    </Link>

                    <div className=" md:flex hidden items-center gap-3">
                        <img
                            src="/storage/profile.jpg"
                            alt="Profile"
                            className="md:w-14 md:h-14 w-8 h-8 rounded-full"
                        />
                        <p className="md:text-xl sm:text-sm text-white"> Hello, {name}</p>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={onClick} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
