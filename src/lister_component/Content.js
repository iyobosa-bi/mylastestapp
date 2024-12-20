const Content = ({lists,deleteItem})=>{
        // console.log(lists);
    return(
            <div className="row">
                    <div className="col">
                        <h2 className="text-center text-primary">Shopping List</h2>
                    </div>

                    <div className="col">
                        <table border='2'>
                            <thead>
                                <tr>
                                    <th>sn</th>
                                    <th>product</th>
                                    <th>price</th>
                                    <th>action</th>

                                </tr>
                            </thead>
                                <tbody>
                                    { 
                                        lists.map(function(list,index){
                                        return(
                                            <tr key={index}>
                                            <th>{index+1}</th>
                                            <th>{list.name}</th>
                                            <th>{list.price}</th>
                                            <th><button onClick={function(){deleteItem(list.id)}}>Delete</button></th>
                                            </tr>   
                                        )})
                                        
                                    }
                            
                                 
                            </tbody>



                        </table>



                        

                    </div>





            </div>


             




        

            

    )
}

export default Content