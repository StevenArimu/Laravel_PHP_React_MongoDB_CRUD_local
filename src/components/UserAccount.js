import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

export default function UserAccount() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div
      style={{
        height: "36px",
        // width: "200px",
        display: "flex",
        justifyContent: "right",
      }}
    >
      <Avatar
        sx={{ bgcolor: "#F2F2FF" }}
        style={{ height: "36px", width: "36px", marginRight: "24px" }}
        variant="rounded"
      >
        <Badge color="warning" variant="dot">
          <NotificationsIcon style={{ color: "6F6AF8", fontSize: "18px" }} />
        </Badge>
      </Avatar>
      <Button
        onClick={handleClick}
        style={{ textTransform: "initial", color: "#404756", display: "flex" }}
      >
        <Avatar style={{ width: "36px", height: "36px" }} />
        <p style={{ fontSize: "16px" }}>John Doe</p>
        <KeyboardArrowDownIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
