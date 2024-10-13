import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact" className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Contact me</h1>
			<p className="pt-2 pb-4">Let's work together</p>
			<div className="space-y-4">
				<p className="flex items-center gap-3">
					<FaPhone></FaPhone>
					<span>+8801846515793</span>
				</p>
				<p className="flex items-center gap-3">
                <MdEmail />
					<span>aichmritul@gmail.com</span>
				</p>
				<p className="flex items-center gap-3">
                <FaLinkedin />
					<a href="https://www.linkedin.com/in/mritul-aich-developer/">Mritul_Aich_LinkedIn</a>
				</p>
				<p className="flex items-center gap-3">
                <FaGithub />
                <a href="https://github.com/MritulAich">Mritul_Aich_GitHub</a>
				</p>
			</div>
		</div>
		<form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Name</span>
				<input type="text" className="block w-full p-2 rounded-md border-2 dark:bg-gray-100" required/>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input name="email" type="email" className="block p-2 w-full rounded-md border-2 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block p-2 w-full rounded-md border dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="text-lg rounded dark:text-gray-50 btn btn-outline">Submit</button>
		</form>
	</div>
</section>
    );
};

export default Contact;
