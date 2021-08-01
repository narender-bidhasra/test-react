import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

function SingleUser(props) {
    const { id = '' } = props.match.params || {}
    
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res.data, "User Data Here");
            setUser(res.data);
        })
        .catch(
            error => {console.log(error)}
        )
    }, [])

    return(
        <div className="content-main">
			<h1>User Detail</h1>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Button className="back-btn" onClick={() => props.history.goBack()}>
                            Back
                        </Button>
                        <Row>
                        {
                            user.map(contents => {
                                return(
                                    <Col lg={6} md={6} sm={12} xs={12}>
                                        <div className="cus-grid-rep cus-user-detail">
                                            <h2>{contents.name}</h2>
                                            <h3>{contents.email}</h3>
                                            <h3>{contents.phone}</h3>
                                            <h3>{contents.website}</h3>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SingleUser