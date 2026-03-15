import { useState } from "react";

export default function Arr_add_idems(){
    const [items, setItems] = useState(["Red","Blue","Green","Yellow"]);
    const addItems = ()=> setItems([...items, "Black", "Pink"]);
    return(
        <div>
            <h3>Colors List</h3>
            <ul>
                {items.map((item, index)=>
                <li key={index}>{item}</li>)}
            </ul>
            <button onClick={addItems}>Add Items</button>
        </div>
    );
}