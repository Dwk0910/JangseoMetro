import Header from './../styles/Header';

import {Container, useMediaQuery} from '@mui/material';

function MapPage() {
    const matches = useMediaQuery('(min-width:900px)'); //반응형 메뉴 (미디어 가로크기 GET)

    if (matches) {
        return (
            <Container>
                <Header label={"노선도"}/>
                <img
                    src={"https://cdn.discordapp.com/attachments/1101905246797705269/1173242309148672020/DSL_METRO_SERVER.png?ex=65ad120c&is=659a9d0c&hm=1edb677190735d93e68461794f62d3eb9600893141d31c84692e5ae704abee26&"}
                    alt={"map"} width={"100%"}/>
            </Container>
        );
    } else {
        return (
            <Container>
                <Header label={"노선도"}/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img
                        src={"https://cdn.discordapp.com/attachments/1101905246797705269/1173242309148672020/DSL_METRO_SERVER.png?ex=65ad120c&is=659a9d0c&hm=1edb677190735d93e68461794f62d3eb9600893141d31c84692e5ae704abee26&"}
                        alt={"map"} width={"120%"}
                        style={{textAlign: "center"}}
                    />
                </div>
            </Container>
        );
    }
}

export default MapPage;