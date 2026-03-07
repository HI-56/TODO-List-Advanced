import "../style.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context";

export default function UpdateTaskPopUp({ title, handleClose, open, taskId }) {
  const [form, setForm] = useState({
    newtitle: title,
    detail: "",
  });
  const { hundleUpdate } = useContext(FormContext);

  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={{zIndex:"100000"}}>
        <DialogTitle>Updating Task </DialogTitle>
        <DialogContent>
          <form id="subscription-form">
            <TextField sx={{width:"500px"}}
            multiline
              id="outlined-basic"
              label="Title"
              variant="outlined"
              type="text"
              value={form.newtitle}
              onChange={(e) => {
                setForm({ ...form, newtitle: e.target.value });
              }}
            />
            <TextField sx={{width:"500px" }}
            multiline
            minRows={3} 
            maxRows={8}
            fullWidth
              id="outlined-basic"
              label="Detail"
              variant="outlined"
              type="text"
              value={form.detail}
              onChange={(e) => {
                setForm({ ...form, detail: e.target.value });
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#e6ee9c",
              color: "white",
              borderRadius: "8px",
              width: "120px",
              marginRight:"50px"
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
              width: "120px",
              marginRight:"20px"
            }}
            onClick={() => {
              hundleUpdate(taskId, form);
              handleClose();
            }}
            form="subscription-form"
          >
            Update Task
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
