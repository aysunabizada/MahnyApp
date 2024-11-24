import Slider from "./Silder";
import SliderRecommend from "./SliderRecommend";
import ticket from '../../assets/img/ticket.png';
import Artists from "./Artists";

function Main() {
    return (
        <main className='bg-[#101010] relative w-full text-white'>
            <div className="sm:ml-[22%] mx-[5%] pt-[7rem]">
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
                            <button class="bg-[#95010188] px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-[#141414]">Folow</button>
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
                <section className="relative py-12 my-5">
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
                    <div className="relative text-center py-12 px-3 z-10">
                        <h2 className="text-4xl text-white">Discover songs you’ll love</h2>
                        <p className="italic py-4 text-white">Find the most popular artists and listen their music. Create your ownplaylist when listening to them.</p>
                        <button
                            className="relative px-8 py-3 rounded-md bg-[#222] isolation-auto z-10
                            before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full 
                            before:hover:right-0 before:rounded-full  before:bg-[#95010188] before:-z-10  before:aspect-square before:hover:scale-150 
                            overflow-hidden before:hover:duration-700 mt-3 text-white"
                        >
                            Explore the New Music
                        </button>
                    </div>
                </section>
                <section>
                    <h2 className="text-xl doto py-10">Recommended for you</h2>
                    <SliderRecommend /> <br /> <br />
                </section>
                <section>
                    <div className="pt-16 lg:py-24">
                        <div className="bg-[#210606] pb-16 lg:relative lg:z-10 lg:pb-0">
                            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                                <div className="relative lg:-my-8">
                                    {/* <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" /> */}
                                    <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                                        <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                            <img
                                                className="object-cover lg:h-full lg:w-full"
                                                src="https://pbs.twimg.com/media/GZxZnPCW4AsRJKE.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                                        <blockquote>
                                            <div>
                                                <svg
                                                    className="h-12 w-12 text-white opacity-25"
                                                    fill="currentColor"
                                                    viewBox="0 0 32 32"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p className="mt-6 text-2xl font-medium text-white">
                                                    Music connects hearts and transcends boundaries. It evokes emotions, tells stories, and brings people together. Whether soothing or energizing, music is a timeless companion to our lives.</p>
                                            </div>
                                            <footer className="mt-6">
                                                <p className="text-base font-medium text-white">Zayn Malik</p>
                                                <p className="text-base font-medium text-indigo-100">Artist</p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="text-2xl doto">Popular</h2>
                <Slider />
                <section>
                    <div className="p-6 py-12 dark:bg-default-600 dark:text-gray-50">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                <br className="sm:hidden" /> 50% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>Plus free shipping! Use code:</span>
                                <span className="font-bold text-lg">ayzumimi50</span>
                            </div>
                            <button
                                className="relative px-8 py-3 rounded-md bg-black isolation-auto z-10 border border-[#95010188]
                            before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full 
                            before:hover:right-0 before:rounded-full  before:bg-[#95010188] before:-z-10  before:aspect-square before:hover:scale-150 
                            overflow-hidden before:hover:duration-700 mt-3 text-white"
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <img src={ticket} alt="ticket" className="rounded-md pb-12" />
                </section>
                <h2 className="text-2xl doto">Your favorite artists</h2>
                <Artists />
            </div>
        </main>
    )
}

export default Main