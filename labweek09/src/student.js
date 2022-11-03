function Student(props) {
    return (
        <div>
        <h3>Student ID : {props.student.studId}</h3>
        <h4> Full name : {props.student.fn + " " + props.student.ln}</h4>
        </div>
    );
}
export default Student