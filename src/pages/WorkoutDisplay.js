import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function WorkoutDisplay(props){
    const workoutId = props.match.params.workout
    const workout = props.workout.find((w) => w._id === workoutId)
    return(
        <Container id='WorkoutDisplay'>
            <h1>{workout.title}</h1>
            <h3>{workout.split}</h3>
            <div id='workoutExercises'>
                { 
                workout.days[0].exercises.map((exercise,key) => (
                    <div key={key}>
                        <Link to={`/exercises/${exercise.main}/${exercise.name}`}>
                            <h6>{exercise.name}</h6>
                        </Link>
                        <div>
                            <p>
                                reps: {exercise.reps}
                            </p>
                            <p>
                                sets: {exercise.sets}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </Container>
    ) 
    
}

export default WorkoutDisplay