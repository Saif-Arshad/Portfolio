import React from "react";
import { FcBusinessman } from "react-icons/fc";

const experiences = [
    {
        role: "Full Stack Developer",
        location: "Faisalabad, Pakistan - Full Time",
        startDate: "2024-11-01", // YYYY-MM-DD
        endDate: "Present", // Use "Present" for ongoing jobs
        image: "/company/fuzion_dev.png",
    },
    {
        role: "MERN Stack Developer",
        location: "Faisalabad, Pakistan - Full Time",
        startDate: "2024-03-01",
        endDate: "2024-11-01",
        image: "/company/devshine_logo.jpeg",
    },
    {
        role: "Junior MERN Stack Developer",
        location: "Faisalabad, Pakistan - Full Time",
        startDate: "2023-07-01",
        endDate: "2024-02-01",
        image: "/company/devontix.jpg",
    },
    {
        role: "Web Developer",
        location: "Faisalabad, Pakistan - Training & Internship",
        startDate: "2022-06-01",
        endDate: "2023-07-01",
        image: "/company/weversity.png",
    },
];

const calculateDuration = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
        return `${years} year${years > 1 ? "s" : ""} ${remainingMonths}+ month${remainingMonths > 1 ? "s" : ""}`;
    } else if (years > 0) {
        return `${years}+ year${years > 1 ? "s" : ""}`;
    } else {
        return `${remainingMonths}+ month${remainingMonths > 1 ? "s" : ""}`;
    }
};

const CareerPath = () => {
    return (
        <section className="py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full mx-auto">
                <div className="w-full justify-between sm:items-center flex flex-col sm:flex-row border-b border-neutral-500 border-dashed pb-4">
                    <div className="flex-col justify-start flex">
                        <h2 className="text-gray-100 text-3xl flex items-center font-semibold font-manrope leading-normal lg:text-start sm:text-center">
                            <FcBusinessman className="mr-1" /> Career Path
                        </h2>
                        <div className="dark:text-neutral-400 max-w-5xl text-sm ml-1 md:flex-row md:items-center">
                            <span>
                                My professional journey into the world of coding has always been a reflection of my belief that{' '}
                                <strong className="text-primaryColor">experience ≠ the number of years you’ve worked in a job</strong>.
                            </span>
                            <span>
                                It’s about the growth, learning, and contributions that shape a developer.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-11/12 mx-auto mt-10">
                    {experiences.map((experience, index) => {
                        const duration = calculateDuration(experience.startDate, experience.endDate);
                        return (
                            <React.Fragment key={index}>
                                <div
                                    className={`w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] ${index === 0 ? "border border-dashed border-green-500" : ""
                                        }`}
                                >
                                    <div className="h-[50px] w-[60px]">
                                        <img
                                            src={experience.image}
                                            alt={experience.role}
                                            className="h-full w-full object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-between w-full">
                                        <div className="flex flex-col gap-1 w-[70%]">
                                            <h4 className="text-white font-medium">{experience.role}</h4>
                                            <p className="text-gray-500 text-sm">{experience.location}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <h4 className="text-white font-medium">{duration}</h4>
                                            <p className="text-gray-500 text-sm">
                                                {new Date(experience.startDate).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                })}{" "}
                                                - {experience.endDate === "Present" ? "Present" :
                                                    new Date(experience.endDate).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "short",
                                                    })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {index < experiences.length - 1 && (
                                    <div className="px-12">
                                        <svg
                                            width="2"
                                            height="27"
                                            viewBox="0 0 2 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 0L1 27"
                                                stroke="#0EC86E"
                                                strokeWidth="2"
                                                strokeDasharray="4 4"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CareerPath;