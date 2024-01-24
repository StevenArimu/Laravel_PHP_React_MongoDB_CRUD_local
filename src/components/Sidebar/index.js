import React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import "./index.css";
const MobileSidebar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar id="MobileSidebar">
      <Menu style={{ position: "fixed" }}>
        <MenuItem
          className="menu1"
          icon={
            <MenuRoundedIcon
              onClick={() => {
                collapseSidebar();
              }}
            />
          }
          component={<Link to="/" className="link" />}
        >
          <h2>QUICKPAY</h2>
        </MenuItem>
        <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
          <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
          <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
          <MenuItem icon={<NotificationsRoundedIcon />}>Notifications</MenuItem>
          <MenuItem
            icon={<NotificationsRoundedIcon />}
            component={<Link to="/usersList" className="link" />}
          >
            UsersList
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
        <MenuItem
          icon={<ReceiptRoundedIcon />}
          component={<Link to="/carousel" className="link" />}
        >
          Carousel
        </MenuItem>
        <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
          <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
          <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
        </SubMenu>
        <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
          <MenuItem icon={<AccountBalanceRoundedIcon />}>
            Current Wallet
          </MenuItem>
          <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
        </SubMenu>
        <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
        <MenuItem
          icon={<LogoutRoundedIcon />}
          component={<Link to="/signIn" className="link" />}
        >
          SignIn
        </MenuItem>
        <MenuItem
          icon={<LogoutRoundedIcon />}
          component={<Link to="/signUp" className="link" />}
        >
          SignUp
        </MenuItem>
        <MenuItem icon={<LogoutRoundedIcon />}> SignOut </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default MobileSidebar;
