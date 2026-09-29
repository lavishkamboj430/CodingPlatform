import React from 'react'

const Features = ({theme}) => {
    const items = [
        { title: "Online Compiler", description: "Write and run code in multiple languages, instantly." },
        { title: "Save Your Projects", description: "Keep your code safe in the cloud and access it anywhere." },
        { title: "Practice & Improve", description: "Solve curated problems and level up your skills." },
        { title: "Build Your Journey", description: "Track progress, earn badges and grow with the community." },
    ];

    return (
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-8 border-t border-zinc-700 px-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
                <div key={item.title}>
                    <h3 className={theme?"text-sm font-medium text-white":"text-sm font-medium text-black"}>{item.title}</h3>
                    <p className={theme?"mt-1 text-sm text-zinc-500":"mt-1 text-sm text-zinc-900"}>{item.description}</p>
                </div>
            ))}
        </section>
    );

}

export default Features
