import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Index(props){
    return(
        <Container id="indexPage">
            <h1>Exercises Guide List</h1>
            <Row>
                {props.exercise.map((exercise, key) => {
                    return <Col  className='whatthe'lg={4}>
                        <div className="float-left exercise" key={key}>
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

