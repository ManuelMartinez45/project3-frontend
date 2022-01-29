import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

function Form(props){
    const [form, setForm] = useState({
        title: '',
        split: '',
        days: [{},{},{}]
        
    })

    
    const [exercises, setExercises] = useState([
        {
            name: '',
            set: '',
            reps: ''
        },
    ])
    
    const [days, setDays] = useState([
        {
            exercises: []
        },
    ])

    function handleChange(evt){
        setForm((form) => ({
            ...form,
            [evt.target.name]: evt.target.value
        }))
    }

    function handleExerciseChange(index,evt){
        const values = [...exercises]
        values[index][evt.target.name] = evt.target.value
        // setDays((days) => ({
        //     ...days,
        //     exercises: values
        // }))        
        setForm((form) => ({
            ...form,
            days: [{
                exercises: values
            }]
        })
        )
    }

    function handleAddExercise(evt){
        evt.preventDefault()
        setExercises([...exercises,{
            name: '',
            sets: '',
            reps: ''
        }])
        
    }
    
    function handleRemoveExercise(index){
        const values = [...exercises]
        values.splice(index,1)
        setExercises(values)
    }

    function handleAddDay(evt, index){
        evt.preventDefault()
        setDays([...days], [{
            exercises: {
                name: '',
                reps: '',
                sets: ''
            }
        }])
        form.days[1] = days
    }
    console.log(form.days)

    function handleSubmit(evt){
        evt.preventDefault()
        setForm(() => ({
            ...form,
            days: [{
                ...days,
                
                    exercises: {
                        ...exercises
                    }
            }]
        }))
        props.createWorkout(form);
    }


    return (
        <Container id='newFormPage'>
                <h1> New Workout Routine </h1>
                <Link to='/workouts'>
                    <button className='formBtn' id='backBtn' >Back</button>
                </Link>
            <section id='form'>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <label htmlFor="title"><h5>Title:</h5></label>
                            <br />
                            <input 
                                type="text"
                                value={form.title}
                                name='title'
                                placeholder='title'
                                onChange={handleChange}
                                />
                            </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="split"><h5>Weekly Split:</h5></label>
                            <br />
                            <input 
                                type="text"
                                value={form.split}
                                name='split'
                                placeholder='Weekly Split'
                                onChange={handleChange}
                                />
                        </Col>
                    </Row>
                   
                    
                    <Row id='exerciseInputLabels'>
                        <Col lg={4}>
                            <label htmlFor="name"><h5>Exercise Name:</h5></label>
                        </Col>
                        <Col lg={4}>
                            <label htmlFor="reps"><h5>Reps: </h5></label>
                        </Col>
                        <Col lg={4}>
                            <label htmlFor="sets"><h5>Sets: </h5></label>
                        </Col>
                    </Row>
                    { exercises.map((exercise, index) => (
                        <Row key={ index }>
                            <div id='exerciseInput'>
                                <input 
                                    type="text" 
                                    placeholder='name' 
                                    value={exercises.name}
                                    name='name'
                                    onChange={evt => handleExerciseChange(index,evt)}
                                    />
                                <input 
                                    type="text" 
                                    placeholder='reps' 
                                    value={exercises.reps}
                                    name='reps'
                                    onChange={evt => handleExerciseChange(index,evt)}
                                    />
                                
                                <input 
                                    type="text" 
                                    placeholder='sets' 
                                    value={exercises.sets}
                                    name='sets'
                                    onChange={evt => handleExerciseChange(index,evt)}
                                    /> 
                                <button id='removeBtn' className='formBtn' onClick={() => handleRemoveExercise(index)}>Remove</button>
                            </div>
                        </Row>
                    ))}
                    <button className='formBtn' onClick={handleAddExercise}>+</button>
                        <input className='formBtn' type="submit" value='Submit' />
                </form>
            </section>
        </Container>
    )
}

export default Form