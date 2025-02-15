'use client';
import React, { useEffect } from "react";

const App: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://roostercdn.s3-ap-southeast-1.amazonaws.com/rooster.min.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((window as any).Rooster) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const Rooster = (window as any).Rooster;
                const rooster = new Rooster("#rooster", 154138);
                rooster.setup();
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-blue-100 text-gray-800 px-4 py-10">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Join Our Team
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Explore exciting career opportunities and be a part of something amazing.
                </p>
            </header>

            <section className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
                <div id="rooster"></div>
            </section>

            <footer className="text-center mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-600 transition duration-300">
                    Apply Now
                </button>
            </footer>
        </div>
    );
};

export default App;
