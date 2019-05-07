const defaulState = [
    {id:1, name: 'Nick', isTeacher:true },
    {id:2, name: 'Tim', isTeacher:false },
    {id:3, name: 'Sam', isTeacher:false },
]

const welcome = (state=defaulState, action) => {
    return state;
}

export default welcome;