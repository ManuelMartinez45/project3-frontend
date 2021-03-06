import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Index(props){

    
    return(
        <Container id="indexPage">
            <h1>
                Exercise Guide List
            </h1>
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
                {props.exercise.map((exercise, key) => {
                    return <Col key={key} id='exerciseNames'lg={{span: 8, offset: 2}}>
                        <div className="exercise" >
                        <Link to={`/exercises/${exercise.main}/${exercise.name}`}>
                            <img  src={exercise.img} alt={exercise.name} />
                            <h3>{exercise.name}</h3>
                        </Link>
                        </div>
                        </Col>
                })}
            </Row>
        </Container>
    ) 
}

export default Index

