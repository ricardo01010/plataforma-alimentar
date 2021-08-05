import NavebarComponent from "../../components/navebar";
import SearchBanner from "../../components/home-search"
import Image from 'react-bootstrap/Image';
import './home.css';
import { useSelector, useDispatch } from "react-redux";
function App(){
    return(
        <>
            <NavebarComponent/>
            <div className="bannerDiv">
                <SearchBanner/>
                
            </div>
            <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>teste
        </>
        
    )
    
}

export default App;