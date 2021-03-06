import { Link } from 'react-router-dom';


import './TeamCard.scss';

import facebook from '../../assets/images/icon/facebook.svg'
import instagram from '../../assets/images/icon/instagram.svg'
import linkedin from '../../assets/images/icon/in.svg'


import Member1 from '../../assets/images/member1.png'
import Member2 from '../../assets/images/member2.png'
import Member3 from '../../assets/images/member3.png'
import Member4 from '../../assets/images/member4.png'

const TeamCard = () => {

	function CardHover() {
		document.getElementById('social1').classList.add('active')
	}
	function CardBlur() {
		document.getElementById('social1').classList.remove('active')
	}
	function CardHover2() {
		document.getElementById('social2').classList.add('active')
	}
	function CardBlur2() {
		document.getElementById('social2').classList.remove('active')
	}
	function CardHover3() {
		document.getElementById('social3').classList.add('active')
	}
	function CardBlur3() {
		document.getElementById('social3').classList.remove('active')
	}
	function CardHover4() {
		document.getElementById('social4').classList.add('active')
	}
	function CardBlur4() {
		document.getElementById('social4').classList.remove('active')
	}

	return (
		<div className="teamcard container">
			<p className="teamcard__minTitle">Our Creative Team</p>
			<h2 className="teamcard__title">Our Awesome Team</h2>

			<p className="teamcard__text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
			</p>

			<div className="teamcard-inner">
				<div className="teamcard-inner-item" onMouseEnter={CardHover} onMouseLeave={CardBlur}>
					<div className="our-team ico-team">
						<div className="team_img">

							<img src={Member1} alt="chef-1" className="team_img-inner" />
							<ul className="social" id="social1">
								<li><a href="/">
									<img src={facebook} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={instagram} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={linkedin} alt="" width="23" height="23" />
								</a></li>
							</ul>

							<div className="team-content">
								<h4 className="title">Randy crishen</h4>
								<span className="icoo" id="icoo"></span>
								<span className="post">Our Company CEO</span>
							</div>

						</div>
					</div>
				</div>

				<div className="teamcard-inner-item" onMouseEnter={CardHover2} onMouseLeave={CardBlur2}>
					<div className="our-team ico-team">
						<div className="team_img">

							<img src={Member2} alt="chef-1" className="team_img-inner" />
							<ul className="social" id="social2">
								<li><a href="/">
									<img src={facebook} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={instagram} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={linkedin} alt="" width="23" height="23" />
								</a></li>
							</ul>

							<div className="team-content">
								<h4 className="title">Randy crishen</h4>
								<span className="icoo" id="icoo"></span>
								<span className="post">Professional Translator</span>
							</div>

						</div>
					</div>
				</div>


				<div className="teamcard-inner-item" onMouseEnter={CardHover3} onMouseLeave={CardBlur3}>
					<div className="our-team ico-team">
						<div className="team_img">

							<img src={Member3} alt="chef-1" className="team_img-inner" />
							<ul className="social" id="social3">
								<li><a href="/">
									<img src={facebook} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={instagram} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={linkedin} alt="" width="23" height="23" />
								</a></li>
							</ul>

							<div className="team-content">
								<h4 className="title">Randy crishen</h4>
								<span className="icoo" id="icoo"></span>
								<span className="post">Business Consultant</span>
							</div>

						</div>
					</div>
				</div>


				<div className="teamcard-inner-item" onMouseEnter={CardHover4} onMouseLeave={CardBlur4}>
					<div className="our-team ico-team">
						<div className="team_img">

							<img src={Member4} alt="chef-1" className="team_img-inner" />
							<ul className="social" id="social4">
								<li><a href="/">
									<img src={facebook} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={instagram} alt="" width="23" height="23" />
								</a></li>
								<li><a href="/">
									<img src={linkedin} alt="" width="23" height="23" />
								</a></li>
							</ul>

							<div className="team-content">
								<h4 className="title">Randy crishen</h4>
								<span className="icoo" id="icoo"></span>
								<span className="post">Our Company CEO</span>
							</div>

						</div>
					</div>
				</div>

			</div>




		</div>
	)
}


export default TeamCard;