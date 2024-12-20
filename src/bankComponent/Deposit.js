import React, { useState } from "react";


const Deposit = ({bal,xyz})=>{

    const[amount,setAmount]=useState("") // this state will track whatever is type in dep amount


    function handleChange(e){
        console.log(e.target.value)
        setAmount(e.target.value)
    }
    return(

        <div className="row">
            <div className="col">
            

                <input type="number" placeholder="deposit amount" value={amount} onChange={handleChange}/>
                <button className="btn btn-info" onClick={function(){xyz(Number(amount))}}>Deposit</button>
                <h2>Your current balance is <strong>{bal}</strong></h2>
            </div>
        </div>
    )

}
export default Deposit