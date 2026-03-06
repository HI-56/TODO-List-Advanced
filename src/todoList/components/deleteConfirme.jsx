import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmeDelete({ onclose, open , yesDelete}) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onclose}
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
        <DialogActions sx={{gap:"70px", padding:"10px 20px"}}>
          <Button sx={{backgroundColor:"#90caf9", color : "white", borderRadius:"8px",width:"120px"}}
            autoFocus
            onClick={() => {
              onclose();
            }}
          >
            Cancel
          </Button>
          <Button sx={{backgroundColor:"#d50000", color : "white", borderRadius:"8px" ,width:"120px"}}
            onClick={() => {
              yesDelete();
              onclose;
            }}
          >
            Yes Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
