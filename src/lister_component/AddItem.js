import { useState } from "react"

const AddItem = ({addNewProduct})=>{


    const[name,setName]=useState("");
    const[price,setPrice]=useState("");


    function handleSubmit(e){

        e.preventDefault();
        // alert(name)
        // alert(price)

        //validation

        if(name ===""||price===""){
            alert("All fields are required")
        }
        else{
            const id = Math.random(1,100000000)+Date.now()//generate a random

            const item ={
                name:name,
                price:price,
                id:id
            }
            addNewProduct(item)

            //generate a randome number to server as the id

        }
        
        //form an object with it and send it to a functuin that will insert into te
    }

    return(

       <div className="row">

            <div className="col-md-8 offset-md-2">
                <form onSubmit={handleSubmit}>

                        <input type="text" placeholder="product name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                        <input type="number" placeholder="product price" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
                        <button>Add Items to list</button>
                </form>

            </div>

       </div>
    )
}
export default AddItem
