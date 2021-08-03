import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import React from 'react'
import { useStyles } from "./AccountCard.style"

interface AccountCardProps {
    name: string,
    info: string,
    icon: string,
    iconRight: string, 
    bank: string
}

export const AccountCard : React.FC<AccountCardProps> = ({
    name, 
    info, 
    icon, 
    iconRight, 
    bank
}) => {
    const style = useStyles();
    return (
        <List>
            <ListItem button >
                <ListItemAvatar>
                    <img src={icon} alt="Icone avatar" className={style.avatarIcon}/>
                </ListItemAvatar>
                <ListItemText 
                primary={ 
                    <div className={style.primary}>{name}</div>
                }
                secondary={
                    <div className={style.secondary}>
                        <div>{info}</div>
                        <div>{bank}</div>
                    </div>        
                }/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" style={{ marginTop: "-12px"}}>
                        <img src={iconRight} alt="Icone"></img>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List >
    );
}