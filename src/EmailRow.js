import React from 'react';
import { IconButton, Checkbox } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

import "./EmailRow.css";
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time, read }) {
    const history = useHistory();
    return (
        <div onClick={()=> history.push("/mail")} className="emailRow"
            style={{
                backgroundColor: read && 'rgba(242, 245, 245, 0.8)',
            }}
        >
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <div className="emailRow__title">
                {title}
            </div>

            <div className="emailRow__message">
                <h4 style={{
                    fontWeight: read && 'normal',
                }}>{subject}{" "}
                    <span className="emailRow__description"
                        style={{
                            fontWeight: read && 'normal',
                        }}>{description}</span>
                </h4>
            </div>

            <div className="emailRow__time">{time}</div>
        </div>
    )
}

export default EmailRow;
