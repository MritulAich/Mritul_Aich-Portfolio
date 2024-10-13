
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
        { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS' },
        { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
        { icon: <SiTailwindcss className="text-teal-500" />, name: 'Tailwind CSS' },
        { icon: <FaReact className="text-blue-400" />, name: 'React' },
        { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
        { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
        { icon: <SiExpress className="text-gray-600" />, name: 'Express.js' },
        { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
        { icon: <FaGithub className="text-black" />, name: 'GitHub' },
    ];

    return (
        <section id="skills" className="bg-base-200 py-12">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-8">My Skills & Technology</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            <div className="text-6xl mb-4">{skill.icon}</div>
                            <p className="text-xl font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
