import { useState } from "react";

export function Createtodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('')

    return <div>
        <input type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value)
        }}/>
        <input type="text" placeholder="Description" onChange={function(e) {
            const des = e.target.value;
            setDescription(des);
        }}/>
        <button onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    decription: description
                }),
                headers: {
                    "contentType": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert("todo added")
                })
        }}>Add a todo</button>
    </div>
}