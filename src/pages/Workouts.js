import { Container,Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Workout(props){
    return (
        <Container id='workoutPage'>
            <Link to='/workouts/new'>
            </Link>
            <Row>
                <h1>Workouts</h1>
            </Row>
            <Row>
                <Col lg={{span: 8, offset: 2}} id='workoutNames'>
                    <div className="workouts">
                        {props.workout.map((workout,key) => (
                            <Link key={key} to={`/workouts/${workout.title}`}>
                                <h3>{workout.title}</h3>
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
                    <button>New</button>
        </Container>
    )
}

export default Workout