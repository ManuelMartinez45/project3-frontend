import { Link } from 'react-router-dom'
import { Container, Row} from 'react-bootstrap'
function MuscleGroup(props){
    const muscleGroup = props.match.params.muscleGroup
    const exercises = props.exercise.filter(e => e.main.toLowerCase() === muscleGroup)
    return(
        <Container>
            <Row>
                <h1 id='muscleHeading'>{muscleGroup}</h1>
                {exercises.map((exercise, key) => (
                    <div className='exerciseBlock' key={key}>
                        <Link to={`/exercises/${muscleGroup}/${exercise.name}`} >
                            <img src={exercise.img} alt={exercise.name} />
                            <h4>{exercise.name}</h4>
                        </Link>
                    </div>
                ))}
            </Row>
        </Container>
    ) 
}

export default MuscleGroup