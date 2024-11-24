import { Link } from "react-router-dom";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoPlayCircleSharp } from "react-icons/io5";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Music() {
    return (
        <section className="bg-[#101010] text-[#EDEDED] py-5">
            <div className=' sm:ml-[22%] mx-[5%] pt-[5rem]'>
                <ul className="flex gap-5 py-5 items-center overflow-x-auto no-scroolbar">
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300 text-nowrap">New Release</Link></li>
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300">Popular</Link></li>
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300">Music</Link></li>
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300">Podcasts</Link></li>
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300">Radio</Link></li>
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300">Album</Link></li>
                    <li><Link className="py-2 px-4 bg-[#222] rounded-md hover:text-[#950101] transition-all duration-300">Playlist</Link></li>
                </ul>
                <div className="py-5 flex gap-8 flex-wrap justify-center md:justify-start">
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                    <div className="card max-w-[160px] rounded-md shadow-md text-[#EDEDED] shadow-[#1f1e1e] relative">
                        <img className="object-cover object-center w-full rounded-t-md " src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20cf211e4ea594a8b92892e7a6cdc2ec" alt="" />
                        <IoPlayCircleSharp className='album-hover text-5xl opacity-0 translate-y-5 absolute right-2 bottom-2 cursor-pointer hover:scale-110 transition-all duration-300' />
                        <Menu as="div" className="album-hover absolute top-4 right-3 inline-block text-left opacity-0 translate-y-5">
                            <div>
                                <Menu.Button className="text-xl cursor-pointer">
                                    <FaEllipsisVertical aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-[-20px] z-10 py-3 text-sm text-nowrap origin-top-right rounded-md bg-[#222]">
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to Playlist</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Next to play</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Add to queue</p>
                                    </Menu.Item>
                                    <Menu.Item className='py-2.5 px-5 cursor-pointer hover:bg-[#444]'>
                                        <p>Share</p>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-2 px-3">
                            <h2 className="text-md font-semibold tracking-wide">FE!N</h2>
                            <Link className="text-gray-400 hover:underline">Travis Scoot</Link>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-1 py-5 text-white">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-[#222] dark:border-[#333]">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-[#222] dark:border-[#333]">1</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-[#222] dark:border-[#333]" title="Page 2">2</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-[#222] dark:border-[#333]" title="Page 3">3</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-[#222] dark:border-[#333]" title="Page 4">4</button>
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-[#222] dark:border-[#333]">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
