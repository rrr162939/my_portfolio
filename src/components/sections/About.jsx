import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = ["React","TypeScript","HTML5","CSS3","JavaScript"];
    const backendSkills = ["Node.js","Express.js","MongoDB","Git&GitHub"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I’m a dedicated UI Developer with a strong focus on building responsive,
                    user-centered web applications using React. 
                    I enjoy creating interfaces that are not only visually appealing but also intuitive and efficient. 
                    My work blends design principles with clean, 
                    maintainable code to deliver seamless digital experiences. 
                    I’m always eager to learn new technologies and improve my craft to stay ahead in the ever-evolving world of web development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0,2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.Tech in Electronics And Communication Engineering </strong> - Pace Institute Of Technology And Sciences (2021-2025)
                                </li>
                                <li>
                                    Relevant Course: Web Development
                                </li>
                            </ul>
                    </div>

                     <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Intern at Naresh.It (2025 - Present) </h4>
                                    <p>
                                       Assisted in building front-end components and integration REST APIs
                                    </p>
                                </div>
                            </div>
                    </div>

                </div>

            </div>

            </RevealOnScroll>

        </section>
    )
}