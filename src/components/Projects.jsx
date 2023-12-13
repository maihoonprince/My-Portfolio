import React from 'react';
import { projectStats, tools } from "../data";

const Projects = () => {
    return (
        <div>
            <div className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10'>
                {projectStats.map((p, index) => (
                    <div className='flex flex-col gap-2 items-center px-4 py-3 bg-[#0000FF20] rounded-md'>
                        <p className='text-white text-2xl font-bold'>{p.value}</p>
                        <p className='text-white text-sm'>{p.name}</p>
                    </div>
                ))}
            </div>

            <div className='w-full flex flex-wrap items-center gap-10 lg:gap-20 mt-16'>
                {tools.map((t, index) => (
                    <div>
                        <img src={t.icon} />
                        <p>{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects