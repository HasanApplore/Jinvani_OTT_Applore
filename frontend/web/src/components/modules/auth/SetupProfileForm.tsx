"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Mail } from "lucide-react"; // Fallback icons
import { ASSETS } from "@/lib/constants"; // Assuming we might use an avatar placeholder from here

export default function SetupProfileForm() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Profile setup:", { name, dob });
    };

    return (
        <div className="w-full flex justify-center items-center">
            {/* Main Frame Div - 921x566 */}
            <div className="w-[921px] h-[566px] bg-[#1F1F1F] rounded-none p-[30px] flex flex-col items-center gap-[40px] relative">

                {/* Header Section */}
                <div className="flex flex-col items-center gap-[19px] mt-[48px] text-center">
                    <h1
                        className="text-white font-semibold font-sans"
                        style={{
                            width: '711px',
                            height: '30px',
                            fontSize: '50px',
                            lineHeight: '30px',
                            // Figma says 50px font, 30px height/line-height? Might clip. Trusting user values.
                            // Actually Figma "height: 30" might be bounds not line-height. 
                            // User specified: font-size: 50px; line-height: 30px.
                        }}
                    >
                        Let&apos;s set up your profile
                    </h1>
                    <p
                        className="text-[#BCBCBC] font-medium font-sans"
                        style={{
                            width: '711px',
                            height: '19px',
                            fontSize: '16px',
                            lineHeight: '100%',
                        }}
                    >
                        Add a few details to get started.
                    </p>
                </div>

                {/* Inner Content Div: 711x347, gap 52 */}
                <div className="w-[711px] h-[347px] flex flex-col gap-[52px]">

                    {/* Profile + Name Row: 722x100, gap 30 */}
                    {/* Note: Parent is 711, row is 722? Might overflow slightly or user typo. fitting to parent. */}
                    <div className="w-full flex items-center gap-[30px] h-[100px]">
                        {/* Profile Icon: 100x100 */}
                        <div className="w-[100px] h-[100px] shrink-0 rounded-full bg-gradient-to-b from-[#FF6600] to-[white] flex items-center justify-center overflow-hidden relative">
                            {/* Placeholder icon based on the screenshot red/white avatar */}
                            <div className="absolute inset-0 bg-red-400" />
                            {/* Simple visual placeholder for "Profile" */}
                            <User className="text-white w-12 h-12 z-10" />
                        </div>

                        {/* Name Input: 581x56 */}
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-[581px] h-[56px] rounded-[4px] border border-[#808080] bg-[#00000080] text-white px-[24px] py-[8px] pl-[16px] placeholder-[#BCBCBC] focus:outline-none focus:border-white transition-colors text-[16px] font-medium font-sans"
                        />
                    </div>

                    {/* DOB Section: 711x91, gap 16 */}
                    <div className="w-[711px] h-[91px] flex flex-col gap-[16px]">
                        <div className="w-[711px] h-[19px] text-[#BCBCBC] font-medium font-sans text-[16px] leading-[100%] flex items-center">
                            Date of Birth
                        </div>

                        <div className="relative w-[711px] h-[56px]">
                            <input
                                type="text"
                                placeholder="10/10/1996"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full h-full rounded-[4px] border border-[#808080] bg-[#00000080] text-white px-[24px] py-[8px] pl-[16px] placeholder-[#BCBCBC] focus:outline-none focus:border-white transition-colors text-[16px] font-medium font-sans"
                            />
                            <div className="absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none text-[#808080]">
                                <Mail className="w-5 h-5" /> {/* Using Mail as icon placeholder based on screenshot "envelope"? or might be calendar */}
                            </div>
                        </div>
                    </div>

                    {/* Continue Button: 707x52 */}
                    <button
                        onClick={handleSubmit}
                        style={{
                            background: "linear-gradient(90deg, #FF6600 8.35%, #FF2E63 100%)"
                        }}
                        className="w-[707px] h-[52px] rounded-[4px] flex items-center justify-center gap-[16px] text-white font-medium text-[16px] font-sans hover:opacity-90 transition-opacity"
                    >
                        Continu...
                    </button>
                </div>
            </div>
        </div>
    );
}
