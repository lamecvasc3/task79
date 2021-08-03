import { createStyles, List, ListItem, ListItemText, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
    },
    listSection: {
      textAlign: "center",
      fontSize: "12px",
      lineHeight: "14.06px",
      padding: "2vh 0",
    },
  }),
);

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