'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'Is Google Workspace compatible with my current email client?',
        answer:
            'Yes, Google Workspace is compatible with most email clients. You can access Gmail using IMAP/POP on Outlook, Apple Mail, Thunderbird, and others.',
    },
    {
        question: 'Can I transfer my current Google Workspace account to Nest Nepal?',
        answer:
            'Yes. Our support team will help you transfer billing and admin ownership smoothly without service disruption.',
    },
    {
        question: 'Are there any fees for transferring a domain to Nest Nepal?',
        answer:
            'Domain transfer fees depend on the domain type. Most transfers include a one-year extension.',
    },
    {
        question: 'Are there any hidden charges for Nest Nepal customers?',
        answer:
            'No. Nest Nepal follows transparent pricing. You only pay what is clearly mentioned.',
    },
    {
        question: 'What all does Gsuite productivity suite include?',
        answer:
            'Google Workspace includes Gmail, Drive, Docs, Sheets, Slides, Meet, Calendar, Forms, Chat, and more.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white px-6 py-16 md:px-10">
            <div className="mx-auto max-w-3xl">
                {/* Heading */}
                <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                    Frequently Asked Questions{' '}
                    <span className="text-blue-600">(FAQs)</span>
                </h2>

                <div className="divide-y divide-gray-200">
                    {faqData.map((faq, index) => (
                        <div key={index} className="py-5">
                            <button
                                onClick={() => toggle(index)}
                                className="flex w-full items-center justify-between text-left"
                            >
                                <span className="text-sm font-medium text-gray-800 md:text-base">
                                    {faq.question}
                                </span>

                                <FiChevronDown
                                    className={`hidden md:block h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-sm text-gray-600 md:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}