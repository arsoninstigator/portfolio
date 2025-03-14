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
			"anne (she/her) is an eighteen year old high school senior from india who joined hack club in july '24 during arcade and has been an active member of the community ever since. \n \nshe's the founder and club leader for the girls-in-tech club 'code & cipher', was the lead organizer for counterspell delhi and is currently organizing scrapyard's satellite event in delhi on march 15. \n \nwith interests in design (2d & 3d), front-end web development, hardware, cybersecurity and cyberspace law, she has worked on projects combining her love for art (illustration, music production, film) and programming.",
		education:
			"anne's currently a high school senior based in new delhi, india. while previously a cbse student, she now follows the general american public school curicullum with classes mostly geared towards STEM & technology. \n \nas someone who hopes to go to law school and eventually establish a career as a white-collar criminal defense lawyer, she has an avid interest in criminal law & data privacy and will be pursuing a degree in computer science + criminal justice at virginia tech starting this fall. \n \nshe's affiliated with girls who code (summer program attendee), kode with klossy ('23 global scholar) & wicys + am an intern at wisp (aka women in security and privacy) and volunteer at anitab.org.",

			projectinfo: "between school, bootcamps, hackclub, hackathons/competitions and personal projects, i'm currently juggling between a lot of coding-aligned things, some of which are merely practice sums while some are full-blown projects and ideas that i've been trying to bring to life. \n \nat hack club, im trying my best to meet the deadlines for projects like #raspapi and #blackbox and #retrospect v2 and some more elaborate and time consuming projects like a game for #juice, a #hackpad v2 project (including pcbs, design & firmware) and a whole 3d printer for #infill. \n \ni have a few projects planned out for myself (a club leader management platform, cnc pen plotter & mini projector,) and for my entire club (a cyberdeck with #hackpac or #multiverse funding). i'm making proposals to work on getting new ysws programs hq approved and pitching/collaborating for ideas for events that are open-to-all or for smth like athena/dos :D",

			techstack: "programming - python, react js, p5.js, html/css/js \n \ndesign - figma, canva, procreate, inkscape, aseprite \n \nother - kicad, blender, fusion 360, tinkercad, audacity",
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
				platform: "github @ arsoninstigator",
				link: "https://github.com/arsoninstigator"
			},

			{
				platform: "buy me a coffee on ko-fi",
				link: "https://ko-fi.com/fairyluv"
			}
		],
		socials: "you can reach out to me via email at arsoninstigator@proton.me, send me a text on slack (i go by @anne there) or contact me via discord/signal (ask in dms)! my github @arsoninstigator desperately needs an overhaul but we're gonna pretend it's not absolutely all over the place. \n \nmy dms are open so feel free to just yap about anything and everything, including  rants, gossip, something work/school related or even ask for general advice on stuff. hmu anytime to fangirl over taylor swift or discuss puzzles, murder mysteries & true crime related media. also please do send me information on scholarships, internship opportunities, summer programs or other opportunities if you can :3"
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
					<p className="result">{this.information.socials}</p>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} target="_blank">
										{everySocial.platform}
									</a>
									<a href="https://github.com/arsoninstigator" target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">oops wrong input</p>;
			}
		} else {
			return <p className="result">oops wrong input</p>;
		}
	};
}

export default Cat;
