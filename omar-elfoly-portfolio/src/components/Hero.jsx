import React from 'react';

const Hero = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Omar Elfoly</h1>
                <p className="text-xl mb-8">AI Engineer | Developer | Innovator</p>
                <a href="/resume.pdf" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Hero;