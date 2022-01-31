import { Link } from 'react-router-dom'
import { Container, Row, Col, Carousel} from 'react-bootstrap'


function MuscleGroup(props){
    const muscleGroup = props.match.params.muscleGroup
    const exercises = props.exercise.filter(e => e.main.toLowerCase() === muscleGroup)
    
    
    return(
        <Container id='muscleGroupPage'>
                    <Carousel id='carousel' fade>
                        <Carousel.Item>
                            <img
                            src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            src="https://business.uoregon.edu/sites/business1.uoregon.edu/files/styles/banner/public/news/Enews-Covid-Gym-Safety-thumb-202101.jpg?itok=kFFfNUfR"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guy-training-at-the-gym-royalty-free-image-979026970-1561129165.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            src="https://www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>







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