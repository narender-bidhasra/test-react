import {Container, Row, Col} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function User(props) {

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

    const SingleUser = (user) => {
        console.log(user, "user");
        const {id} = user
        console.log(id, "id")
        props.history.push(`/user/${id}`)
    }

    return(
        <div className="content-main">
			<h1>User Page Here</h1>
            <Container>
                <Row>
                {
                    user.map(userData => {
                        return(
                            <Col xs={12}>
                                <h4 onClick={() => SingleUser(userData)}>{userData.name}</h4>
                                <p>{userData.email}</p>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
        </div>
    )
}

export default User