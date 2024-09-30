import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

//import images
import ResumeBuilder from '../assets/images/ResumeBuild.png';

import Phone from '../assets/images/Phone.png';
import PasswordGen from '../assets/images/PwGen.png';
import GeekMon from '../assets/images/GeekMon.png';
import BookApp from '../assets/images/BookApp1.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	
	
	
	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
	{
		name: 'Book App',
		link: 'https://elixirpoison.github.io/Book-App/',
		github: 'https://github.com/ELIXIRPOISON/Book-App',
		description: 'Developed a Book App with dark mode, user authentication, category-based book display, and dynamic book details using JavaScript.',
		image: BookApp
	},
	{
		name: `Resume Builder`,
		link: 'https://elixirpoison.github.io/Resume-Builder_Geekathon/Resume_Builder/index.html',
		github: 'https://github.com/ELIXIRPOISON/Resume-Builder_Geekathon',
		description: "Created a Resume Builder that allows users to input personal details, receive job and project recommendations, and generate a resume in multiple formats, including PDF and Word, for easy printing.",
		image: ResumeBuilder
	},
	{
		name: 'GeeksterMon',
		link: 'https://elixirpoison.github.io/GeeksterMon/',
		github: 'https://github.com/ELIXIRPOISON/GeeksterMon',
		description: 'The Pokémon cards project uses JavaScript to fetch data from the PokéAPI and display various Pokémon on cards. Each card is dynamically created in HTML, showcasing details like the Pokémons name, image, and type. CSS is applied to style the cards, creating a visually appealing and responsive layout for the displayed Pokémon.',
		image: GeekMon
	},
	{
		name: 'Password Generator',
		link: 'https://password-generator-355a8.web.app/',
		github: 'https://github.com/ELIXIRPOISON/React-Projects/tree/main/passwordgenerator',
		description: 'Developed a Strong Password Generator app in React.js, allowing users to customize password length and criteria such as uppercase, lowercase, and special characters. Integrated copy-to-clipboard functionality and used the Toastify library for real-time notifications.',
		image: PasswordGen
	},
	{
		name: 'Phone Hunter',
		link: 'https://elixirpoison.github.io/PhoneHuntingAPI/',
		github: 'https://github.com/ELIXIRPOISON/PhoneHuntingAPI',
		description: 'Hot Gadgets is a dynamic phone search platform designed to help users quickly and easily find detailed information about various smartphones. With a user-friendly interface and powerful search capabilities, this platform allows users to explore a wide range of phones, view detailed specs, and make informed decisions.',
		image: Phone
	},
	
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_imczdww', 'template_etfq75s', form.current, 'Nj1FMhJCVq7gWastZlNkz')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Piyush Raj</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HEY, I'M Piyush Raj</h1>
					<p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/ELIXIRPOISON' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/piyush-raj-158970212/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:therajpiyush@gmail.com.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.facebook} target="_blank" href='#' >
						<BsFacebook size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
								I'm a <span>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span>Projects</span> section. <br /> <br />
								I also like sharing content related to the stuff that I have learned over the years in <span>Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://github.com/ELIXIRPOISON" target="_blank">Github</a> where I post useful content related to Web Development and Programming. <br /> <br />
								I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Piyush Raj</h3>
							<p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/ELIXIRPOISON' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/piyush-raj-158970212/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:therajpiyush@gmail.com.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.facebook} target="_blank" href='#' >
									<BsFacebook size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2024. Made by <span>Piyush Raj</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;