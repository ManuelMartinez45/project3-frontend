import { useEffect, useState } from 'react'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'
import { Row, Col } from 'react-bootstrap'

function Exercise(props){
    const name = props.match.params.exercise
    const exercise = props.exercise.find((e) => e.name === name)

    const [exerciseName,setExerciseName] = useState(() => {
        // name: exercise.name,
        // main: exercise.main,
        // img: exercise.img,
        // equipment: exercise.equipment,
        // secondary: exercise.secondary,
        // mechanics: exercise.mechanics,
        // perform: exercise.perform
        const saved = localStorage.getItem('exerciseName')
        const initialValue = JSON.parse(saved)
        return initialValue || ''
    })


    
    useEffect(() => {
        localStorage.setItem('exerciseName', JSON.stringify(exercise.name))
        setExerciseName(exercise.name)
    }, [exerciseName])

    return (
        <div id='exercisePage'>
            <Row>
                <AttentionSeeker effect={'pulse'}>
                    <h1>{exercise.name}</h1>
                </AttentionSeeker>
            </Row>
            {/* <h3>{exerciseName.equipment.join(' , ')}</h3> */} 
            <Row>
                <Col lg={{span: 6, offset: 1}} id='image'>
                    <Fade duration={1200}>
                        <img  src={exercise.img} alt="" />
                    </Fade>
                </Col>
                <Col lg={{span: 4}}>
                    <section id='info'>
                        <div><h4>Main</h4>:<h5> {exercise.main}</h5></div>
                        <div><h4>Primary</h4>:<h5>{exercise.primary}</h5> </div>
                        <div><h4>Secondary</h4>:<h5>{exercise.secondary.join(' , ')}</h5> </div>
                        <div><h4>Equipment </h4>: <h5>{exercise.equipment.join(' , ')}</h5></div>
                        <div><h4>Mechanics</h4>:<h5>{exercise.mechanics}</h5> </div>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 10, offset: 2 }}>
                    <span>
                        <h4>Perform: </h4>
                        <ol>
                        {exercise.perform.map((step, key) => (
                            <li key={key}>{step}</li>
                            ))}
                        </ol>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZhPOEQJRzBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Col>
            </Row>
        </div>
        ) 
}

export default Exercise