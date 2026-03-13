import "./style.css";
import { Container } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import { FormContext } from "./context";
import ToastPopup from "./components/puppupToast";

export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [platform, setPlatform] = useState("All tasks");
  const [toggle, setToggle] = useState("");
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
          done: false,
        },
      ]);
      setInput("");
      setColapse(false);
      setToast(true);
    }
  };
  // hundle delete and update and done :

  function deletetask(id) {
    let newTasks = tasks.filter((t) => {
      return t.Id !== id;
    });
    setMsg("Task deleted successfully 🗑️");
    setSeverity("error");
    return setTasks(newTasks), setToast(true);
  }

  function hundleUpdate(id, form) {
    return setTasks(
      tasks.map((t) =>
        t.Id === id
          ? { ...t, title: form.newtitle, detail: form.detail, done: false }
          : t
      ),
      setMsg("Task updated successfully ✏️"),
      setSeverity("info"),
      setToast(true)
    );
  }

  function hundleDone(id) {
    let updatedTasks = tasks.map((t) =>
      t.Id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);
    setMsg("Task is Done");
    setSeverity("success");
    setToast(true);
  }
  const done = tasks.filter((t) => t.done);
  const notyet = tasks.filter((t) => !t.done);

  // hundle delete and update and done :
  // hundle popUp msgs for each add , delete,update :
  const [toast, setToast] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("");
  function hundleToastClose() {
    setToast(false);
  }

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <ToggleButtonGroup
          color="primary"
          value={platform}
          exclusive
          onChange={(e, newValue) => setPlatform(newValue)}
          aria-label="Platform"
        >
          <ToggleButton value="All tasks" onClick={() => setToggle("all")}>
            All tasks
          </ToggleButton>
          <ToggleButton
            value="Finiched tasks"
            onClick={() => setToggle("finiched")}
          >
            Finiched tasks
          </ToggleButton>
          <ToggleButton
            value="Unfiniched tasks"
            onClick={() => setToggle("Unfiniched")}
          >
            Unfiniched tasks
          </ToggleButton>
        </ToggleButtonGroup>
        <FormContext.Provider value={{ hundleUpdate, tasks }}>
          {(toggle === "all"
            ? tasks
            : toggle === "finiched"
            ? done
            : toggle === "Unfiniched"
            ? notyet
            : tasks
          ).map((t) => {
            return (
              <Task
                key={t.Id}
                id={t.Id}
                title={t.title}
                detail={t.detail}
                time={t.time}
                done={t.done}
                onDelete={() => {
                  deletetask(t.Id);
                }}
                onDone={() => {
                  hundleDone(t.Id);
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
            onClick={() => {
              hundleAddTask();
              setMsg("Task added successfully ✅");
              setSeverity("success");
            }}
            onMouseEnter={() => {
              setColapse(true);
            }}
          >
            <AddIcon />
          </Fab>
          <ToastPopup
            open={toast}
            hundleClose={() => hundleToastClose()}
            msg={msg}
            severity={severity}
          ></ToastPopup>
        </div>
      </Container>
    </>
  );
}
