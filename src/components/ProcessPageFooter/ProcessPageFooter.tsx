import React from "react";

import { Box } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Button } from "../Button"
import { returnLabel } from "../../constants/buttons/labels"
import { useStyles } from "./ProcessPageFooter.style";

interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const ProcessPageFooter: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const styles = useStyles();

  const onPreviousButtonClick = () => {
    console.log("Clicou em retornar")
  }

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<KeyboardArrowLeft color="secondary" />}
        onClick={onPreviousButtonClick}
      >
        {returnLabel}
      </Button>
      {primaryButton}
    </Box>
  );
};
