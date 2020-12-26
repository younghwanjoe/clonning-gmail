import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon></MenuIcon>
                </IconButton>
                {/* <img src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png" alt=""/> */}
                <img src="https://i.ibb.co/yg32T4k/2020-12-26-030741.jpg" alt="2020-12-26-030741" border="0"/>
            </div>
            <div className="header__middle">
                <SearchIcon></SearchIcon>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header;