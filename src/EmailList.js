import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon1 from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/Settings";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon1} title='primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1a73e8'  />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="emailList__list">
                <EmailRow 
                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="This is a test"
                    time="10:33"
                    read={true}
                />
                <EmailRow 
                    title="Twitch"
                    subject="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa quidem. Optio alias culpa veniam eos, officia quidem debitis, natus ipsam rerum ducimus harum repudiandae esse exercitationem! Mollitia, sapiente consequuntur!"
                    description="This is a test2"
                    time="10:32"
                    read={false}
                />
            </div>
        </div>
    )
}

export default EmailList;
