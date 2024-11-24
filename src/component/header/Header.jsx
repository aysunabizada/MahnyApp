import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";
import { IoHeartOutline, IoMoonOutline, IoSearchOutline, IoLogOutOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiWaveform } from "react-icons/pi";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaCompactDisc } from "react-icons/fa";
import { MdLibraryMusic, MdOutlineLineWeight, MdVideoLibrary } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { FaRadio, FaHeart, FaHeadphonesSimple, FaPeopleGroup } from "react-icons/fa6";
import { IoAlbums } from "react-icons/io5";

function Header() {
    const { setOpenAside, openAside } = useContext(Cntx);
    const [accSt, setAccSt] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setOpenAside(width >= 1024 || (width >= 768 && width < 1024 ? false : openAside));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setOpenAside]);
    

    return (
        <>
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
            <aside
                className={`${openAside ? "translate-x-0" : "-translate-x-full"} 
                fixed top-[65px] left-0 w-[250px] md:w-[280px] h-screen overflow-y-auto pb-[100px] px-10 py-5 
                dark:bg-[#141414] dark:text-gray-800 z-50 shadow-md shadow-[#222] 
                transition-transform duration-300`}
            >
                <nav className="space-y-8 text-sm">
                    <div className="muzieknootjes">
                        <div className="noot-1">&#9835; &#9833;</div>
                        <div className="noot-2">&#9833;</div>
                        <div className="noot-3">&#9839; &#9834;</div>
                        <div className="noot-4">&#9834;</div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-sm font-semibold tracking-widest mb-5 dark:text-gray-600">
                            Browse
                        </h2>
                        <div className="flex flex-col space-y-1">
                            <Link to={'/'} className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><FaCompactDisc className="text-lg" />Discover</Link>
                            <div
                                onClick={() => setAccSt((prev) => !prev)}
                                className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d] cursor-pointer justify-between"
                            >
                                <div className="flex items-center gap-4"><MdLibraryMusic className="text-lg" />Browse</div>
                                <IoMdArrowDropdown className={`transition-transform duration-300 ${accSt ? 'rotate-180' : ''}`} />
                            </div>
                            <ul className={`overflow-hidden pl-10 text-[#EDEDED] transition-all duration-300 ${accSt ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <li className="py-3 px-2 transition-all rounded-md hover:bg-[#d4dce40d] hover:text-[#950101]">
                                    <Link to={'/music'} className="block">‒ Music</Link>
                                </li>
                                <li className="py-3 px-2 transition-all rounded-md hover:bg-[#d4dce40d] hover:text-[#950101]">
                                    <Link className="block">‒ Podcasts</Link>
                                </li>
                            </ul>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><MdOutlineLineWeight className="text-lg" />New Release</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><BsBarChartFill className="text-lg" />Charts</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><FaRadio className="text-lg" />Radio</Link>
                        </div>
                    </div> <br />
                    <div className="muzieknootjes">
                        <div className="noot-1">&#9835; &#9833;</div>
                        <div className="noot-2">&#9833;</div>
                        <div className="noot-3">&#9839; &#9834;</div>
                        <div className="noot-4">&#9834;</div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-sm font-semibold tracking-widest mb-5 dark:text-gray-600">
                            Library
                        </h2>
                        <div className="flex flex-col space-y-1">
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><MdVideoLibrary className="text-lg" />Playlist</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><FaHeadphonesSimple className="text-lg" />Stream</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><FaHeart className="text-lg" />Likes</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><IoAlbums className="text-lg" />Albums</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><FaPeopleGroup className="text-lg" />Artist</Link>
                        </div>
                    </div>
                    <ul className="text-gray-700">
                        <li>The soundtrack to your soul begins here.</li> <br />
                        <li>By Mimi & Aysu</li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Header;
