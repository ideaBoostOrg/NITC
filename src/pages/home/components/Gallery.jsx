/*icon */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { eventImages } from '../../../assets/img';

function Gallery() {
	return (
		<section
			id="gallery"
			className="section-padding"
			style={{ padding: '30px 0' }}
		>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="section-title-header text-center">
							<h2
								className="section-title wow fadeInUp animated"
								style={{
									visibility: 'visible',
									WebkitAnimationDelay: '0.2s',
									MozAnimationDelay: '0.2s',
									animationDelay: '0.2s',
									paddingBottom: '30px',
								}}
							>
                Event Gallery
							</h2>
						</div>
					</div>
				</div>

				<div className="grid-of-5-cols">
					{eventImages.map((image, index) => (
						<div key={index} className="">
							<img className="img-fluid" alt="" src={image} />
						</div>
					))}
				</div>
				<br></br>
			</div>
		</section>
	);
}

export default Gallery;
