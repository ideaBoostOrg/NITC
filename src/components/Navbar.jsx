import { Link as SLink } from 'react-scroll';
import logo from '../assets/img/NITC-Logo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useCallback } from 'react';
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar top-nav-collapse"
			style={{ height: isOpen ? 'fit-content' : '60px' }}
		>
			<div className="container">
				<a href="/" className="navbar-brand">
					<img src={logo} style={{ height: '50px' }} alt="NITC Logo" />
				</a>
				<button
					className="navbar-toggler border-0"
					type="button"
					aria-controls="navbarCollapse"
					aria-expanded={isOpen}
					aria-label="Toggle navigation"
					onClick={() => setIsOpen(!isOpen)}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div
					className={`navbar-collapse collapse ${isOpen ? 'show' : ''}`}
					id="navbarCollapse"
				>
					<ul className="navbar-nav mr-auto w-100 justify-content-end">
						{[
							{ to: 'hero-area', offset: -50, label: 'Home' },
							{ to: 'about', offset: -100, label: 'About' },
							{ to: 'schedules', offset: -80, label: 'Schedules' },
							{ to: 'award', offset: -30, label: 'Awards' },
							{ to: 'digital-economy', offset: -80, label: 'DIGIECON' },
							{ to: 'gallery', offset: -50, label: 'Gallery' },
							{ to: 'pricing', offset: -30, label: 'Pricing' },
							{ to: 'sponsors', offset: -80, label: 'Sponsors' },
						].map((item, index) => (
							<li className="nav-item" key={index}>
								<SLink
									className="nav-link"
									activeClass="active-link"
									spy={true}
									offset={item.offset}
									to={item.to}
									duration={300}
									smooth={true}
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</SLink>
							</li>
						))}
						<div className="dis-btn-container">
							<SLink
								spy={true}
								offset={-30}
								to="dis"
								duration={300}
								smooth={true}
								onClick={() => setIsOpen(false)}
							>
								<p className="disBtn">Digital Investment Summit</p>
							</SLink>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
