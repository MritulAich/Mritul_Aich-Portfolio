

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1728794032/my_image_emojvl.jpg"
                    alt="Mritul Aich"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold type-writer">Hi, I'm Mritul Aich</h1>
                    <p className="py-6 text-lg">
                        A passionate Junior Web Developer with a strong foundation in HTML, CSS, and JavaScript.
                        I love creating interactive web experiences and continuously learning new technologies to
                        enhance my skill set.
                    </p>
                    <a href="#projects" className="btn btn-primary">
                        View My Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
