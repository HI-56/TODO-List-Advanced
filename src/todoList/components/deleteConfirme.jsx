import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmeDelete({ onclose, ondelete, open , doDelete }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={open}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this task ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              onclose(false);
            }}
          >
            Cancel Delete
          </Button>
          <Button
            onClick={() => {
              ondelete;
              doDelete();
            }}
          >
            Yes Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
