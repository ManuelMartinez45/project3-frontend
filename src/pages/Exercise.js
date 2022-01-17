
function Exercise(props){
    const name = props.match.params.exercise
    const exercise = props.exercise.find((e) => e.name === name)
    return <h1>{exercise.name}</h1>
}

export default Exercise