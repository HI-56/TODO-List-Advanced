import "../style.css";
import Fab from "@mui/material/Fab";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Box } from "@mui/material";
export default function Task({ task, title }) {
  return (
    <>
      <div className="task">
        <div>
          <div className="Task-title">{title}</div>
          <div className="task-detail">{task}</div>
        </div>
        <div className="action-btn">
          <Box sx={{ margin: "5px" }}>
            <Fab
              size="medium"
              color="error"
              aria-label="delete"
              sx={{ margin: "5px" }}
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
      </div>
    </>
  );
}
