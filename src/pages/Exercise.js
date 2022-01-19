
function Exercise(props){
    const name = props.match.params.exercise
    const exercise = props.exercise.find((e) => e.name === name)
    return (
        <div id='exercisePage'>
            <h1>{exercise.name}</h1>
            <img src={exercise.img} alt="" />
            <section>
                <p>Main: {exercise.main}</p>
                <p>Primary: {exercise.primary}</p>
                <p>Secondary: {exercise.secondary.join(', ')}</p>
                <p>Equipment: {exercise.equipment}</p>
                <p>Mechanics: {exercise.mechanics}</p>
                <span>
                    Perform: 
                    <ol>
                    {exercise.perform.map((step, key) => (
                        <li key={key}>{step}</li>
                    ))}
                    </ol>
                </span>
            </section>
        </div>
        ) 
}

export default Exercise