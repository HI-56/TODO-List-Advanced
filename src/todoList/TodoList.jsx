import "./style.css"
import { Container } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task";

export default function TodoList() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#e3f2fd",
          width: "700px",
          borderRadius: "15px",
          padding: "10px",
          boxShadow:"0 0 4px 2px #42a5f5"
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
            marginBottom:"40px"
          }}
        >
          TODO LIST
        </div>
        <Task task = "loking up to see sky" title="sky"></Task>
        <div className="input" >
          <input type="text" />
          <Fab size="medium" color="info" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </Container>
    </>
  );
}
