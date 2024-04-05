import './App.css';
import {Fragment} from "react";
import Banner from "../appBanner/Banner";
import Header from "../appHeader/Header";
import Home from "../appHome/Home";
import Footer from "../appFooter/Footer";

function App() {
    return (
        <Fragment>
            <Banner/>
            <Header/>
            <Home/>
            <Footer/>
        </Fragment>
    );
}

export default App;