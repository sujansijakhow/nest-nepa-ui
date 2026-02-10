import React from 'react';
import Image from 'next/image';

type Solution = {
    title: string;
    image: string;
    description: React.ReactNode;
};

export default function SolutionsSection() {
    const solutions: Solution[] = [
        {
            title: 'For enterprise',
            image: '/enterprise.png',
            description: (
                <>
                    Secure collaboration{' '}
                    <span className="text-blue-600">tools for enterprise</span>, with
                    premium AI and enterprise-grade security built in for all the ways
                    work is changing.
                </>
            ),
        },
        {
            title: 'For small business',
            image: '/smallbusiness.png',
            description: (
                <>
                    Tools for <span className="text-blue-600">small businesses</span> that help
                    teams and <span className="text-blue-600">individuals</span> with everyday
                    tasks like scheduling appointments and email marketing.
                </>
            ),
        },
        {
            title: 'For new business',
            image: '/newbusiness.png',
            description: (
                <>
                    Essentials tools for <span className="text-blue-600">new businesses</span> and{' '}
                    <span className="text-blue-600">startups</span>, including business
                    email domains, online file sharing and storage, and more.
                </>
            ),
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4">
                        <span className="block text-black">Solutions for businesses,</span>
                        <span className="block text-[#4285F4] text-3xl md:text-4xl">
                            साना देखि ठूला सबैका लागि
                        </span>
                    </h2>
                    <p className="text-gray-800 text-base md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
                        No matter the size, Google Workspace ले तपाईंको business को सबै needs पूरा गर्छ
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {solutions.map((solution, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="relative w-full h-56 mb-6">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-contain border border-gray-300 rounded-2xl"
                                />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}