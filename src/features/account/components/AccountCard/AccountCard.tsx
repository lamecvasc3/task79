import React from 'react'
import { 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    ListItemSecondaryAction, 
    IconButton, 
    Typography} 
from "@material-ui/core";
import { useStyles } from "./AccountCard.style"

interface AccountCardProps {
    name: string,
    info: string,
    icon: string,
    iconRight: string, 
    bank: string,
    height: string,
}

export const AccountCard : React.FC<AccountCardProps> = ({
    name, 
    info, 
    icon, 
    iconRight, 
    bank,
    height,
}) => {
    const style = useStyles();
    return (
        <List className={style.list}>
            <ListItem button>
                <ListItemAvatar>
                    <img src={icon} alt="Icone avatar" className={style.avatarIcon}/>
                </ListItemAvatar>
                <ListItemText 
                primary={ 
                    <Typography className={style.primary}>{name}</Typography>
                }
                secondary={
                    <Typography className={style.secondary}>
                        <div>{info}</div>
                        <div>{bank}</div>
                    </Typography>        
                }/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" style={{ marginTop: "-12px"}}>
                        <img src={iconRight} alt="Icone" height={height}></img>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List >
    );
}