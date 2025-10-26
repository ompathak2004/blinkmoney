'use client';

import { useState, useRef, useEffect } from 'react';

interface VerifyMobileStepProps {
    mobileNumber: string;
    onVerifySuccess: () => void;
    onEditMobile: () => void;
}

interface OTPInputProps {
    otp: string[];
    inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
    onOtpChange: (index: number, value: string) => void;
    onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent) => void;
    isDesktop?: boolean;
}

function OTPInput({ otp, inputRefs, onOtpChange, onKeyDown, onPaste, isDesktop = false }: OTPInputProps) {
    return (
        <div className={`flex ${isDesktop ? 'w-full items-center justify-center gap-2 py-2 sm:gap-3 md:gap-4' : 'h-fit justify-between gap-1'}`} onPaste={onPaste}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    pattern="[0-9]*"
                    maxLength={1}
                    aria-label={`OTP digit ${index + 1}`}
                    aria-invalid="false"
                    className={
                        isDesktop
                            ? "aspect-[3/5] w-8 rounded-lg border border-gray-300 bg-white text-center text-2xl font-medium text-[#171717] transition-all focus:outline-none focus:border-[#8B7355] sm:w-12 sm:rounded-2xl sm:text-3xl md:w-14"
                            : "aspect-[12/16] w-full max-w-12 rounded-lg border border-gray-300 bg-white text-center text-2xl font-medium text-[#171717] transition-all focus:outline-none focus:border-[#8B7355]"
                    }
                    tabIndex={0}
                    type="tel"
                    value={digit}
                    onChange={(e) => onOtpChange(index, e.target.value)}
                    onKeyDown={(e) => onKeyDown(index, e)}
                />
            ))}
        </div>
    );
}

export default function VerifyMobileStep({
    mobileNumber,
    onVerifySuccess,
    onEditMobile
}: VerifyMobileStepProps) {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const [isVerifying, setIsVerifying] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Check if desktop on mount and update state
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 640); // 640px is the 'sm' breakpoint
        };
        
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, [isDesktop]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        if (newOtp.every(digit => digit !== '') && index === 5) {
            handleVerify(newOtp.join(''));
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((digit, index) => {
            if (index < 6) newOtp[index] = digit;
        });
        setOtp(newOtp);

        const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
        const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
        inputRefs.current[focusIndex]?.focus();

        if (newOtp.every(digit => digit !== '')) {
            handleVerify(newOtp.join(''));
        }
    };

    const handleVerify = async (otpValue?: string) => {
        setIsVerifying(true);

        setTimeout(() => {
            setIsVerifying(false);
            onVerifySuccess();
        }, 1000);
    };

    const isOtpComplete = otp.every(digit => digit !== '');

    return (
        <>
            {/* Desktop Layout */}
            {isDesktop && (
            <div className="min-h-screen bg-[#f7f3f2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-[2rem] bg-[#f7f3f2] p-8">
                        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white p-4 sm:p-6">
                            <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }} className="flex max-w-md flex-col gap-5 sm:max-w-lg">
                                <div className="flex flex-col items-center justify-center gap-2 text-center text-lg font-medium text-[#171717]">
                                    <h2 className="text-center text-xl font-semibold text-[#171717]">
                                        Enter 6 digit OTP sent by MF Central to
                                    </h2>
                                    <div className="inline-flex text-center text-lg font-bold text-[#171717]">
                                        <span className="text-[#171717]">{mobileNumber}</span>
                                        <button
                                            type="button"
                                            onClick={onEditMobile}
                                            className="ml-2 text-[#171717] underline transition-colors hover:text-[#8B7355] cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>

                                <OTPInput
                                    otp={otp}
                                    inputRefs={inputRefs}
                                    onOtpChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    onPaste={handlePaste}
                                    isDesktop={true}
                                />

                                <button
                                    type="submit"
                                    disabled={!isOtpComplete || isVerifying}
                                    className={`relative mx-auto w-3/4 cursor-pointer rounded-2xl py-4 text-xl font-medium text-white transition-all duration-200 ${isOtpComplete && !isVerifying
                                            ? 'bg-[#8B7355] hover:bg-[#7D6A4F]'
                                            : 'cursor-not-allowed bg-[#C4B5A0] hover:bg-[#C4B5A0]'
                                        }`}
                                >
                                    {isVerifying ? 'Verifying...' : 'Verify'}
                                </button>
                            </form>

                            <div className="w-full text-center sm:w-3/4">
                                <p className="text-[13px] leading-relaxed text-gray-600 sm:text-sm">
                                    By proceeding, I accept{' '}
                                    <span className="cursor-pointer underline hover:text-[#8B7355] transition-colors">T&Cs</span>,{' '}
                                    <span className="cursor-pointer underline hover:text-[#8B7355] transition-colors">Privacy Policy</span>,
                                    and authorize bureau checks & contact via phone/WhatsApp.
                                </p>
                            </div>

                            <p className="text-xs text-gray-500">
                                Powered by <span className="font-bold">MFCentral</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* Mobile Layout */}
            {!isDesktop && (
            <div className="flex h-screen w-full flex-col items-center">
                <div className="flex h-fit w-full max-w-md flex-1 flex-col gap-6 overflow-y-auto px-4 py-4">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <h1 className="text-3xl font-bold text-[#171717]">Verify mobile</h1>
                        <span className="text-[#171717]">
                            Enter 6-digit OTP sent by BlinkMoney to {mobileNumber}{' '}
                            <button
                                type="button"
                                onClick={onEditMobile}
                                className="text-[#171717] underline underline-offset-3 cursor-pointer text-nowrap px-1 text-base font-bold font-semibold hover:text-[#8B7355] transition-colors"
                            >
                                Edit
                            </button>
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 text-[#171717]">
                        <OTPInput
                            otp={otp}
                            inputRefs={inputRefs}
                            onOtpChange={handleChange}
                            onKeyDown={handleKeyDown}
                            onPaste={handlePaste}
                            isDesktop={false}
                        />
                    </div>
                </div>

                <div className="sticky bottom-0 left-0 w-full max-w-md flex-shrink-0 bg-[#f7f3f2] px-4 py-4">
                    <div className="w-full bottom-0 m-0 flex h-fit max-h-[50vh] w-full max-w-md min-w-[15rem] flex-col items-center justify-start gap-4 overflow-y-auto p-0">
                        <span className="sticky bottom-0 left-0 h-fit w-full bg-[#f7f3f2] py-1">
                            <button
                                type="button"
                                onClick={() => handleVerify()}
                                disabled={!isOtpComplete || isVerifying}
                                className={`flex h-fit flex-col items-center justify-center rounded-xl border p-[2px] py-3 text-base font-semibold w-full text-nowrap ${isOtpComplete && !isVerifying
                                        ? 'bg-[#8B7355] text-white border-[#8B7355] cursor-pointer hover:bg-[#7D6A4F]'
                                        : 'bg-[#C4B5A0] text-white cursor-not-allowed border-[#C4B5A0]'
                                    }`}
                            >
                                {isVerifying ? 'Verifying...' : 'Verify'}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}
