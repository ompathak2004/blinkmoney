"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqProps {
    title: string;
    items: FaqItem[];
    className?: string;
}

export default function Faq({ title, items, className = "" }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-full flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 ${className}`}>

            <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10">

                <div className="w-full max-w-7xl mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                        {title}
                    </h2>
                </div>
                
                <div className="space-y-0">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-b-0">
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
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
    );
}
