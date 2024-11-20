import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoMoonOutline, IoSearchOutline, IoLogOutOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Cntx } from "../../context/DataContext";

function Header() {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const { setOpenAside, openAside } = useContext(Cntx);
    console.log(openAside);
    

    return (
        <header className="bg-black text-white py-3 fixed w-full z-[9999] shadow-xl">
            <div className="container flex items-center justify-between">
                <div className="flex items-end gap-5" onClick={()=> {setOpenAside(true)}}>
                    <label className="flex flex-col mb-2 gap-2 w-6">
                        <input className="peer hidden" type="checkbox" />
                        <div
                            className="rounded-2xl h-[2px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[8px] peer-checked:-translate-y-[-2px]"
                        ></div>
                        <div
                            className="rounded-2xl h-[2px] w-full bg-white duration-500 peer-checked:-rotate-45"
                        ></div>
                        <div
                            className="rounded-2xl h-[2px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[8px] peer-checked:translate-y-[-1px]"
                        ></div>
                    </label>
                    <Link to="/" className="text-2xl">Mahny</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="inline-flex">
                            <p to="/" className="capitalize flex items-center hover:text-gray-400 cursor-pointer transition-all">explore <IoMdArrowDropdown className="text-white" /></p>
                        </MenuButton>
                        <MenuItems transition className="absolute right-[-100%] z-10 mt-7 p-4 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="py-1 flex sm:flex-row flex-col gap-5">
                                <MenuItem>
                                    <div className="block text-nowrap px-4 py-2">
                                        <h3 className="flex items-center italic">Help <IoMdArrowDropdown className="text-white" /></h3>
                                        <ul className="text-sm capitalize pt-4">
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>Settings</Link></li>
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>support</Link></li>
                                            <li className="hover:text-gray-400 transition-all"><Link>upgrade to Premium</Link></li>
                                        </ul>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="block text-nowrap px-4 py-2">
                                        <h3 className="flex items-center italic">Play <IoMdArrowDropdown className="text-white" /></h3>
                                        <ul className="text-sm capitalize pt-4">
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link to={'/'}>Album</Link></li>
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>playlist</Link></li>
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>Lyrics</Link></li>
                                            <li className="hover:text-gray-400 transition-all"><Link>youtube music</Link></li>
                                        </ul>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="block text-nowrap px-4 py-2">
                                        <h3 className="flex items-center italic">Pages <IoMdArrowDropdown className="text-white" /></h3>
                                        <ul className="text-sm capitalize pt-4">
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>about</Link></li>
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>contact</Link></li>
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link to={'/'}>Back to main</Link></li>
                                            <li className="mb-3 hover:text-gray-400 transition-all"><Link>Privacy Policy</Link></li>
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
                    <Link><IoHeartOutline className="text-2xl" /></Link>
                    <IoMoonOutline className="text-2xl cursor-pointer" />
                    <button
                        type="button"
                        onMouseOver={() => setPopoverOpen(!popoverOpen)}
                    >
                        <IoLogOutOutline className="text-2xl" />
                    </button>
                    {popoverOpen && (
                        <div className="absolute z-10 right-5 top-16 inline-block text-sm text-gray-500 bg-gray-900 rounded-lg">
                            <div className="px-3 py-2 text-red-700 font-semibold">
                                <p>Log out</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
