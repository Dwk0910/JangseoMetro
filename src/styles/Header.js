import {Container, Typography, useMediaQuery} from '@mui/material';

function Header(props) {
    const matches = useMediaQuery('(min-width:900px)'); //반응형 메뉴 (미디어 가로크기 GET)

    if (matches) {
        return (
            <Container>
                <div style={{borderBottom: "2px solid #5D6903", height: "50px"}}>
                    <Typography variant={"h4"} sx={{fontWeight: 'bold'}}>
                        {props.label}
                    </Typography>
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div style={{borderBottom: "1.5px solid #5D6903", height: "30px"}}>
                    <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                        {props.label}
                    </Typography>
                </div>
            </Container>
        );
    }
}

export default Header;