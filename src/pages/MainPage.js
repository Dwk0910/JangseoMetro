import { Container } from '@mui/material';

function MainPage() {
    return (
        <Container align={"center"}>
            <span style={{fontSize: "1.5rem", fontWeight: "bold"}}>장서교통공사 웹사이트에 오신 것을 환영합니다!</span><br/><br/>
            <span style={{fontSize: "1.1rem"}}>
                장서교통공사 웹사이트는 장서교통공사가 운영하는 지하철에 관한 소식들을 편하게 듣고,<br/>
                장서교통공사나 운영하는 역, 노선에 관해 자세한 정보를 얻을 수 있는 사이트입니다.<br/>
                저희 웹사이트에 방문해주셔서 감사합니다!
            </span>
        </Container>
    );
}

export default MainPage;