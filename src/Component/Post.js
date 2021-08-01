import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'

function Post() {
	
	const [posts, setPosts] = useState([])
	
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(res => {
			const postLimit = res.data.slice(0, 12)
			console.log(res.data, "Post Data Here");
			setPosts(postLimit);
		})
		.catch(error => {console.log(error)})
	},[])

	return(
		<div className="content-main">
			<h1>Post Page Here</h1>
			<Container>
				<Row className="gx-4">
				{
					posts.map(post => {
						return(
							<Col lg={6} md={6} sm={12} xs={12}>
								<div className="cus-grid-rep">
									<h4>{post.title}</h4>
									<p>{post.body}</p>
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

export default Post