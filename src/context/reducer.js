// export let data = {
//     snacks: 'Rio',
//     drink: 'Coffee',


// }


export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser: {},
    users: [
        {
            userName: 'haider',
            email: 'haider@',
            password: '123',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'asd@',
            password: '123',
            role: 'student'
        },
    ],
    allStudentData:[
        {
        studentName :'ali',
        rollNo : 222,
        obtainedMarks : 5000,
        totalMarks : 400,
        grade:'A Grade',
        feedBack : 'Good '
        },
        {
        studentName :'akram',
        rollNo : 111,
        obtainedMarks : 5000,
        totalMarks : 400,
        grade:'A Grade',
        feedBack : 'Good '
        }
    ]
}
export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK":{
            return{
                ...state,
                drink:action.payload
            }
        }
        case "REGISTER_USER" : {
            
            
                let usersClone = state.users.slice(0);
                    usersClone.push(action.payload);
                    // console.log(state.users)
                    return {
                        ...state,
                        users : usersClone
                    }
                    
                }
        case "LOGIN_USER" : {
            console.log(state.authUser);   
            return{
                ...state,
                authUser : action.payload
            }
        }
        
        case "ADD_STUDENTS":{
            let studentsDataClone =  state.allStudentData.slice(0);
            studentsDataClone.push(action.payload);
            // console.log(state.allStudentData);
            return{
                ...state,
                allStudentData:studentsDataClone
            }
        }

        case "SIGN_OUT" :{
            return{
                ...state,
                authUser: action.payload
            }
        }

                default:
                    return state;
                    
                }
                
                
            }