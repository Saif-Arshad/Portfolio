"use client";

import React from 'react';

function AboutUs() {
    return (
        <section className="py-14 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-2 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Me</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-100 text-3xl sm:text-4xl font-bold font-manrope leading-normal lg:text-start sm:text-center">
                                        Let’s create something amazing together! 🚀</h2>
                                    <p
                                        className="text-gray-300 text-base font-normal leading-relaxed lg:text-start sm:text-center">
                                        I am a passionate Full Stack Developer with 3+ years of professional experience (and if you count the sleepless nights, it’s easily 4!). Over the years, I have built dynamic websites and applications that not only meet client expectations but also deliver exceptional user experiences. I take pride in crafting efficient, scalable, and creative solutions to help businesses grow and thrive in the digital world.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">4+ Years</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Professional Experience in Development
                                        </p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">50+ Projects</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Successfully Delivered with Excellence
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">100% Happy Clients</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Reflecting Our Commitment to Satisfaction.  We believe in building strong relationships and delivering exceptional results that exceed expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-center items-start flex">
                        <div className="w-full h-full relative">
                            <img
                                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src="/images/icons/Developer activity-bro.png"
                                alt="About Us image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
