function Index(props){
    return(
        props.exercise.map((exercise, key) => {
           return <div className="exercise" key={key}>
              {/* <img className='indexImages' src={exercise.img} alt={exercise.name} /> */}
              <h3>{exercise.name}</h3>
           </div>
        })
    ) 
}

export default Index