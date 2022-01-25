import { Container, Row, Col} from 'react-bootstrap'
import { Fade, Slide, SlideProps } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'


function Home(){
    const muscleGroups = ['arms', 'back', 'chest', 'core', 'legs']
    
    return (
        <Container fluid id='homePage'>
                <Row>
                    <Col>
                        <Fade duration={2500}>
                            <img src="https://c4.wallpaperflare.com/wallpaper/972/1015/662/muscles-pose-white-and-black-bodybuilder-wallpaper-preview.jpg" alt="" />
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <header>
                            <Slide onVisibilityChange={true} direction="right" duration={750}>
                            <h1>
                                "Victory isn’t defined by wins and losses; it’s defined by effort."
                            </h1>

                            </Slide>
                            
                        </header>
                    </Col>
                </Row>   

                <Fade onVisibilityChange={true} duration={2000}>
                    <Row>
                        <section>
                            <Col lg={4}>
                                <div className="guides">
                                    <h3>Guides</h3>
                                    <hr></hr>
                                    {muscleGroups.map((mg, key) => (
                                    <Link to={`/exercises/${mg}`} key={key}>
                                        <p className='homeGuideLinks'>{mg}</p>
                                    </Link>
                                ))}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="workouts">
                                    <h3>Workouts</h3>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nutrition">
                                    <h3>Nutrition</h3>
                                </div>
                                    
                            </Col>
                        </section>
                    </Row>
                </Fade>
        </Container>
    )
}

export default Home