'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface MobileNumberStepProps {
    onSubmit: (mobile: string, referral: string) => void;
}

export default function MobileNumberStep({ onSubmit }: MobileNumberStepProps) {
    const [mobile, setMobile] = useState('');
    const [referral, setReferral] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [promoAccepted, setPromoAccepted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if desktop on mount and update state
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 640); // 640px is the 'sm' breakpoint
        };
        
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setMobile(value);
        }
    };

    const isValid = mobile.length === 10 && termsAccepted;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            onSubmit(mobile, referral);
        }
    };

    return (
        <>
            {/* Desktop Layout */}
            {isDesktop && (
            <div className="min-h-screen bg-[#f7f3f2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-[2rem] bg-[#f7f3f2] p-8">
                        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white p-4 sm:p-6">
                            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-center justify-center gap-5 sm:max-w-lg">
                                <div className="flex w-full max-w-sm flex-col items-center justify-center gap-6">
                                    <h2 className="text-center text-xl font-semibold text-[#171717]">
                                        Enter the mobile number
                                    </h2>

                                    {/* Mobile Number Input */}
                                    <div className="flex w-full flex-col gap-1 text-[#171717]">
                                        <label htmlFor="mobile" className="text-base font-medium">Mobile number</label>
                                        <div className="flex items-center rounded-lg border px-3 py-[14px] border-gray-300 bg-white">
                                            <span className="mr-2 text-gray-600">+91</span>
                                            <input
                                                id="mobile"
                                                required
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={10}
                                                className="w-full bg-transparent text-base text-[#171717] outline-none"
                                                placeholder="9876543210"
                                                type="tel"
                                                value={mobile}
                                                onChange={handleMobileChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Referral Code Input */}
                                    <div className="flex w-full flex-col gap-1 text-[#171717]">
                                        <label htmlFor="referral" className="text-base font-medium">Referral Code (Optional)</label>
                                        <div className="flex w-full items-center rounded-lg border px-3 py-[14px] border-gray-300 bg-white">
                                            <input
                                                id="referral"
                                                className="w-full bg-transparent text-base text-[#171717] outline-none"
                                                placeholder="Enter referral code"
                                                type="text"
                                                value={referral}
                                                onChange={(e) => setReferral(e.target.value.toUpperCase())}
                                            />
                                        </div>
                                    </div>

                                    {/* Checkboxes */}
                                    <div className="flex w-full flex-col space-y-3 text-[#171717]">
                                        <label className="flex cursor-pointer items-start space-x-2">
                                            <input
                                                className="mt-1 h-4 w-4 cursor-pointer rounded accent-[#8B7355]"
                                                type="checkbox"
                                                checked={termsAccepted}
                                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                            />
                                            <div className="select-none">
                                                <span className="text-sm">
                                                    By continuing, I agree to the{' '}
                                                    <Link
                                                        className="text-[#171717] underline underline-offset-2 cursor-pointer font-semibold hover:text-[#8B7355] transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://blinkmoney.in/terms-and-conditions"
                                                    >
                                                        T&C
                                                    </Link>{' '}
                                                    and{' '}
                                                    <Link
                                                        className="text-[#171717] underline underline-offset-2 cursor-pointer font-semibold hover:text-[#8B7355] transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://blinkmoney.in/privacy-policy"
                                                    >
                                                        Privacy Policy
                                                    </Link>{' '}
                                                    of Capline Ventures Private Limited (mandatory)
                                                </span>
                                            </div>
                                        </label>

                                        <label className="flex cursor-pointer items-start space-x-2">
                                            <input
                                                className="mt-1 h-4 w-4 cursor-pointer rounded accent-[#8B7355]"
                                                type="checkbox"
                                                checked={promoAccepted}
                                                onChange={(e) => setPromoAccepted(e.target.checked)}
                                            />
                                            <div className="select-none">
                                                <span className="text-sm">
                                                    I agree to receive promotional{' '}
                                                    <Link
                                                        className="text-[#171717] underline underline-offset-2 cursor-pointer font-semibold hover:text-[#8B7355] transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://blinkmoney.in/terms-and-conditions"
                                                    >
                                                        communications
                                                    </Link>{' '}
                                                    from Capline Ventures Private Limited (optional)
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className={`relative w-full max-w-sm cursor-pointer rounded-lg py-3 font-medium text-white transition-all duration-200 ${isValid
                                            ? 'bg-[#8B7355] hover:bg-[#7D6A4F]'
                                            : 'cursor-not-allowed bg-[#C4B5A0] hover:bg-[#C4B5A0]'
                                        }`}
                                >
                                    Continue
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            )}

            {/* Mobile Layout */}
            {!isDesktop && (
            <div className="flex h-screen w-full flex-col items-center">
                <div className="flex h-fit w-full max-w-md flex-1 flex-col gap-6 overflow-y-auto px-4 py-4">
                    <div className="flex h-fit w-full flex-col gap-1 rounded-3xl">
                        <div className="rounded-t-3xl h-fit bg-white px-4 py-6">
                            <div className="flex w-full flex-col gap-1 text-[#171717]">
                                <label className="text-base">Enter Mobile Number</label>
                                <div className="flex items-center rounded-lg border px-3 py-[14px] border-gray-300 bg-white">
                                    <span className="mr-2 text-gray-600">+91</span>
                                    <input
                                        inputMode="tel"
                                        className="w-full bg-transparent text-base text-[#171717] outline-none disabled:cursor-not-allowed"
                                        placeholder="Enter mobile number"
                                        maxLength={10}
                                        type="text"
                                        value={mobile}
                                        onChange={handleMobileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Referral Code Card */}
                        <div className="rounded-b-3xl h-fit bg-white px-4 py-6">
                            <div className="flex w-full flex-col gap-1 text-[#171717]">
                                <div className="flex items-center rounded-lg border px-3 py-[14px] border-gray-300 bg-white">
                                    <input
                                        inputMode="text"
                                        className="w-full bg-transparent text-base text-[#171717] outline-none disabled:cursor-not-allowed"
                                        placeholder="Enter code"
                                        type="text"
                                        value={referral}
                                        onChange={(e) => setReferral(e.target.value.toUpperCase())}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="flex flex-col space-y-2 text-[#171717]">
                        <div className="flex flex-col space-y-1">
                            <label className="flex cursor-pointer items-start space-x-2">
                                <input
                                    className="mt-1 h-4 w-4 cursor-pointer rounded accent-[#8B7355]"
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                                <div className="select-none">
                                    <span className="w-full text-start text-xs">
                                        By continuing, I agree to the{' '}
                                        <Link
                                            className="text-[#171717] underline underline-offset-3 cursor-pointer text-nowrap text-xs font-semibold hover:text-[#8B7355] transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://blinkmoney.in/terms-and-conditions"
                                        >
                                            T&C
                                        </Link>{' '}
                                        and{' '}
                                        <Link
                                            className="text-[#171717] underline underline-offset-3 cursor-pointer text-nowrap text-xs font-semibold hover:text-[#8B7355] transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://blinkmoney.in/privacy-policy"
                                        >
                                            Privacy Policy
                                        </Link>{' '}
                                        of Capline Ventures Private Limited (mandatory)
                                    </span>
                                </div>
                            </label>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="flex cursor-pointer items-start space-x-2">
                                <input
                                    className="mt-1 h-4 w-4 cursor-pointer rounded accent-[#8B7355]"
                                    type="checkbox"
                                    checked={promoAccepted}
                                    onChange={(e) => setPromoAccepted(e.target.checked)}
                                />
                                <div className="select-none">
                                    <span className="w-full text-start text-xs">
                                        I agree to receive promotional{' '}
                                        <Link
                                            className="text-[#171717] underline underline-offset-3 cursor-pointer text-nowrap text-xs font-semibold hover:text-[#8B7355] transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://blinkmoney.in/terms-and-conditions"
                                        >
                                            communications
                                        </Link>{' '}
                                        from Capline Ventures Private Limited (optional)
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 left-0 w-full max-w-md flex-shrink-0 bg-[#f7f3f2] px-4 py-4">
                    <div className="w-full bottom-0 m-0 flex h-fit max-h-[50vh] w-full max-w-md min-w-[15rem] flex-col items-center justify-start gap-4 overflow-y-auto p-0">
                        <span className="sticky bottom-0 left-0 h-fit w-full bg-[#f7f3f2] py-1">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={!isValid}
                                className={`flex h-fit flex-col items-center justify-center rounded-xl border p-[2px] py-3 text-base font-semibold w-full text-nowrap ${isValid
                                        ? 'bg-[#8B7355] text-white border-[#8B7355] cursor-pointer hover:bg-[#7D6A4F]'
                                        : 'bg-[#C4B5A0] text-white cursor-not-allowed border-[#C4B5A0]'
                                    }`}
                            >
                                Proceed
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}
