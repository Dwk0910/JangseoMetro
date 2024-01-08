import jangseometro from './files/img/jangseometro.png';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const theme = createTheme({
   palette: {
     white: {main: '#FFFFFF'},
     gray: {main: '#5d5d5d'},
     maingreen: {main: '#5D6903'}
   }
  });

  return (
      <ThemeProvider theme={theme}>
        <Box sx={{flexGrow: 1}}>
          <AppBar position={"fixed"} color={"gray"}>
            <Toolbar variant={"dense"}>
              <IconButton edge={"start"} color={"white"} aria-label={"menu"} sx={{mr: 1}}>
                <MenuIcon/>
              </IconButton>
              <Avatar sx={{mr: 2, width: "30px", height: "30px"}} variant="rounded" src={jangseometro}></Avatar>
              <Typography variant={"h6"} color={"white.main"} component={"div"}>장서교통공사</Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
  );
}

export default App;