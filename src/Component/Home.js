import {Container, Row, Col} from 'react-bootstrap'

function Home() {
	return(
		<Container>
			<Row>
				<Col xs={12}>
					<div className="content-main">
						<h1>Home Page Here</h1>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Home