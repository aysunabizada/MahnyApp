import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoMoonOutline, IoSearchOutline, IoLogOutOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiWaveform } from "react-icons/pi";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Cntx } from "../../context/DataContext";

function Header() {
    const { setOpenAside, openAside } = useContext(Cntx);

    return (
        <header className="bg-[#000] text-white py-3 fixed w-full z-[9999] shadow-md shadow-[#111]">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-2 hover:text-[#950101] transition-all duration-300">
                    <PiWaveform onClick={() => { setOpenAside(!openAside) }} className="text-2xl cursor-pointer active:scale-105" />
                    <Link to="/" className="text-2xl doto">Mahny</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="inline-flex">
                            <p to="/" className="capitalize flex items-center hover:text-[#950101] duration-300 cursor-pointer transition-all">explore <IoMdArrowDropdown className="text-white" /></p>
                        </MenuButton>
                        <MenuItems transition className="absolute right-[-100%] z-10 mt-7 p-4 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="py-1 flex sm:flex-row flex-col gap-5">
                                <MenuItem>
                                    <div className="block text-nowrap px-4 py-2">
                                        <h3 className="flex items-center italic">Help <IoMdArrowDropdown className="text-white" /></h3>
                                        <ul className="text-sm capitalize pt-4">
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>Settings</Link></li>
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>support</Link></li>
                                            <li className="hover:text-[#950101] transition-all"><Link>upgrade to Premium</Link></li>
                                        </ul>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="block text-nowrap px-4 py-2">
                                        <h3 className="flex items-center italic">Play <IoMdArrowDropdown className="text-white" /></h3>
                                        <ul className="text-sm capitalize pt-4">
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link to={'/'}>Album</Link></li>
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>playlist</Link></li>
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>Lyrics</Link></li>
                                            <li className="hover:text-[#950101] transition-all"><Link>youtube music</Link></li>
                                        </ul>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="block text-nowrap px-4 py-2">
                                        <h3 className="flex items-center italic">Pages <IoMdArrowDropdown className="text-white" /></h3>
                                        <ul className="text-sm capitalize pt-4">
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>about</Link></li>
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>contact</Link></li>
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link to={'/'}>Back to main</Link></li>
                                            <li className="mb-3 hover:text-[#950101] transition-all"><Link>Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                    <div className="input-wrapper">
                        <button className="icon"><IoSearchOutline className="text-2xl" /></button>
                        <input placeholder="search.." className="input" name="text" type="text" />
                    </div>
                    <Link><IoHeartOutline className="text-2xl hover:text-[#950101] transition-all duration-300" /></Link>
                    <IoMoonOutline className="text-2xl cursor-pointer" />
                    <IoLogOutOutline className="text-2xl cursor-pointer hover:text-[#950101] transition-all duration-300" />
                </div>
            </div>
        </header>
    );
}

export default Header;
