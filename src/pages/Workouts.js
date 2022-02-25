import { Container,Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Workout(props){


    return (
        <Container id='workoutPage'>
            <Row>
                <Col lg={{span: 3, offset: 11}}>
                    <Link to='/workouts/new'>
                        <button id='newBtn'>New</button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <h1>
                    My Workouts
                </h1>
            </Row>
            <Row>
                <Col lg={{span: 8, offset: 2}} id='workoutNames'>
                    <div className="workouts">
                        {props.workout.map((workout,key) => (
                            <Link key={key} to={`/workouts/${workout._id}`}>
                                <h3>{workout.title}</h3> 
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Workout