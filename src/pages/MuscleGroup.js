import { Link } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'


function MuscleGroup(props){
    const muscleGroup = props.match.params.muscleGroup
    const exercises = props.exercise.filter(e => e.main.toLowerCase() === muscleGroup)
    
    
    return(
        <Container id='muscleGroupPage'>
                    <h1 id='muscleHeading'>{muscleGroup}</h1>

                    <Row id='muscleGroupList'>
                        <Col lg={1}>
                            <Link to='/exercises/arms'>Arms</Link>
                        </Col>
                        <Col lg={1}>
                            <Link to='/exercises/back'>Back</Link>
                        </Col>
                        <Col lg={1}>
                            <Link to='/exercises/core'>Core</Link>
                            </Col>
                        <Col lg={1}>
                            <Link to='/exercises/legs'>Legs</Link>
                        </Col>
                        <Col lg={1}>
                            <Link to='/exercises/shoulders'>Shoulders</Link>
                        </Col>
                    </Row>
                <Row>
                    {exercises.map((exercise, key) => (
                        <Col id='exerciseBlock' key={key} lg={{span: 8, offset: 2}}>
                            <div className="exercise" >
                                <Link to={{
                                    pathname: `/exercises/${exercise.main}/${exercise.name}`
                                    }}
                                    >
                                    <img src={exercise.img} alt="" />
                                    <h3>{exercise.name}</h3>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
    </Container>
    )
}

export default MuscleGroup