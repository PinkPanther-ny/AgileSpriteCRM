import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


export function BooleanPrompt(props) {
    const { title, onClose, open } = props;

    const flexContainer = {
        display: "flex",
        flexDirection: "row",
        padding: 0
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <List sx={flexContainer}>

                <ListItem button onClick={() => handleListItemClick(0)}>
                    <ListItemAvatar>

                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <CheckCircleIcon />
                        </Avatar>

                    </ListItemAvatar>
                    <ListItemText primary={"Yes"} />
                </ListItem>


                <ListItem button onClick={() => handleListItemClick(1)}>
                    <ListItemAvatar>

                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <CancelIcon />
                        </Avatar>

                    </ListItemAvatar>
                    <ListItemText primary={"Cancel"} />
                </ListItem>


            </List>
        </Dialog>
    );
}

BooleanPrompt.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};