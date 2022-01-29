import { Container,Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Workout(props){
    return (
        <Container id='workoutPage'>
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <h1>Workouts</h1>
                </Col>
                <Col lg={{span: 3, offset: 1}}>
                    <Link to='/workouts/new'>
                        <button>New</button>
                    </Link>
                </Col>
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
        </Container>
    )
}

export default Workout