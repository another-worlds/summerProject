import React from "react"
import ReactDOM from "react-dom/client"

import Banner from "./components/Banner"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
  
function App() {
    return (
        <div id="root">
            <Banner/>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App/>)