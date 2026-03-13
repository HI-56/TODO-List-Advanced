import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
export default function ToastPopup({ open, hundleClose, msg ,severity }) {
  return (
    <div style={{backgroundColor:"white"}}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={hundleClose}
      >
<Alert
    severity={severity}
    variant="filled"
    sx={{ width: '100%' }}
  >
    {msg}
  </Alert>
      </Snackbar>
    </div>
  );
}
