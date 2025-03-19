import { ExclamationDiamondFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function SomethingWentWrong() {
	return (
		<section id="" className="section-padding notificaiton-pages">
			<div className="confirm-container">
				<ExclamationDiamondFill
					className="icon"
					style={{
						color: '#eb741a',
					}}
				/>
				<h2 style={{ textAlign: 'center' }}>Something Went Wrong!</h2>
				<p>We apologize, but something went wrong during the process.</p>
				<p>
          Please try again later or contact our support team for assistance.
				</p>
				<Link
					className="back-btn"
					to="/"
					style={{
						backgroundColor: '#eb741a',
					}}
				>
          Try Again
				</Link>
			</div>
		</section>
	);
}

export default SomethingWentWrong;
