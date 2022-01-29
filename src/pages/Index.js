import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Index(props){

    
    return(
        <Container id="indexPage">
            <h1>
                Exercise Guide List
            </h1>
            <hr></hr>
            <Row>
                {props.exercise.map((exercise, key) => {
                    return <Col key={key} className='whatthe'lg={{span: 8, offset: 2}}>
                        <div className="exercise" >
                        <Link to={`/exercises/${exercise.main}/${exercise.name}`}>
                            {/* <img  src={exercise.img} alt={exercise.name} /> */}
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

