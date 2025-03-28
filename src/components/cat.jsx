import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"i'm anne (she/her), an eighteen year old high school senior living in india. i  joined hack club in july '24 during arcade and have been an active member of the community ever since. \n \ni'm a club leader for the girls-in-tech club 'code and cipher', was the lead organizer for counterspell delhi and scrapyard delhi, & hosted the delhi tavern. \n \ni love all things tech and have an interest in design, web development, hardware, cybersecurity and law. i've also worked on projects combining my love for art (illustration, music production, film) and programming.",
		education:
			"i'm currently a high school senior based in new delhi, india. while previously a cbse student, i now follow the general american school curicullum with classes mostly geared towards STEM & technology. \n \ni will be pursuing a degree in computer science + criminal justice at virginia tech this year onwards and am someone who hopes to go to law school and eventually establish a career as a white-collar criminal defense attorney.  \n \ni'm affiliated with girls who code, was a kode with klossy '23 global scholar, a wicys & rtc member and a volunteer at wisp & anitab.org.",

			projectinfo: "between school, bootcamps, hackclub, hackathons/competitions and personal projects, i'm currently juggling a lot of things including some full-blown projects and ideas that i've been trying to bring to life. \n \nat hack club, i regularly try to participate in you ship we ship programs, even if they require skills i do not posess (yet). right now i'm working on some beta events, #bakebuild, #pixeldust and #jungle and build larger projects including #infill, #apex \n \ni have a mix of hardware and software projects planned out for myself and for my club and i'm also making proposals to work on getting new ysws programs hq approved and pitching/collaborating for ideas for upcoming community led events :D",

			techstack: "programming - python, react, tailwind, html/css/js \n \ndesign - figma, canva, procreate, inkscape, aseprite \n \nother - kicad, blender, fusion, tinkercad, audacity \n \nadditional interests - cybersecurity, criminal law, forensics, data privacy, economics and linguistics",
		projects:
		[ 
			{
				projectName: "a custom macropad & mechanical keyboard for #hackpad —",
				liveDemo: "https://github.com/arsoninstigator/cryptpad",
				linkToGithub: "https://github.com/arsoninstigator/cryptpad"
			},
			{
				projectName: "a budget 3d printer designed from scratch for #infill —",
				liveDemo: "https://github.com/arsoninstigator/sculptura",
				linkToGithub: "https://github.com/arsoninstigator/sculptura"
			}
		],
		social: [
			{
				platform: "github",
				link: "https://github.com/arsoninstigator"
			},

			{
				platform: "buymeacoffee",
				link: "https://ko-fi.com/fairyluv"
			}
		],
		socials: "you can reach out to me via email at arsoninstigator@proton.me, send me a text on the hc slack or contact me via discord/signal (ask in dms). \n \nmy dms are open so feel free to just yap about literally anything. also please  send me information on any scholarships, internship opportunities, summer programs or other opportunities if you can :3"
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "education") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "techstack") {
				return <p className="result">{this.information.techstack}</p>;
			} else if (lower === "projects" || lower === "project") {
				return (
					<React.Fragment>
						<p className="result">{this.information.projectinfo}</p>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo} target="_blank">
										[github repository]
									</a>
									<a href={everyProject.linkToGithub} target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials" ||
				lower === "social" ||
				lower === "contact me" ||
				lower === "contactme" ||
				lower === "contact_me"
			) {
				return (
					<React.Fragment>
					
					<p className="result">
                {this.information.socials.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <p className="result">
                {this.information.social.map((everySocial, index) => (
                    <React.Fragment key={index}>
                        {index === 0 ? "you can also find me on " : ""}
                        <a href={everySocial.link} target="_blank" rel="noopener noreferrer">
                            {everySocial.platform}
                        </a>
                        {index !== this.information.social.length - 1 ? " (pretend this doesnt need to be completely overhauled) and " : "(where you can donate $$ to support me or my club)."}
                    </React.Fragment>
                ))}
            </p>
					</React.Fragment>
				);
			} else {
				return <p className="result">oops, wrong input</p>;
			}
		} else {
			return <p className="result">oops, wrong input</p>;
		}
	};
}

export default Cat;
