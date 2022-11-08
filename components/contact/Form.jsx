import React from "react";

export const Form = () => {
    return (
        <div>
            <h1 className="text-white font-bold text-6xl">Contact Me</h1>
            <form className="my-4">
                <div className="grid grid-cols-2 gap-4 w-[75vh]">
                    <input type="text" placeholder="Name (required)" className="bg-zinc-900 rounded-md border-transparent focus:ring-0 focus:border-zinc-600" required />
                    <input type="text" placeholder="Email" className="bg-zinc-900 rounded-md border-transparent focus:ring-0 focus:border-zinc-600" />
                    <textarea placeholder="Message (required)" className="bg-zinc-900 col-start-1 col-end-3 resize-none h-[30vh] rounded-md border-transparent focus:ring-0 focus:border-zinc-600" required />
                </div>
                <button type="submit" className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg my-4">Submit</button>
            </form>
        </div>
    )
}