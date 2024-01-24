import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
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
import HomeIcon from "@mui/icons-material/Home";
import { useStickyBox } from "react-sticky-box";
// import "./index.css";
const SwaN_Sidebar = (props) => {
  const stickyRef = useStickyBox({ offsetTop: 0, offsetBottom: 0 });
  const { activeMenuItem, setActiveMenuItem } = props;
  const { collapseSidebar } = useProSidebar();
  const location = useLocation();
  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  return (
    <aside ref={stickyRef}>
      <Sidebar id="SwaN_Sidebar" style={{ position: "sticky", top: "0px" }}>
        <Menu ic="123123">
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
          <MenuItem
            icon={<HomeIcon />}
            active={activeMenuItem === "/dashboard"}
            component={<Link to="/dashboard" className="link" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<ReceiptRoundedIcon />}
            active={activeMenuItem === "/carousel"}
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
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>Profile</MenuItem>
            <MenuItem
              icon={<NotificationsRoundedIcon />}
              component={<Link to="/usersList" className="link" />}
            >
              UsersList
            </MenuItem>
          </SubMenu>
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
    </aside>
  );
};

export default SwaN_Sidebar;
