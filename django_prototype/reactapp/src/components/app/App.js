import React from "react"
import ReactDOM from "react-dom/client"

import Banner from "../Banner"
import Header from "../Header"
import Content from "../Content"
import Footer from "../Footer"
  
export default function App() {
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