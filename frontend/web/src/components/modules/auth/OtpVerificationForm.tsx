"use client";

import React, { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { ROUTES } from "@/lib/constants";

interface OtpVerificationFormProps {
    length?: number;
    emailOrPhone?: string;
    onComplete?: (code: string) => void;
    onResend?: () => void;
}

export default function OtpVerificationForm({
    length = 4,
    emailOrPhone = "+91 XXXXXXXX / your@email.com",
    onComplete,
    onResend,
}: OtpVerificationFormProps) {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [timeLeft, setTimeLeft] = useState(30);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [canResend]); // Restart timer logic handled in handleResend

    const handleResendClick = () => {
        if (!canResend) return;
        setCanResend(false);
        setTimeLeft(30);
        // Restart logic needs the effect to run again or just simple state reset
        // The existing effect depends on component mount or canResend change if structured differently.
        // For simplicity, we just reset state here and let the interval continue if we haven't cleared strictly or use a key.
        // Better: Effect runs on mount. Logic above stops at 0. We need to restart it.
        // Simplified:
        if (onResend) onResend();
    };

    // Re-trigger timer effect when canResend goes back to false? 
    // actually the previous effect clears on unmount or dep change. 
    // Let's make the timer robust.
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setCanResend(true);
        }
    }, [timeLeft]);

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        // Allow only last entered char if multiple (though input type is text/tel, redundancy check)
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Trigger complete if full
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length && newOtp.every((val) => val !== "")) {
            if (onComplete) onComplete(combinedOtp);
        }

        // Move to next input
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Move to previous if current is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const data = e.clipboardData.getData("text").trim();
        if (!/^\d+$/.test(data)) return; // Only numbers

        const splitted = data.split("").slice(0, length);
        const newOtp = [...otp];

        splitted.forEach((char, i) => {
            newOtp[i] = char;
        });
        setOtp(newOtp);

        // Focus appropriate input
        const nextIndex = Math.min(splitted.length, length - 1);
        inputRefs.current[nextIndex]?.focus();

        if (newOtp.every((val) => val !== "") && onComplete) {
            onComplete(newOtp.join(""));
        }
    };

    return (
        <div className="w-full max-w-[1011px] min-h-[588px] mx-auto bg-[#00000099] backdrop-blur-md rounded-[4px] px-8 py-12 md:px-[68px] md:py-[48px] text-center text-white relative flex flex-col items-center justify-center gap-[12px]">
            {/* Inner Content Div */}
            <div className="w-full max-w-[885px] flex flex-col items-center gap-[28px]">

                <div className="space-y-[28px]">
                    <h2 className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[30px] font-semibold font-sans tracking-normal">
                        Enter Verification code
                    </h2>

                    <p className="text-[16px] md:text-[20px] leading-[24px] font-semibold text-white/90">
                        We&apos;ve sent a 6-digit verification code to<br />
                        {emailOrPhone}
                    </p>
                </div>

                <div className="flex flex-wrap gap-[10px] justify-center my-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className="w-[56px] h-[56px] bg-transparent border border-[#E4E4E7] rounded-[4px] text-center text-[18px] font-semibold text-[#BCBCBC] placeholder-[#BCBCBC] focus:border-white focus:outline-none transition-colors"
                        />
                    ))}
                </div>

                <button
                    onClick={() => onComplete && onComplete(otp.join(""))}
                    style={{
                        background: "linear-gradient(90deg, #FF6600 8.35%, #FF2E63 100%)"
                    }}
                    className="w-[254px] h-[56px] text-white text-[20px] font-semibold rounded-[4px] flex items-center justify-center gap-[16px] hover:opacity-90 transition-opacity"
                >
                    Verify & Continue
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center gap-[30px]">
                    <p className="text-[18px] font-medium text-white">
                        Didn&apos;t receive the code?{" "}
                        <button
                            onClick={handleResendClick}
                            disabled={!canResend}
                            className={`ml-1 font-medium ${canResend ? "underline hover:text-[#f52458]" : "opacity-70 cursor-not-allowed"}`}
                        >
                            Resend {timeLeft > 0 && `(${timeLeft}s)`}
                        </button>
                    </p>

                    <Link href={ROUTES.login} className="flex items-center gap-[8px] text-[18px] font-medium text-white hover:text-[#f52458] transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
