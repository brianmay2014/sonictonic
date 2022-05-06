import "../../index.css";
import "./HomePage.css";

function Footer() {
	return (
		<div className="footer-backer">
			<ul className="footer">
				<li>© 2022 Brian May</li>
				<li>
					<a
						href="https://github.com/brianmay2014"
						rel="noreferrer"
						target="_blank"
					>
						Github
					</a>
				</li>
				<li>
					<a
						href="http://www.linkedin.com/in/brian-may-6aa49172"
						rel="noreferrer"
						target="_blank"
					>
						LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
