import { Link } from 'react-router-dom'
function MuscleGroup(props){
    const muscleGroup = props.match.params.muscleGroup
    const exercises = props.exercise.filter(e => e.main.toLowerCase() === muscleGroup)
    return(
        <>
            <h1 id='muscleHeading'>{muscleGroup}</h1>
            {exercises.map((exercise) => (
                <div className='exerciseBlock'>
                    <Link to={`/exercises/${muscleGroup}/${exercise.name}`}>
                        <img className='indexImages'src={exercise.img} alt={exercise.name} />
                        <h4>{exercise.name}</h4>
                    </Link>
                </div>
            ))}
        </>
    ) 
}

export default MuscleGroup