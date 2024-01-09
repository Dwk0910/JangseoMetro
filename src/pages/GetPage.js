import MainPage from './MainPage';
import MapPage from './MapPage';

function GetPage(props) {
    switch (Number(props.id)) {
        case 1 : return (<MainPage/>);
        case 2 : return (<MapPage/>);
        default : console.log("ERROR at GetPage.js");
    }
}

export default GetPage;