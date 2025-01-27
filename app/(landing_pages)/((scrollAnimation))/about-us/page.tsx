import React from 'react'
import AboutHero from './_components/AboutHero'
import WhatWeDo from './_components/what-we-do'
import AboutUs from './_components/AboutUs'
import WeeklyStats from './_components/WeeklyStats'
import GithubContributions from './_components/GithubContributions'
import Skills from './_components/Skills'
import { getWakaStats } from '@/app/_actions/waka-time'
import { fetchGithubData } from '@/app/_actions/github'
import WhyUs from './_components/WhyUs'
import CareerPath from './_components/CareerPath'
import Tools from '@/app/_components/home/Tools'

async function page() {

    const { data } = await getWakaStats()

    const { data: githubData } = await fetchGithubData()
    return (
        <>
            <AboutHero />
            <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-7 w-full'>
                <Skills />
            </div>
            <AboutUs />
            <WeeklyStats data={data} />
            <GithubContributions data={githubData} />
            <Tools />
            <CareerPath />
            <WhyUs />
            <WhatWeDo />
        </>
    )
}

export default page