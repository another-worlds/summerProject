import React from "react"
import ReactDOM from "react-dom/client"

import Banner from "./components/Banner"
import Header from "./components/Header"
// import Content from "./components/Content"
import Footer from "./components/Footer"

import banner from "./banner.webp"
  
function App() {
    return (
        <div>
            <Banner/>
            <Header/>
            {/* <Content/> */}
            <Footer/>
        </div>
    )
}

root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App/>)