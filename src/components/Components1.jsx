import { useState } from "react";
import UserContext from "../UserContext";
import Components2 from "./Components2";

export default function Components1(){
    const [user] = useState("Sumit");
    const [role] = useState("Admin");
    return(
        <div>
        <UserContext.Provider value={{user, role}}>
            <h2>Hello, {user}</h2>
            <Components2/>
        </UserContext.Provider>
        </div>
    );
}