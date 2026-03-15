import { useContext } from "react";
import UserContext from "../UserContext";
import Components3 from "./Components3";

export default function Components2() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>Welcome {user}</h3>
      <Components3 />
    </div>
  );
}
