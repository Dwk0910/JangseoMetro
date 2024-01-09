import Theme from './../styles/Theme';

import {
    Container,
    useMediaQuery,
    Paper,
    Typography,
    Grid
} from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';

function MainPage() {
    const matches = useMediaQuery('(min-width:900px)'); //반응형 메뉴 (미디어 가로크기 GET)

    return (
        <ThemeProvider theme={<Theme/>}>
            <Container align={"center"}>
                <img
                    alt={"banner"}
                    src={"https://cdn.discordapp.com/attachments/753612337461854302/1194246475664871463/-_-001_6.png?ex=65afa7b3&is=659d32b3&hm=fd6a90ece22852fbde9e3b3d090efd8a07772aae504996f3eb6aec81f6b30923&"}
                    width={"100%"}
                /><br/><br/>
                <Paper style={{textAlign: "left", padding: "1%", cursor: "pointer"}}>
                    <Grid container>
                        <Grid xs={2}><Typography color={"red"} style={{textAlign: "center"}}>긴급공지</Typography></Grid>
                        <Grid xs={10}><Typography sx={{ml: 2}}>[긴급공지 이름]</Typography></Grid>
                    </Grid>
                </Paper>
                <br/><br/>
                <span style={{fontSize: "1.5rem", fontWeight: "bold"}}>장서교통공사 웹사이트에{(!matches) ? <br/> : ""} 오신 것을 환영합니다!</span><br/><br/>
                <span style={{fontSize: "1rem"}}>
                    장서교통공사 웹사이트는 장서교통공사가 운영하는 지하철에 관한 소식들을 편하게 듣고, {(matches) ? <br/> : ""}
                    장서교통공사나 운영하는 역, 노선에 관해 자세한 정보를 얻을 수 있는 사이트입니다. {(matches) ? <br/> : ""}
                    저희 웹사이트에 방문해주셔서 감사합니다!
                </span>
            </Container>
        </ThemeProvider>
    );
}

export default MainPage;