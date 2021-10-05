import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// import Nav from '../components/navbar';
// import FreeAPI from '../screens/free-api';
// import AnimalAPI from '../screens/animal-api-name';
// import Snacks from '../screens/snacks';
import SignUp from "../screens/sign-up";
import SignIn from "../screens/sign-in";
import AddStudents from "../screens/add-student";
import AllStudents from "../screens/all-students";
import Student from "../screens/student-home";
import Teacher from "../screens/teacher-home";
export default function App() {
    return (
        <Router>
            <div>

                <Switch>
                     
                    <Route exact path='/'>
                        <SignUp/>
                    </Route>
                    <Route path='/signin'>
                        <SignIn />
                    </Route>
                    <Route path='/teacher-home'>
                        <Teacher />
                    </Route>
                    <Route path='/addstudent'>
                        <AddStudents />
                    </Route>
                    <Route path='/allstudents'>
                        <AllStudents />
                    </Route>
                    <Route path='/student-home'>
                        <Student />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}