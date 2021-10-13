import React from 'react'

function todo(props) {

        const styleTodo = {
            border : "1px solid orange",
            margin : "0.5vw",
            padding : "1vw",
        };

        return (
            <div className = 'container-sm'> 
            <h3>{props.todo.title}</h3> <hr/>
            <p>{props.todo.desc}</p>   
            </div>
        )
}

export default todo
