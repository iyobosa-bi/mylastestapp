import { useEffect,createContext,useState } from "react";

const ListContext = createContext();


const ListProvider = ({children})=>{


    //set up the state
    //craetae a fucntion check inside localstorage and see if there is any marketlist in the localstorage, if it is not there then it is an empty array.

    function fetchListFromLocalStorage(){

            const initialList=localStorage.getItem('marketList');
            const realList = initialList?JSON.parse(initialList):[];
            return realList;

    }

        //set up the state
        const[list,setList]=useState(fetchListFromLocalStorage()); 


        useEffect(function(){
            localStorage.setItem("marketList",JSON.stringify(list));
        },[list])

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

        
        return (
            <ListContext.Provider value={{list,addNewProduct,deleteItem}}>
                    {children}
            </ListContext.Provider>
        )
        //set up all functions that the components
}


export {ListContext,ListProvider}


