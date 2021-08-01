import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'

function Photo() {

	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/photos")
		.then(res => {
				const proLimit = res.data.slice(0, 12);
				console.log(res.data, "Photo Data Here");
				setPhotos(proLimit);
			}
		)
		.catch(error => {console.log(error)})
	}, [])

	return(
		<div className="content-main">
			<h1>Photo Page Here</h1>
			<Container>
				<Row className="gx-4">
				{
					photos.map(photos => {
						return(
							<Col lg={4} md={4} sm={6} xs={12} key={photos.id}>
								<div className="cus-grid-rep">
									<div className="photo-img">
										<img src={photos.url} />
									</div>
									<h3>{photos.title}</h3>
								</div>
							</Col>
						)
					})
				}
				</Row>
			</Container>
		</div>
	)
}


export default Photo