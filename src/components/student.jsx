function student(props){
    return(
        <div>
           <p>Name: {props.name}</p>
           <p>Roll No: {props.rollNo}</p>
           <p>Course:{props.course}</p> 
            <p>Age:{props.age}</p>
            
        </div>
    );
}

export default student;