import React from 'react';
import DarkVeil from '../components/DarkVeil';
import ShinyText from '../components/Shinytext';

const Home = () => {
    return (
        <div className="relative w-full h-screen m-0 p-0 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <DarkVeil />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <ShinyText
                    text="Begin Your Adventure in Web Development Today"
                    disabled={false}
                    speed={3}
                    className="text-5xl sm:text-7xl font-semibold text-white mb-10 max-w-3xl mx-auto"
                />
                <p className="text-lg sm:text-xl text-indigo-300 mb-10 max-w-2xl">
                    From beginner to expert, learn the skills you need to build modern, responsive websites and applications.
                </p>

                <div className="flex items-center justify-center gap-x-6">
                    <a
                        href="#First-Section"
                        className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-00 transition-all duration-200 ease-in-out"
                    >
                        LESSS GOO..!!!
                    </a>
                    {/* <a
            href="#"
            className="text-sm font-semibold text-white hover:scale-110 transition-transform duration-200"
          >
            Browse Courses <span aria-hidden="true">→</span>
          </a> */}
                </div>
            </div>

            
        </div>
    );
};

export default Home;
