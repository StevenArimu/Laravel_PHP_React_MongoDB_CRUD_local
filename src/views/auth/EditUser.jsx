import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apidAddUser,
  apiSaveUser,
} from "../../store/reducers/authReducer/actions";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const EditUser = (props) => {
  const {
    isEditing,
    setIsEditing,
    location,
    lastName,
    firstName,
    eMail,
    setFName,
    setLName,
    setEMail,
    setLocation,
  } = props;
  const users = useSelector((store) => store.auth.users);

  const dispatch = useDispatch();

  const handleAddUser = () => {
    const addData = { firstName, lastName, eMail, location };
    dispatch(apidAddUser(addData));
  };
  const handleSaveUser = () => {
    const saveUserID = users.filter((user, index) => index === isEditing)[0]
      ._id;
    console.log(saveUserID);
    dispatch(
      apiSaveUser({
        saveData: { firstName, lastName, eMail, location },
        saveUserID,
      })
    );
    setIsEditing(0);
  };
  return (
    <div
      className="edituser"
      style={{ paddingTop: "20px", display: "flex", flexDirection: "column" }}
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        style={{ margin: "5px" }}
        value={firstName}
        onChange={(e) => setFName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        style={{ margin: "5px" }}
        variant="outlined"
        value={lastName}
        onChange={(e) => setLName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        style={{ margin: "5px" }}
        variant="outlined"
        value={eMail}
        onChange={(e) => setEMail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Location"
        style={{ margin: "5px" }}
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
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
