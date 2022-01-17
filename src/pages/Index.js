function Index(props){
    return(
        props.exercise.map((exercise) => {
           return <div className="exercise" key={exercise.id}>
              {/* <img className='indexImages' src={exercise.img} alt={exercise.name} /> */}
              <h3>{exercise.name}</h3>
           </div>
        })
    ) 
}

export default Index