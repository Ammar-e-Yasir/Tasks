import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import './all-students/all-students.css';


export default function AllStudents() {
    const { state, dispatch } = useContext(GlobalContext);


 
    return (
        <div>

            <ul>
                <li >
                    <Link to='/addstudent'>Add Student</Link>
                </li>
                <li >
                    <Link to='/teacher-home'>Teacher Home</Link>
                </li>

            </ul>


                 <h1>STUDENTS LIST</h1>

            <table>
                <thead>
                    <tr>
                        <th>Sr#</th>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Remark</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {


                        state.allStudentData.map((student, index) => (
                            <tr key={student.studentName + index}>
                                <td>{index + 1}</td>
                                <td>{student.studentName}</td>
                                <td>{student.rollNo}</td>
                                <td>{student.obtainedMarks}</td>
                                <td>{student.totalMarks}</td>
                                <td>{student.grade}</td>
                                <td>{student.feedBack}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>






        </div>


    )
}