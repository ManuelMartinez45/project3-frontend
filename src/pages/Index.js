import { Container, Row } from 'react-bootstrap'

function Index(props){
    return(
        <Container id="indexPage">
            <Row>
                {props.exercise.map((exercise, key) => {
                    return <div className="exercise" key={key}>
                    <img  src={exercise.img} alt={exercise.name} />
                    <h3>{exercise.name}</h3>
                </div>
                })}
            </Row>
        </Container>
    ) 
}

export default Index

