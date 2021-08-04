import { Box, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { theme } from '_config/theme';
import { useStyle } from "./App.style";
import { AccountSettings } from 'features/account/pages/AccountSettings'

export const App: React.FC = () => {
    const style = useStyle();
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Box className={style.app}>
                <AccountSettings />
            </Box>
        </MuiThemeProvider>
    );
}