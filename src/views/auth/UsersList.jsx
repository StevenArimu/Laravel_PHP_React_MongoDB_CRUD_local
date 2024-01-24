import * as React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";

import EditUser from "./EditUser";
import {
  apiDelUser,
  apiGetUsers,
} from "../../store/reducers/authReducer/actions";

/////Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UsersList() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(0);
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [eMail, setEMail] = useState("");
  const [location, setLocation] = useState("");
  const users = useSelector((store) => store.auth.users);

  useEffect(() => {
    dispatch(apiGetUsers());
  }, []);
  const handleAddDel = (num) => {
    const delUser = users.filter((user, index) => index === num)[0];
    dispatch(apiDelUser(delUser.eMail));
    setIsEditing(0);
  };

  const handleEditUser = (num) => {
    const editingData = users.filter((user, index) => index === num)[0];
    setFName(editingData.firstName);
    setLName(editingData.lastName);
    setEMail(editingData.eMail);
    setLocation(editingData.location);
    setIsEditing(num);
  };
  return (
    <div
      className="usersTable"
      style={{
        display: "flex",
        margin: "16px",
        border: "5px solid gray",
        borderRadius: "16px",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          // margin: "20px",
          // border: "5px solid gray",
          // borderRadius: "16px",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">E-Mail</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Other</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{user.firstName}</TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="right">{user.eMail}</TableCell>
              <TableCell align="right">{user.location}</TableCell>
              <TableCell align="right">
                <IconButton onClick={(e) => handleEditUser(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={(e) => handleAddDel(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditUser
        isEditing={isEditing}
        firstName={firstName}
        eMail={eMail}
        location={location}
        lastName={lastName}
        setFName={setFName}
        setLName={setLName}
        setLocation={setLocation}
        setEMail={setEMail}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}
