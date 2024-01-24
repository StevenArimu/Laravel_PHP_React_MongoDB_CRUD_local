import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
//actions API
import {
  apiBookDelete,
  editBook,
} from "../../store/reducers/bookReducer/actions";
import { AddBook } from "./AddBook";
import { EditBook } from "./EditBook";
const BookLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector((store) => store.book.lists);
  const editingBook = useSelector((store) => store.book.editingBook);
  //Table Accordion
  const [open, setOpen] = useState(-1);
  const handleBookDelete = (num) => {
    const deleteBook = lists.filter((list, index) => num === list._id)[0];
    dispatch(apiBookDelete(deleteBook._id));
  };
  const handleBookEdit = (num) => {
    const result = lists.filter((list, index) => num === list._id)[0];
    dispatch(editBook(result));
    setOpen(num);
  };
  return (
    <div style={{ margin: "20px" }}>
      <AddBook />
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
            <TableCell align="center" style={{ color: "white" }}>
              Title
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              author
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              Genre
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              ISBN
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              Description
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              Year
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              counts
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              pages
            </TableCell>
            <TableCell align="center" style={{ color: "white" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists?.map((data, index) => {
            return (
              <React.Fragment key={data._id}>
                <TableRow>
                  <TableCell style={{ width: "20px" }}>{index}</TableCell>
                  <TableCell align="center">{data?.title}</TableCell>
                  <TableCell align="center">{data?.author}</TableCell>
                  <TableCell align="center">{data?.genre}</TableCell>
                  <TableCell align="center">{data?.ISBN}</TableCell>
                  <TableCell align="center">{data?.description}</TableCell>
                  <TableCell align="center">{data?.year}</TableCell>
                  <TableCell align="center">{data?.counts}</TableCell>
                  <TableCell align="center">{data?.pages}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={(e) => handleBookEdit(data._id)}>
                      <EditNoteTwoToneIcon
                        color="primary"
                        style={{ fontSize: "40px" }}
                      />
                    </IconButton>
                    <IconButton onClick={(e) => handleBookDelete(data._id)}>
                      <DeleteIcon
                        color="primary"
                        style={{ fontSize: "40px" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={12}
                  >
                    <Collapse
                      in={open === data._id}
                      timeout="auto"
                      unmountOnExit
                    >
                      <EditBook
                        editingBook={editingBook}
                        open={open}
                        setOpen={setOpen}
                      />
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
      <EditBook editingBook={editingBook} setOpen={setOpen} />
      {/* {editingBook && <EditBook />} */}
    </div>
  );
};

export default BookLists;
