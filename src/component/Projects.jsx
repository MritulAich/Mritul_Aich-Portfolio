
const Projects = () => {
    return (
        <div>  
        <section id="projects" className="bg-base-100 py-12 mt-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">My Projects</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                {/* Project 1 */}
                <div className=" bg-white shadow-lg p-2 mb-8 rounded-lg">
                    <img
                        src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1728795083/Screenshot_35_gvs411.png"
                        alt="Project 1"
                        className="rounded-lg mb-4 w-[400px] h-[300px]"
                    />
                    <h3 className="text-2xl font-bold mb-2">Art Direction BD</h3>
                    <p className="text-gray-600 mb-4">
                        Technology: React, Node, MongoDB, Tailwind CSS, TanStack Query
                    </p>
                    <div className="flex justify-between mt-6">
                        <a href="https://art-direction-bd.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Live Site
                        </a>
                        <a href="https://github.com/MritulAich/Art-Direction-BD" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Client Code
                        </a>
                        <a href="https://github.com/MritulAich/Art-Direction-BD-Server-Side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Server Code
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className=" bg-white shadow-lg p-2 mb-8 rounded-lg">
                    <img
                        src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1728796545/Capture-techware_d8cwvz.png"
                        alt="Project 2"
                        className="rounded-lg mb-4 w-[400px] h-[300px]"
                    />
                    <h3 className="text-2xl font-bold mb-2">TechWare</h3>
                    <p className="text-gray-600 mb-4">
                        Technology: React, Express, MongoDB, Tailwind CSS, Firebase
                    </p>
                    <div className="flex justify-between mt-6">
                        <a href="https://tech-ware.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Live Site
                        </a>
                        <a href="https://github.com/MritulAich/B9-A12-TechWare-Client-Side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Client Code
                        </a>
                        <a href="https://github.com/MritulAich/B9-A12-TechWare-Server-Side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Server Code
                        </a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className=" bg-white shadow-lg p-2 mb-8 rounded-lg">
                    <img
                        src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1728796669/Capture-tripvoyage_v2rq0c.png"
                        alt="Project 3"
                        className="rounded-lg mb-4 w-[400px] h-[300px]"
                    />
                    <h3 className="text-2xl font-bold mb-2">TripVoyage</h3>
                    <p className="text-gray-600 mb-4">
                        Technology: React, Tailwind CSS, DaisyUI, MongoDB, Node
                    </p>
                    <div className="flex justify-between mt-6">
                        <a href="https://trip-voyage.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Live Site
                        </a>
                        <a href="https://github.com/MritulAich/b9-a10-client-side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Client Code
                        </a>
                        <a href="https://github.com/MritulAich/b9-a10-server-side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Server Code
                        </a>
                    </div>
                </div>

                {/* Project 4 */}
                <div className=" bg-white shadow-lg p-2 mb-8 rounded-lg">
                    <img
                        src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1728797074/Capture-easystay_z6q93c.png"
                        alt="Project 4"
                        className="rounded-lg mb-4 w-[400px] h-[300px]"
                    />
                    <h3 className="text-2xl font-bold mb-2">EasyStay</h3>
                    <p className="text-gray-600 mb-4">
                        Technology: React, Express, Mongodb, TailWind
                    </p>
                    <div className="flex justify-between mt-6">
                        <a href="https://easy-stay-b9-a11.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Live Site
                        </a>
                        <a href="https://github.com/MritulAich/B9-A11-EasyStay-Client-Side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Client Code
                        </a>
                        <a href="https://github.com/MritulAich/B9-A11-EasyStay-Server-Side" className="btn btn-outline btn-success" target="_blank" rel="noopener noreferrer">
                            Server Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Projects;