"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BackButton } from "@/components/Backbutton";
import { FAQ_DATA, CONTACT_INFO } from "@/config";
import Image from "next/image";

export default function HelpCenter() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#f7f3f2]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
                <BackButton />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="space-y-2">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow">
                        <a
                            href={CONTACT_INFO.whatsapp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0">
                                <Image
                                    src="/whatsapp.png"
                                    alt="WhatsApp"
                                    width={56}
                                    height={56}
                                    className="w-12 h-12 sm:w-14 sm:h-14"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                                    WhatsApp Us
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {CONTACT_INFO.whatsapp.availability}
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow">
                        <a
                            href={`mailto:${CONTACT_INFO.email.address}`}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0">
                                <Image
                                    src="/email.png"
                                    alt="Email"
                                    width={56}
                                    height={56}
                                    className="w-12 h-12 sm:w-14 sm:h-14"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                                    Email Us
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {CONTACT_INFO.email.responseTime}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                        FAQS
                    </h2>

                    <div className="space-y-0">
                        {FAQ_DATA.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full py-4 sm:py-5 flex items-start justify-between gap-3 text-left hover:opacity-80 transition-opacity"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium pr-2">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 mt-0.5 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                            ? "max-h-96 opacity-100"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pb-4 sm:pb-5 pr-8 sm:pr-10">
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
