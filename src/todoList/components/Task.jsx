import "../style.css";
import Fab from "@mui/material/Fab";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Box } from "@mui/material";
import ConfirmeDelete from "./deleteConfirme";
import Grid from "@mui/material/Grid";
import { useState } from "react";



export default function Task({ title, detail, onDelete }) {


  const [open, setOpen] = useState(false);

  function handleClose(){
    setOpen(false)
  }
  function hundleOpen(){
    setOpen(true);
  }



  return (
    <>
      <Grid container spacing={2} className="task">
        <Grid size={8}>
          <div>
            <div className="Task-title">{title}</div>
            <div className="task-detail">{detail}</div>
          </div>
        </Grid>
        <Grid size={4}>
          <div className="action-btn">
            <Box sx={{ margin: "5px" }}>
              <Fab
                size="medium"
                color="error"
                aria-label="delete"
                sx={{ margin: "5px" }}
                onClick={(e) => {
                  e.currentTarget.blur();
                  hundleOpen();
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </Fab>
              <Fab
                size="medium"
                color="info"
                aria-label="edit"
                sx={{ margin: "5px" }}
              >
                <EditIcon />
              </Fab>
              <Fab
                size="medium"
                color="success"
                aria-label="done"
                sx={{ margin: "5px" }}
              >
                <CheckOutlinedIcon />
              </Fab>
            </Box>
          </div>
        </Grid>
        <ConfirmeDelete
        yesDelete = {()=>{onDelete()}}
          onclose={handleClose}
          open={open}
          
        ></ConfirmeDelete>
      </Grid>
    </>
  );
}
