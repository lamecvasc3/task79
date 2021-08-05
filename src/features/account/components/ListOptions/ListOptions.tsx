import React from "react";
import { List, ListItem, ListItemText} from "@material-ui/core";
import { useStyles } from "features/account/components/ListOptions/ListOptions.style";

export const ListOptions: React.FC = () => {
    const styles = useStyles()
    return (
        <List className={styles.root}>
            <ListItem button divider className={styles.listSection} >
                <ListItemText disableTypography>
                    Informações Pessoais
                </ListItemText>
            </ListItem>
            <ListItem button divider className={styles.listSection}>
                <ListItemText disableTypography>
                    Gerenciar Contas
                </ListItemText>
            </ListItem>
            <ListItem button divider className={styles.listSection}>
                <ListItemText disableTypography>
                    Gerenciar Cartões
                </ListItemText>
            </ListItem>
            <ListItem button divider className={styles.listSection}>
                <ListItemText disableTypography>
                    Ajuda
                </ListItemText>
            </ListItem>
            <ListItem button className={styles.listSection}>
                <ListItemText disableTypography>
                    Sair da Conta
                </ListItemText>
            </ListItem>
        </List>
    );
}