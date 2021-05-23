import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";

const App = () => {

    return (
        <div className='app-wrapper'>
            <Navbar/>
            <Store/>
           
        </div>
    )
}

export default App;
