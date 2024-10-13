import { useEffect, useRef } from 'react';

const HireReason = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id="why-hire-me"
            ref={sectionRef}
            className="py-12 bg-gradient-to-b from-blue-100 to-blue-50"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Why Hire Me?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform duration-700 ease-in opacity-0 delay-200">
                        <h3 className="text-2xl font-semibold mb-4">Fresh Perspective</h3>
                        <p className="text-lg">
                            I bring fresh ideas and innovations with my knowledge of the latest technologies and trends, adding a new perspective to your team.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform duration-700 ease-in opacity-0 delay-400">
                        <h3 className="text-2xl font-semibold mb-4">Cost-Effective</h3>
                        <p className="text-lg">
                            I offer strong potential and modern skills at a lower cost compared to experienced developers, making me a smart investment for growing teams.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform duration-700 ease-in opacity-0 delay-600">
                        <h3 className="text-2xl font-semibold mb-4">Team Collaboration</h3>
                        <p className="text-lg">
                            I'm collaborative and open to feedback, ensuring a smooth fit within your team and fostering an environment of teamwork.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform duration-700 ease-in opacity-0 delay-800">
                        <h3 className="text-2xl font-semibold mb-4">Up-to-Date Skills</h3>
                        <p className="text-lg">
                            My knowledge of frameworks like React, Tailwind CSS, Node.js, and MongoDB keeps me ahead in terms of modern development practices.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform duration-700 ease-in opacity-0 delay-1000">
                        <h3 className="text-2xl font-semibold mb-4">Adaptability</h3>
                        <p className="text-lg">
                            My flexibility and openness to different roles and tasks allow me to thrive in a fast-paced and dynamic environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireReason;
