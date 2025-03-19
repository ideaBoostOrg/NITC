function Vedio_section() {
	return (
		<>
			<video id="bgvid" className="stop" loop>
				<source src="assets/video/event.webm" type="video/mp4" />
			</video>
			<div id="polina" className="video-text">
				<div className="tb-t">
					<div className="tb-c">
						<div className="polina">
							<button>
								<i className="lni-play"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Vedio_section;
