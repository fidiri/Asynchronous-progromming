import Student from "./Student";

 function Students  ({students, onAddTag}){
    

    return(
        <div className="container">
            {students.map((student, idx) => <Student onAddTag={onAddTag} />)}
        </div>
    )
}

export default Students;