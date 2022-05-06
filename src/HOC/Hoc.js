import React from "react";

const Hoc = (Component) =>{
    return(
        class extends React.Component{
            state={
                auth :false
            }
            render(){
                return(
                    <div>
                        {this.state.auth ?<Component name="ravi"/> : <h3>Please login</h3> }
                    </div>
                )
            }
        }
    )
}
export default Hoc;