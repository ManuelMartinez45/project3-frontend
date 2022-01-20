import { useState } from 'react';
import { Link } from 'react-router-dom'

function Form(props){
    const [form, setForm] = useState({
        title: '',
        split: '',
        exercises: []
            // {
            //     name: '',
            //     sets: '',
            //     reps: ''
            // }
        
    })

    const [exercises, setExercises] = useState([
        {
            name: '',
            set: '',
            reps: ''
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
        // setExercises(values)
        
        setForm((form) => ({
            ...form,
            exercises: values
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

    function handleSubmit(evt){
        evt.preventDefault()
        setForm(() => ({
            ...form,
            exercises:{
                ...exercises
            }
        }))
        props.createWorkout(form);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input 
                    type="text"
                    value={form.title}
                    name='title'
                    placeholder='title'
                    onChange={handleChange}
                />
                
                <input 
                    type="text"
                    value={form.split}
                    name='split'
                    placeholder='Weekly Split'
                    onChange={handleChange}
                />


                { exercises.map((exercise, index) => (
                    <div key={ index }>
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
                            // onChange={handleExerciseChange}
                            />
                        
                        <input 
                            type="text" 
                            placeholder='sets' 
                            value={exercises.sets}
                            name='sets'
                            onChange={evt => handleExerciseChange(index,evt)}
                            // onChange={handleExerciseChange}
                        /> 
                        <button onClick={() => handleRemoveExercise(index)}>Remove</button>
                    </div>
                ))}
                <input type="submit" value='Add New Workout' />
            </form>
                <button onClick={handleAddExercise}>Add</button>
            <Link to='/workouts'>
                <button>Back</button>
            </Link>
        </section>
    )
}

export default Form