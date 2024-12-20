import React, { useState } from "react";


const Withdraw = ({bal,abc})=>{


        const[amount,setAmount]=useState(0);
        function updateAmount(e){
                setAmount(e.target.value);
        }

        function handleWithdraw(){

            if(amount === ""|| amount===0){

                    alert("How much are you withdrawing")
            }
            else{
                abc(amount)
            }

        }

    return(

        <div classname="row">
        <div classname="col">
            <input type="number" className="form-control" placeholder="amount" value={amount} onChange={updateAmount}></input>
            <button className="btn btn-danger">Withdraw</button>
            <h2>Your withdrawal limit is <strong>{bal}</strong></h2>
        </div>
        </div>
    )

}
export default Withdraw