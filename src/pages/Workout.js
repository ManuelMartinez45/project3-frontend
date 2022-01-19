import { Container, Row } from 'react-bootstrap'

function Workout(props){
    return (
        <>
            <h1>{props.workout[0].title}</h1>
            <h4>Split: {props.workout[0].split} Day(s)</h4>
            <h3>Exercises: </h3>
            {props.workout[0].exercises.map((e,key) => (
                <div>
                    <h6>{e.name}</h6>
                    <p>
                    Sets: {e.sets} 
                    <br></br>
                    Reps: {e.reps}
                    </p>
                </div>
            ))}
        </>
    )
}

export default Workout