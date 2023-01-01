import React from "react";
import { useState } from "react";
import axios from "axios";

export const Form = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [ok, setOk] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const submission = {
            name: userName,
            email: userEmail,
            message: userMessage,
        }
        try {
            axios({
                method: "post",
                url: "https://getform.io/f/77f23fa5-cef6-4f70-b2af-d7646794b7f8",
                data: submission,
            })
            setUserName('');
            setUserEmail('');
            setUserMessage('');
            setOk(true);
        }
        catch {
            setOk(false);
        } 
    }
    return (
        <div>
            <h1 className="text-white font-bold text-6xl">Contact Me</h1>
            <form onSubmit={handleSubmit} className="my-4 text-white">
                <div className="grid grid-cols-2 w-[75vh]">
                    <input 
                        name="name" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        type="text" 
                        placeholder="Name (required)" 
                        className="mr-2 mb-2 bg-zinc-900 rounded-md border-transparent focus:ring-0 focus:border-zinc-600" 
                        required />
                    <input 
                        name="email" 
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email"  
                        placeholder="Email" 
                        className="ml-2 mb-2 bg-zinc-900 rounded-md border-transparent focus:ring-0 focus:border-zinc-600" />
                    <textarea 
                        name="message" 
                        value={userMessage} 
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="Message (required)" 
                        className="mt-2 bg-zinc-900 col-start-1 col-end-3 resize-none h-[30vh] rounded-md border-transparent focus:ring-0 focus:border-zinc-600" 
                        required />
                </div>
                <button type="submit" className="px-3 py-2 my-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg">Submit</button>
                {!ok && 
                    <p className="text-white">Unable to send your submission.</p>
                }
            </form>
        </div>
    )
}