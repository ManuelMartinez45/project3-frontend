import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Workout(props){
    console.log(props.workout)
    return (
        <>
            <Link to='/workouts/new'>
                <button>New</button>
            </Link>
            <h1>Workouts</h1>
            {props.workout.map((workout,key) => (
                <h3 key={key}>{workout.title}</h3>
            ))}
        </>
    )
}

export default Workout