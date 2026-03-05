import "./style.css";
import { Container } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task";
import { useState } from "react";
import ConfirmeDelete from "./components/deleteConfirme";

export default function TodoList() {
  const localstorage = window.localStorage.getItem("tasks")
    ? JSON.parse(window.localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(localstorage);
  //const [done, setDone] = useState([]);
  //const [notyet, setNotyet] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [doDelete, setDoDelete]  = useState(false);
    

  const handleClose = (para) => {
    setOpen(para);
  };

  function hundleDoDelete(para){
    setDoDelete(para)
  }

  const hundleAddTask = () => {
    if (input !== "") {
      setTasks([
        ...tasks,
        {
          title: input,
          detail: "",
          Id: Date.now(),
          time: new Date().toLocaleDateString("en-GB"),
        },
      ]);
      setInput("");
    }
  };
  // hundle delete and update and done :
  function hundleOpen(para){
      setOpen(para);
  }
  console.log(doDelete)
  function deletetask(id) {
    TaskDeleted(id);
    
    }
    function TaskDeleted(ID){
      console.log(ID)
      if (doDelete) {
        let newTasks = tasks.filter((t) => {
        return t.Id !== ID;
      });
      return setTasks(newTasks);
    }
    }
    
  //function hundleUpdate(){

  //}

  // hundle delete and update and done :

  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#e3f2fd",
          width: "700px",
          borderRadius: "15px",
          padding: "10px",
          boxShadow: "0 0 4px 2px #42a5f5",
          minHeight: "600px",
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#01579b",
            backgroundColor: "#b3e5fc",
            borderRadius: "15px",
            boxShadow: " 0 0 5px 1px",
            marginBottom: "40px",
          }}
        >
          TODO LIST
        </div>
        {tasks.map((t) => {
          return (
            <Task
              key={t.Id}
              title={t.title}
              detail={t.detail}
              onOpen={hundleOpen}
              onDelete = {()=>{deletetask(t.Id)}}
            ></Task>
            
          );
        })}
        <ConfirmeDelete ondelete = {deletetask} onclose = {handleClose} open = {open} doDelete = {()=>{hundleDoDelete(true)}}></ConfirmeDelete>
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Fab
            size="medium"
            color="info"
            aria-label="add"
            onClick={hundleAddTask}
          >
            <AddIcon />
          </Fab>
        </div>
      </Container>
    </>
  );
}
