import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: "20px",
        },
        listSection: {
            textAlign: "center",
            fontSize: "12px",
            lineHeight: "14.06px",
            padding: "2vh 0",
            color: "#000",
        },
    }),
);
