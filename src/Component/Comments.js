import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'

function Comments() {

	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/comments")
		.then(res => {
			const comLimit = res.data.slice(0, 12)
			console.log(res.data, "Comments Data Here");
			setComments(comLimit);
			setLoading(true);
		})
		.catch(error => {console.log(error)})
	}, [])

	return(
		<div className="content-main">
			<h1>Comments Page Here</h1>
			{
				!loading ?
				 	<h2 className="text-center">Loader...</h2>
				:
				<Container>
					<Row className="gx-4">
					{
						comments.map(commentHere => {
							return(
								<Col lg={6} md={6} sm={12} xs={12}>
									<div className="cus-grid-rep">
										<h3>{commentHere.name}</h3>
										<h5>{commentHere.email}</h5>
										<p>{commentHere.body}</p>
									</div>
								</Col>
							)
						})
					}
					</Row>
				</Container>
			}
		</div>
	)
}

export default Comments