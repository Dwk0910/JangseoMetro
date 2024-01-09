// Local Import
import GetPage from './pages/GetPage';

// Other Import
import {
    useMediaQuery,
    Toolbar,
    Container,
    Grid,
    List, ListItem, ListItemButton, ListItemText,
    BottomNavigation, BottomNavigationAction,
    Paper
} from '@mui/material';

import { Home, Map, Campaign } from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
    /*
    MAIN PAGE : pid = NULL (메뉴는 1)
    노선도 : pid = 2
    공지 : pid = 3
    */

    const OriginalUrl = window.location.href;
    const url = new URL(OriginalUrl).searchParams;
    let page = url.get("pid");

    if (page == null) page = 1;

    const matches = useMediaQuery('(min-width:900px)'); //반응형 메뉴 (미디어 가로크기 GET)
    const theme = createTheme({
      palette: {
        white: {main: '#FFFFFF'},
        gray: {main: '#5d5d5d'},
        maingreen: {main: '#5D6903'}
      }
    });

    const menuItems = [{
        id: 1,
        title: 'HOME',
        icon : Home
    },{
        id: 2,
        title: '노선도',
        icon: Map
    },{
        id: 3,
        title: '공지',
        icon: Campaign
    }];

    const full = (
        <Container maxWidth={"xl"} fixed>
            <ThemeProvider theme={theme}>
                <Toolbar>
                    <img src={"https://cdn.discordapp.com/attachments/753612337461854302/1194180668683468801/jangseometro_full.png?ex=65af6a6a&is=659cf56a&hm=74006274ebf71367d89ce295c573af177e332eb6d27adc44c462f7c429f6c6b1&"} alt={"logo"} width={"300px"} style={{cursor: "pointer"}} onClick={() => {
                        window.location.href = '.';
                    }}/>
                </Toolbar>
                <Grid container>
                    <Grid item xs={3}>
                        <List>{
                            menuItems.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemButton selected={Number(page) === item.id} onClick={() => {
                                        window.location.href = (item.id !== 1) ? `?pid=${item.id}` : ".";
                                    }}>
                                        <item.icon sx={{mr: 2}}/>
                                        <ListItemText primary={item.title}/>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <GetPage id={page}/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    );

    const small = (
        <Container maxWidth={"xl"} fixed>
            <ThemeProvider theme={theme}>
                <Toolbar style={{justifyContent: "center"}}>
                    <img src={"https://cdn.discordapp.com/attachments/753612337461854302/1194180668683468801/jangseometro_full.png?ex=65af6a6a&is=659cf56a&hm=74006274ebf71367d89ce295c573af177e332eb6d27adc44c462f7c429f6c6b1&"} alt={"logo"} width={"300px"} style={{cursor: "pointer"}} onClick={() => {
                        window.location.href = '.';
                    }}/>
                </Toolbar>
                <Container>
                    <GetPage id={page}/>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                        <BottomNavigation
                            showLabels
                            value={Number(page) - 1}
                            onChange={(event, newValue) => {
                                window.location.href = (newValue + 1 !== 1) ? `?pid=${newValue + 1}` : ".";
                            }}
                        >
                            {menuItems.map((item) => (
                                <BottomNavigationAction key={item.id} icon={<item.icon/>} label={item.title}/>
                            ))}
                        </BottomNavigation>
                    </Paper>
                </Container>
            </ThemeProvider>
        </Container>
    );

    return ((matches) ? full : small);
}

export default App;