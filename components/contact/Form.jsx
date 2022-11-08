import React from "react";

export const Form = () => {
    return (
        <div>
            <h1 className="text-white font-bold text-6xl my-4">Contact Me</h1>
            <form>
                <div className="grid grid-cols-2 gap-4 w-[75vh]">
                    <input type="text" id="name" placeholder="Name" className="bg-zinc-900 rounded-md border-transparent" />
                    <input type="text" id="email" placeholder="Email" className="bg-zinc-900 rounded-md border-transparent" />
                    <textarea id="message" placeholder="Message" className="bg-zinc-900 col-start-1 col-end-3 resize-none h-[30vh] rounded-md border-transparent" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}