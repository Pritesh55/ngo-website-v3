'use client'
import React from 'react'
import { Send } from 'lucide-react'

const Contact_us_forms = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here if needed
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 capitalize tracking-wider mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900"
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-700 capitalize tracking-wider mb-1">Message</label>
                    <textarea
                        rows={4}
                        placeholder="How can we help you?"
                        className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-orange-500 to-darkred text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Send className="w-4 h-4" />
                    Send Message
                </button>
            </form>
        </>
    )
}

export default Contact_us_forms