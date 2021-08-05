import NavebarComponent from "../../components/navebar";
import Image from 'react-bootstrap/Image';
import './home.css';
import { useSelector, useDispatch } from "react-redux";
function App(){
    return(
        <>
            <NavebarComponent/>
            <div className="bannerDiv">
            </div>
        </>
        
    )
    
}

export default App;