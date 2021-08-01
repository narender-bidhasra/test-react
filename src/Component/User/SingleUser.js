import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SingleUser(props) {
    const { id = '' } = props.match.params || {}
    
    return(
        <Button onClick={() => props.history.goBack()}>
            Back
        </Button>
    )
}

export default SingleUser