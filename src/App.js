import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import {StoreContextProvider} from "./contexts/store-context";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Gallery from "./components/Galery/Gallery";
import OrderPage from "./components/OrderPage/OrderPage";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <StoreContextProvider>
                        <Navbar/>
                        <Route path='/store' component={Store}/>
                        <Route path='/cart' component={Cart}/>
                        <Route path='/gallery' component={Gallery}/>
                        <Route path='/orderPage' component={OrderPage}/>
                    </StoreContextProvider>
                </div>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;
