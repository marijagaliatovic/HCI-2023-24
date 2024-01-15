"use client"

import Link from "@/node_modules/next/link";
import { SetStateAction, useState } from "react";
import Footer from "../components/Footer";

export default function contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        // Implement your logic for handling the form submission here
        // You can use the values of username, email, and message
    };
    
    return (
        <>
        <div className="flex flex-col items-center relative lg:mt-12 py-8">
            <h2 className="font-bold text-xl lg:text-2xl self-center mt-10 top-24">Contact Us</h2>
            <div className="small-line"></div>
            <p className="font-medium text-sm lg:text-lg text-center px-6 my-4 lg:px-20 lg:mx-48">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us using the form below.
          </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-stone-200 mb-20 sm:mx-auto sm:w-full max-w-md mx-auto px-10 py-10">
                    <label className="bg-stone-200 block mb-2 text-sm font-semibold">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />

                    <label className="bg-stone-200 block mt-4 mb-2 text-sm font-semibold">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />

                    <label className="bg-stone-200 block mt-4 mb-2 text-sm font-semibold">Message:</label>
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        className="w-full border p-2 rounded-md"
                        placeholder="Type your message here..."
                        required
                    />
                    <div className="text-center bg-stone-200">
                    <button type="submit" className="mt-4 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl">
                        Submit
                    </button>
                    </div>
                </form>
            <Footer/>
      </>
    )
}