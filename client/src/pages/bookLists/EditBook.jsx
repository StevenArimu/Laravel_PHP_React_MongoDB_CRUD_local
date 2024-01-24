import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiSaveBook } from "../../store/reducers/bookReducer/actions";
import { TextField, Grid, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";

export const EditBook = (props) => {
  const { editingBook, setOpen } = props;
  const dispatch = useDispatch();
  // const editingBook = useSelector((store) => store.book.editingBook);

  const [title, setTitle] = useState(editingBook?.title || "");
  const [description, setDescription] = useState(
    editingBook?.description || ""
  );
  const [author, setAuthor] = useState(editingBook?.author || "");
  const [genre, setGenre] = useState(editingBook?.genre || "");
  const [ISBN, setISBN] = useState(editingBook?.ISBN || "");
  const [year, setYear] = useState(editingBook?.year || 0);
  const [counts, setCounts] = useState(editingBook?.counts || 0);
  const [pages, setPages] = useState(editingBook?.pages || 0);

  const handleSaveBook = () => {
    dispatch(
      apiSaveBook({
        id: editingBook._id,
        title: title,
        author: author,
        description: description,
        genre: genre,
        ISBN: ISBN,
        year: year,
        counts: counts,
        pages: pages,
      })
    );
    setOpen(null);
  };

  useEffect(() => {
    // Update state when editingBook changes
    setTitle(editingBook?.title || "");
    setAuthor(editingBook?.author || "");
    setDescription(editingBook?.description || "");
    setGenre(editingBook?.genre || "");
    setISBN(editingBook?.ISBN || "");
    setYear(editingBook?.year || 0);
    setCounts(editingBook?.counts || 0);
    setPages(editingBook?.pages || 0);
  }, [editingBook]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>EditBook</h1>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic2"
              label="Description"
              variant="outlined"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              id="outlined-basic3"
              label="Author"
              variant="outlined"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <TextField
              id="outlined-basic4"
              label="Genre"
              variant="outlined"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
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
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
            />
            <TextField
              id="outlined-basic6"
              label="Year"
              variant="outlined"
              name="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <TextField
              id="outlined-basic7"
              label="Counts"
              variant="outlined"
              name="counts"
              type="number"
              value={counts}
              onChange={(e) => setCounts(e.target.value)}
            />
            <TextField
              id="outlined-basic8"
              label="Pages"
              variant="outlined"
              name="pages"
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
            <IconButton onClick={(e) => handleSaveBook()}>
              <SaveIcon style={{ fontSize: "48px" }} color="primary" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
