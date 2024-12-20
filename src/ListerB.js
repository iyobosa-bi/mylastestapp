
import Header from "./lister_componentb/Header.js";
import AddItem from "./lister_componentb/AddItem";
import Content from "./lister_componentb/Content.js";
import Footer from "./lister_componentb/Footer.js";
import {useState} from "react";


//this will not use prop drilling
const ListerB = ()=>{

        

    return(
            <div className="container">
                <h1>ListerB:context api</h1>
                <Header />
                <AddItem />
                <Content />
                <Footer/>
            </div>
       
    )
}
export default ListerB