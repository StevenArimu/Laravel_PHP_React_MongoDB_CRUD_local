import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiAddUser,
  apiUpdateUser,
  // AddUser,
} from "../../../store/reducers/authReducer/actions";
import Grid from "@mui/system/Unstable_Grid/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const EditUser = (props) => {
  const {
    addRef,
    editRef,
    setIsEditing,
    password,
    confirm,
    setOpen,
    isEditing,
    lastName,
    firstName,
    eMail,
    location,
    setLocation,
    updateId,
    setFName,
    setLName,
    setEMail,
    setPassword,
    setConfirm,
  } = props;
  const users = useSelector((store) => store.auth.users);

  const dispatch = useDispatch();

  const handleAddUser = () => {
    if (addRef.current) {
      addRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const addData = {
      f_name: firstName,
      l_name: lastName,
      email: eMail,
      location: location,
      password: password,
      password_confirmation: confirm,
    };
    dispatch(apiAddUser(addData));
  };
  const handleSaveUser = () => {
    dispatch(
      apiUpdateUser({
        f_name: firstName,
        l_name: lastName,
        email: eMail,
        location: location,
        password: password,
        password_confirmation: confirm,
        updateId,
      })
    );
    // setFName("");
    // setLName("");
    // setEMail("");
    // setLocation("");
    // setConfirm("");
    // setPassword("");
    setIsEditing(0);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const addData = {
        firstName,
        lastName,
        eMail,
        password,
      };
      dispatch(apiAddUser(addData));
      if (addRef.current) {
        addRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div
      ref={editRef}
      className="edituser"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Grid container flexDirection="row" xs={12}>
        <TextField
          id="outlined-basic1"
          label="First Name"
          variant="outlined"
          fullWidth
          style={{ margin: "5px" }}
          value={firstName}
          onKeyUp={(e) => handleKeyPress(e)}
          onChange={(e) => setFName(e.target.value)}
        />
        <TextField
          id="outlined-basic2"
          label="Last Name"
          fullWidth
          style={{ margin: "5px" }}
          variant="outlined"
          value={lastName}
          onKeyUp={(e) => handleKeyPress(e)}
          onChange={(e) => setLName(e.target.value)}
        />
        <TextField
          id="outlined-basic3"
          label="E-mail"
          fullWidth
          style={{ margin: "5px" }}
          variant="outlined"
          value={eMail}
          onKeyUp={(e) => handleKeyPress(e)}
          onChange={(e) => setEMail(e.target.value)}
        />
      </Grid>
      <Grid container flexDirection="row" xs={12}>
        <TextField
          id="outlined-basic4"
          label="Location"
          fullWidth
          style={{ margin: "5px" }}
          variant="outlined"
          value={location}
          onKeyUp={(e) => handleKeyPress(e)}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          id="outlined-basic5"
          label="password"
          type="password"
          fullWidth
          style={{ margin: "5px" }}
          variant="outlined"
          value={password}
          onKeyUp={(e) => handleKeyPress(e)}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic6"
          label="confirm"
          fullWidth
          type="password"
          style={{ margin: "5px" }}
          variant="outlined"
          value={confirm}
          onKeyUp={(e) => handleKeyPress(e)}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </Grid>
      <IconButton onClick={handleSaveUser}>
        <SaveAsIcon style={{ fontSize: "32px" }} />
      </IconButton>
      <IconButton onClick={handleAddUser}>
        <GroupAddIcon style={{ fontSize: "32px" }} />
      </IconButton>
    </div>
  );
};

export default EditUser;
