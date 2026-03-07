import "./style.css";
import { Container } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import { FormContext } from "./context";
export default function TodoList() {
  const localstorage = window.localStorage.getItem("tasks")
    ? JSON.parse(window.localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(localstorage);
  //const [done, setDone] = useState([]);
  //const [notyet, setNotyet] = useState([]);
  const [input, setInput] = useState("");
  const [colapse, setColapse] = useState(false);
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
      setColapse(false);
    }
  };
  // hundle delete and update and done :

  function deletetask(id) {
    let newTasks = tasks.filter((t) => {
      return t.Id !== id;
    });
    return setTasks(newTasks);
  }

  function hundleUpdate(id, form) {
    return setTasks(
      tasks.map((t) =>
        t.Id === id ? { ...t, title: form.newtitle, detail: form.detail } : t
      )
    );
  }

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
        <ToggleButtonGroup>
          <ToggleButton value="All tasks">All tasks</ToggleButton>
          <ToggleButton value="Finiched tasks">Finiched tasks</ToggleButton>
          <ToggleButton value="Unfiniched tasks">Unfiniched tasks</ToggleButton>
        </ToggleButtonGroup>
        <FormContext.Provider value={{ hundleUpdate }}>
          {tasks.map((t) => {
            return (
              <Task
                key={t.Id}
                id={t.Id}
                title={t.title}
                detail={t.detail}
                time={t.time}
                onDelete={() => {
                  deletetask(t.Id);
                }}
              ></Task>
            );
          })}
        </FormContext.Provider>
        <div className="input">
          <Collapse in={colapse}>
            <TextField
              id="outlined-basic"
              label="Task Title"
              variant="outlined"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onMouseLeave={() => {
                setColapse(false);
              }}
            />
          </Collapse>

          <Fab
            sx={{ marginTop: "10px" }}
            size="medium"
            color="info"
            aria-label="add"
            onClick={hundleAddTask}
            onMouseEnter={() => {
              setColapse(true);
            }}
          >
            <AddIcon />
          </Fab>
        </div>
      </Container>
    </>
  );
}
