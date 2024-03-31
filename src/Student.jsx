function Student(props){
    return(
       <div>
         <p>Name :{props.name}</p>
         <p>Age :{props.age}</p>
         <p>Location :{props.location}</p>
         <p>Student :{props.isStudent ? "Yes" :"No"}</p>
       </div>
    )
}

export default Student