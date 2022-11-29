import * as React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Modal, Typography } from "@mui/material";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid grey",
  boxShadow: 24,
  background: "linear-gradient(#e5bdf6, #d8dede)",
  p: 4,
};

export default function PostForm() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createPost = async (e) => {
    e.preventDefault();
    const url = baseUrl + "/posts/";
    const postBody = {
      game: e.target.game.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status === 200) {
        console.log("this is the post message:", postBody.message);
        navigate("/records");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  return (
    <div className="submitRecordButton">
      <Button
        sx={{ fontFamily: "Handlee" }}
        onClick={handleOpen}
        variant="contained"
        color="secondary"
      >
        Submit a Record
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="postModal">
            <form onSubmit={createPost}>
              <div className="textField">
                <TextField
                  id="game"
                  label="The Game"
                  variant="outlined"
                  type="text"
                  margin="normal"
                  color="secondary"
                />
              </div>
              <div className="textField">
                <TextField
                  id="message"
                  label="Your Thoughts Here..."
                  variant="outlined"
                  type="text"
                  margin="normal"
                  color="secondary"
                />
              </div>
              <div className="modalButton">
                <Button
                  sx={{ fontFamily: "Handlee", mt: 2 }}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Put on Record
                </Button>
              </div>
              <Typography
                sx={{
                  fontFamily: "Handlee",
                  textAlign: "center",
                  mt: 2,
                  fontSize: 13,
                }}
                color="text.secondary"
              >
                If you don't see your record, refresh the page after you submit
                it!
              </Typography>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
