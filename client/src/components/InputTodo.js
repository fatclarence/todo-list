import React, { Fragment, useState } from "react";

const InputTodo = () => {

    // description here is the state
    // setDescription is the only way to change to state
    // useState give the state a default value
    const [description, setDescription] = useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            // client input texts
            const body = { description };
            
            // Convert description input from the client side
            // into something that we can POST
            // When user click "Add" button the POST requests fires off
            // and a task is added into our PSQL database
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch(err) {
            console.error(err.message);
        }
    };

    // onChange here allows changing of input inside textbox
    return (
    <Fragment>
        <h1 className="text-center mt-5">Input Todo</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment> 
    );
};

export default InputTodo;