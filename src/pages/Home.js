import { Container, Row, Col, Carousel} from 'react-bootstrap'
import { Fade, Slide, SlideProps } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'


function Home(){
    const muscleGroups = ['arms', 'back', 'chest', 'core', 'legs']
    
    return (
        <Container fluid id='homePage'>
        <Fade duration={1700}>
            <Carousel id='carousel' fade>
            <Carousel.Item>
                <img
                src="https://selecthealth.org/-/media/selecthealth82/article/post/2019/03/meal_prep_blog_lg.ashx"
                alt="Cutting Board"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.gannett-cdn.com/presto/2021/07/21/USAT/dfbd657c-1ef5-4dd9-b355-1619bdc2645f-GettyImages-924491214.jpg"
                alt="Bicep Curl"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://imgk.timesnownews.com/story/roasted-salmon.gif"
                alt="Salmon Recipe"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.lifehack.org/wp-content/uploads/2013/06/bodybuilding-tips-1024x768.jpg"
                alt="Fitness"
                />
            </Carousel.Item>
            </Carousel>
        </Fade>

        <Row>
            <Col>
                <section id="nutrition">
                    <Fade onVisibilityChange={true} duration={1200} >
                    {/* <h1>
                        "Victory isn’t defined by wins and losses; it’s defined by effort."
                    </h1> */}
                    <h1>NUTRITION</h1>
                    </Fade>
                    <Row>
                        <Col lg={4}>
                            <div className='mainBody'>
                                <img src="https://www.csuohio.edu/sites/default/files/eat-right-575px.jpg" alt="" />

                            <br />
                                <div className='articleSummary'>
                                    <h3>Lorem Ipsum</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione tempore quod atque iure, id adipisci saepe, quisquam nulla expedita facilis enim? Minima iure voluptatibus ad accusantium obcaecati fugiat id. <br/><a href='#'>View More...</a>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg={4}>
                            <div className='mainBody'>
                                <img src="https://www.verywellhealth.com/thmb/P6T-yEHRfWJdtHoZXYdaYGjKSzc=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1145581060-c6f3afa5f308461cab0a77d79a51c68a.jpg" alt="" />
                            <br />
                                <div className='articleSummary'>
                                    <h3>Lorem Ipsum</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione tempore quod atque iure, id adipisci saepe, quisquam nulla expedita facilis enim? Minima iure voluptatibus ad accusantium obcaecati fugiat id. <br /> <a href='#'>View More...</a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className='mainBody'>
                                <img src="https://tcoyd.org/wp-content/uploads/2021/04/weight-loss_1100x733.jpg" alt="" />
                            <br />
                                <div className='articleSummary'>
                                    <h3>Lorem Ipsum</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione tempore quod atque iure, id adipisci saepe, quisquam nulla expedita facilis enim? Minima iure voluptatibus ad accusantium obcaecati fugiat id. <br /> <a href='#'>View More...</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Col>
        </Row>   
                <hr/>

        <Row>
            <Col>
                <section id="articles">
                    <Fade onVisibilityChange={true} duration={1200} >
                    {/* <h1>
                        "Victory isn’t defined by wins and losses; it’s defined by effort."
                    </h1> */}
                    <h1>Articles</h1>
                    </Fade>
                    <Row>
                        <Col lg={4}>
                            <div className='mainBody'>
                                <img src="https://www.mensjournal.com/wp-content/uploads/2015/03/singleRDL.jpg?w=900&quality=86&strip=all" alt="" />

                            <br />
                                <div className='articleSummary'>
                                    <h3>Lorem Ipsum</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione tempore quod atque iure, id adipisci saepe, quisquam nulla expedita facilis enim? Minima iure voluptatibus ad accusantium obcaecati fugiat id. <br/><a href='#'>View More...</a>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg={4}>
                            <div className='mainBody'>
                                <img src="https://embed.widencdn.net/img/veritas/9vexeukzcf/1200x630px/pilates-ab-exercise.jpeg?u=at8tiu&use=d502n&k=c" alt="" />
                            <br />
                                <div className='articleSummary'>
                                    <h3>Lorem Ipsum</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione tempore quod atque iure, id adipisci saepe, quisquam nulla expedita facilis enim? Minima iure voluptatibus ad accusantium obcaecati fugiat id. <br /> <a href='#'>View More...</a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className='mainBody'>
                                <img src="https://www.mensjournal.com/wp-content/uploads/2020/10/BeastMode.jpg?quality=86&strip=all" alt="" />
                            <br />
                                <div className='articleSummary'>
                                    <h3>Lorem Ipsum</h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione tempore quod atque iure, id adipisci saepe, quisquam nulla expedita facilis enim? Minima iure voluptatibus ad accusantium obcaecati fugiat id. <br /> <a href='#'>View More...</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Col>
        </Row>  
                
        </Container>
    )
}

export default Home