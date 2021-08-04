import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme"

export const useStyles = makeStyles({
  title: {
    marginTop: "10px",
    fontWeight: 700,
    fontSize: 20,
    marginBottom: "1px",

    "& + #pd-subtitle": {
      marginTop: 24,
    },
    "& + #pd-description": {
      marginTop: 8,
    },
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",

    "& + #pd-description": {
      marginTop: 8,
    },
  },
  description: {
    color: textColors.gray,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "15.6px",
  },
});