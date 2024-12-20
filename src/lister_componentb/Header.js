import { useContext } from "react"
import { ListContext } from "../context/ListContext"


const Header = ()=>{
    //useContext
       const{list} = useContext(ListContext);

    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">

                <h1 className="text-center">Lister</h1>
                <p className="text-center">Number of Items in Shopping list:<strong>{list.length}</strong></p>
            </div>

        </div>
       
    )
}
export default Header