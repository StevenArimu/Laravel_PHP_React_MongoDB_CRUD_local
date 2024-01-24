import * as React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import IconButton from "@mui/material/IconButton";
//Custom Components
import EditUser from "./EditUser";
import { DataFilter } from "./DataFilter";
import { apiDelUser } from "../../../store/reducers/authReducer/actions";
import { apiUsers } from "../../../store/reducers/authReducer/actions";

//Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function UsersList() {
  const users = useSelector((store) => store.auth.users);
  const editRef = useRef(null);
  const addRef = useRef(null);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(0);
  const [updateId, setUpdateId] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [confirm, setConfirm] = useState("");
  const [filterData, setFilterdata] = useState(users);
  const [open, setOpen] = useState(null);

  // useEffect(() => {
  //   dispatch(apiUsers());
  // }, []);
  // useEffect(() => {
  //   console.log(users.length);
  //   // setUserCnt(users.length);
  // }, [users]);

  //Table Sorting
  const [order, setOrder] = useState("asc");
  const [sortField, setSortField] = useState("");
  const handleSortingChange = (sortKey) => {
    const sortOrder = sortKey === sortField && order === "asc" ? "desc" : "asc";
    setSortField(sortKey);
    setOrder(sortOrder);
    handleSorting(sortKey, sortOrder);
  };
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...users].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setFilterdata(sorted);
    }
  };
  //Page Loading
  useEffect(() => {
    setFilterdata(users);
  }, [users]);
  const handleUserDel = (num) => {
    const delUser = filterData
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .filter((user, index) => index === num)[0];
    const id = delUser._id;
    dispatch(apiDelUser({ id: id }));
    setIsEditing(0);
  };

  const handleEditUser = (num) => {
    if (editRef.current) {
      editRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    const editingData = filterData
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .filter((user, index) => user._id === num)[0];
    setUpdateId(editingData._id);
    setFName(editingData.f_name);
    setLName(editingData.l_name);
    setEMail(editingData.email);
    setLocation(editingData.location);
    setPassword("");
    setConfirm("");
    setIsEditing(num);
  };
  //TablePagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };

  return (
    <div
      className="usersTable"
      style={{
        // display: "flex",
        margin: "16px",
      }}
    >
      <DataFilter filterData={filterData} setFilterdata={setFilterdata} />
      <EditUser
        addRef={addRef}
        editRef={editRef}
        isEditing={isEditing}
        eMail={eMail}
        firstName={firstName}
        lastName={lastName}
        location={location}
        updateId={updateId}
        password={password}
        confirm={confirm}
        filterData={filterData}
        setEMail={setEMail}
        setFName={setFName}
        setLName={setLName}
        setOpen={setOpen}
        setPassword={setPassword}
        setConfirm={setConfirm}
        setLocation={setLocation}
        setIsEditing={setIsEditing}
      />
      <Table
        sx={{
          minWidth: 650,
          // margin: "20px",
          // border: "5px solid gray",
          // borderRadius: "16px",
        }}
        aria-label="simple table"
      >
        <TableHead style={{ backgroundColor: "#1F1F1F" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>No</TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              First Name
              <IconButton
                name="firstName"
                onClick={(e) => handleSortingChange("f_name")}
              >
                <FilterListIcon style={{ color: "white" }} />
              </IconButton>
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Last Name
              <IconButton onClick={(e) => handleSortingChange("l_name")}>
                <FilterListIcon style={{ color: "white" }} />
              </IconButton>
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              E-Mail
              <IconButton onClick={(e) => handleSortingChange("email")}>
                <FilterListIcon style={{ color: "white" }} />
              </IconButton>
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Location
              <IconButton onClick={(e) => handleSortingChange("location")}>
                <FilterListIcon style={{ color: "white" }} />
              </IconButton>
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              password
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Actions
              {/* <IconButton sx={{ color: "white" }}>
                <FilterListIcon />
              </IconButton> */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData ? (
            <>
              {filterData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow
                    key={user._id}
                    ref={addRef}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{user.f_name}</TableCell>
                    <TableCell align="right">{user.l_name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.location}</TableCell>
                    <TableCell align="right">User Password</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleEditUser(user._id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={(e) => handleUserDel(user._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </>
          ) : null}
          <TableRow>
            <TablePagination
              // component="div"
              count={filterData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableBody>
        {/* <Pagination count={10} color="primary" /> */}
      </Table>
    </div>
  );
}
