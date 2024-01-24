import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Grid, Box } from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {
  apiAddBook,
  apiAllBooks,
  apiDeleteALL,
} from "../../store/reducers/bookReducer/actions";

export const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    description: "",
    author: "",
    genre: "",
    ISBN: "",
    year: 0,
    counts: 0,
    pages: 0,
  });
  useEffect(() => {
    dispatch(apiAllBooks());
  }, []);
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleAddBook = () => {
    dispatch(apiAddBook(book));
  };
  return (
    <Grid container xs={12} item spacing={1} flexDirection={"row"}>
      <Grid container xs="auto" item flexDirection={"column"} rowSpacing={2}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic1"
            label="Title"
            variant="outlined"
            name="title"
            value={book.title}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic2"
            label="Description"
            variant="outlined"
            name="description"
            value={book.description}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic3"
            label="Author"
            variant="outlined"
            name="author"
            value={book.author}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic4"
            label="Genre"
            variant="outlined"
            name="genre"
            value={book.genre}
            onChange={(e) => handleChange(e)}
          />
          {/* <IconButton> */}
          <Button
            variant="outlined"
            color="primary"
            startIcon={<DeleteIcon />}
            onClick={(e) => dispatch(apiDeleteALL())}
          >
            DeleteAll
          </Button>
          {/* </IconButton> */}
        </Box>
      </Grid>
      <Grid container xs="auto" item flexDirection={"column"} rowSpacing={2}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic5"
            label="ISBN"
            variant="outlined"
            name="ISBN"
            value={book.ISBN}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic6"
            label="Year"
            variant="outlined"
            name="year"
            type="number"
            value={book.year}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic7"
            label="Counts"
            variant="outlined"
            name="counts"
            type="number"
            value={book.counts}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="outlined-basic8"
            label="Pages"
            variant="outlined"
            name="pages"
            type="number"
            value={book.pages}
            onChange={(e) => handleChange(e)}
          />
          <IconButton onClick={(e) => handleAddBook()}>
            <AddBoxTwoToneIcon style={{ fontSize: "48px" }} color="primary" />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};
