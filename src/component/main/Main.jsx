import { Link } from "react-router-dom"
import { FaCompactDisc } from "react-icons/fa";
import { MdLibraryMusic, MdOutlineLineWeight, MdVideoLibrary } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { FaRadio, FaHeart, FaHeadphonesSimple, FaPeopleGroup } from "react-icons/fa6";
import { IoAlbums } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { Cntx } from "../../context/DataContext";
import Slider from "./Silder";
import SliderRecommend from "./SliderRecommend";

function Main() {
    const { openAside, setOpenAside } = useContext(Cntx);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setOpenAside(false);
            } else if (window.innerWidth >= 1024) {
                setOpenAside(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setOpenAside]);

    return (
        <main className={`bg-[#101010] relative w-full text-white`}>
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
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><FaCompactDisc className="text-lg" />Discover</Link>
                            <Link className="text-[#EDEDED] p-2.5 font-semibold flex items-center gap-4 hover:text-[#950101] transition-all rounded-md hover:bg-[#d4dce40d]"><MdLibraryMusic className="text-lg" />Browse</Link>
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
            <div className="sm:ml-[22%] mx-[5%] pt-[7rem] min-h-[100vh]">
                <h2 className="text-2xl doto">Featured</h2>
                <Slider />
                <section>
                    <h2 className="text-xl doto py-10">Verified Artists</h2>
                    <div className="flex gap-6 flex-wrap md:justify-start justify-center">
                        <div class="group card before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-[url('https://i.scdn.co/image/ab67616d0000b2736cfd9a7353f98f5165ea6160')] bg-cover bg-center before:absolute before:top-0 w-[250px] h-72 relative bg-[#141414] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div class="w-32 h-32 bg-[url('https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec')] bg-cover bg-center mt-3 rounded-full border-4 border-[#141414] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span class="text-2xl font-semibold">Travis Scoot</span>
                                <p>Artist</p>
                            </div>
                            <a class="bg-[#95010188] px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-[#141414]" href="#">Folow</a>
                        </div>
                        <div class="group card before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9UFtOTjzvHifbNbdE3M7PMJuvT28PU02Wg&s')] bg-cover bg-center bg-no-repeat before:absolute before:top-0 w-[250px] h-72 relative bg-[#141414] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div class="w-32 h-32 bg-[url('https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36')] bg-cover bg-center mt-3 rounded-full border-4 border-[#141414] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span class="text-2xl font-semibold">The Weekend</span>
                                <p>Artist</p>
                            </div>
                            <a class="bg-[#95010188] px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-[#141414]" href="#">Folow</a>
                        </div>
                        <div class="group card before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-[url('https://media.pitchfork.com/photos/5a9f0c13b848c0268b2016bb/1:1/w_800,h_800,c_limit/The%20Neighbourhood.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:top-0 w-[250px] h-72 relative bg-[#141414] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div class="w-32 h-32 bg-[url('https://i.pinimg.com/originals/68/8c/99/688c99bae99d65ca26f2c36fb29260cc.jpg')] bg-cover bg-center mt-3 rounded-full border-4 border-[#141414] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span class="text-2xl font-semibold">The Neighborhood </span>
                                <p>Band</p>
                            </div>
                            <a class="bg-[#95010188] px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-[#141414]" href="#">Folow</a>
                        </div>
                        <div class="group card before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/37/ce/03/37ce0358-84e6-ba7e-6ce3-5313229f3802/cover.jpg/486x486bb.png')] bg-cover bg-center bg-no-repeat before:absolute before:top-0 w-[250px] h-72 relative bg-[#141414] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div class="w-32 h-32 bg-[url('https://yt3.googleusercontent.com/ytc/AIdro_lj-yZn8gte-ptTznSE16LqhiAvYN6RFGuXfAXJ8Gbglw=s900-c-k-c0x00ffffff-no-rj')] bg-cover bg-center mt-3 rounded-full border-4 border-[#141414] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span class="text-2xl font-semibold">Eyyub Yaqubov</span>
                                <p>Artist</p>
                            </div>
                            <a class="bg-[#95010188] px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-[#141414]" href="#">Folow</a>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-xl doto py-10">Recommended for you</h2>
                    <SliderRecommend /> <br /> <br />
                </section>
            </div>
        </main>
    )
}

export default Main