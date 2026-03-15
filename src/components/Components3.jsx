import { useContext } from "react";
import UserContext from "../UserContext";

export default function Components3(){
    const {role} = useContext(UserContext);

    return(
        <div>
            <p>The User's Role is: {role}</p>
        </div>
    );
}