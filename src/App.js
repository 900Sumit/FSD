import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
// import Components1 from "./components/Components1";
// import Navbar from "./components/NavBar";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Counter_mul from "./components/Counter_mul";
// import KeyCounter from "./components/KeyCounter";
// import Form from "./components/Form";
// import On_Off_btn from "./On_Off_btn";
// import Arr_add_items from "./Arr_add_items";
// import Add_of_2_num from "./Add_of_2_num";
// import ButtonClick from "./ButtonClick";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <h2>Sumit Kumar 191</h2>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />

      

      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter> */}

      {/* <Components1/> */}
      {/* <Counter_mul/> */}
      {/* <KeyCounter/> */}
      {/* <Form/> */}
      {/* <On_Off_btn/> */}
      {/* <Arr_add_items/> */}
      {/* <ButtonClick/> */}
      {/* <Add_of_2_num/> */}
    </div>
  );
}

export default App;
