import React from "react"
import Header from "./lister_component/Header.js";
import AddItem from "./lister_component/AddItem";
import Content from "./lister_component/Content.js";
import Footer from "./lister_component/Footer.js";
import {useState} from "react";

const Lister = ()=>{

        const initialList = [{name:"Greek yogurt parfait",price:"250000",id:100},{name:"Iphon16",price:"2500000",id:200},{name:"Mac laptop",price:"5500000",id:300},{name:"Peppersoup",price:"10000",id:400}];
        const[list,setList]=useState(initialList); 


        //this function receive product and add it to the list.
       function addNewProduct(product){
            setList([product,...list]);
        }

        //a function that accept id of product to delete and then delete

        function deleteItem(id){

            //filter the current state and remove products and filter out product that has the id that was passed
            const filteredProduct = list.filter(function(li){
                return li.id!==id;
            }) 
            setList(filteredProduct)

            console.log(filteredProduct)
        }

    return(
            <div className="container">
                <Header lists={list}/>
                <AddItem addNewProduct={addNewProduct}/>
                <Content lists={list} deleteItem={deleteItem}/>
                <Footer/>
            </div>
       
    )
}
export default Lister