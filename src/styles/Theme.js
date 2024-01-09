import { createTheme } from '@mui/material/styles';

function Theme() {
    return (createTheme({
        palette: {
            white: {main: '#FFFFFF'},
            gray: {main: '#5d5d5d'},
            maingreen: {main: '#5D6903'},
            red: {main: "#FF0000"}
        }
    }));
}

export default Theme;