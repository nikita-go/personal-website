import React from "react";

export default function ProjectCard(props) {
    return(
        <div className={`p-4 border-transparent rounded-xl bg-gradient-to-br ${props.startColor} ${props.endColor}`}>
            <div className="flex flex-row items-center text-white gap-x-2">
                <h2 className="text-2xl font-semibold">{props.name}</h2>
                {props.github && 
                    <a href={`https://github.com/${props.github}`} rel="nofollow" className="opacity-80 hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="h-6 w-6 fill-gray-200 hover:fill-white ease-in-out transition duration-300" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                }
                {props.link && 
                    <a href={props.link} rel="nofollow" className="text-gray-200 hover:text-white ease-in-out transition duration-300 opacity-80 hover:opacity-100">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                    </a>
                }
            </div>
            <hr className="border-[1px] opacity-50 bg-white my-1 rounded-sm"></hr>
            <p className="text-xl text-gray-100 break-words">{props.description}</p>
        </div>
    )
}