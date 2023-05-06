// import { stat } from "fs";
import React from "react";
import './Success.css';

interface SuccessProps {

    status : boolean;
    
}

interface SuccessState {

    code : boolean;
    status: boolean;
    
}
 
class Success extends React.Component<SuccessProps, SuccessState> {


    SuccessState = {

        code : true,
        status : false

    }
    

    onConfirm = ( (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        console.log("OnConfirm button is working")

        this.SuccessState.code = false
        
        this.setState({

            code : false,
            status : false

        })
        
    })

    render() { 

        this.SuccessState.status = this.props.status;
        console.log("assigned_status",this.SuccessState.status)
        console.log("checkInSuccess",this.props.status )
        return ( 
            <>
            <div>
                {this.SuccessState.code && this.SuccessState.status ?
                (    <div>
                        {this.SuccessState.status? (
                            <div className="dialog-overlay">
                                <div className="dialog">
                                    <h2>Customer signed up successfully</h2>
                                </div>
                                <div>
                                    <button className="btn btn-confrim" onClick={this.onConfirm}>No</button>
                                </div>
                            </div>
                            )
                        :<></>}
                        
                    </div>  
                ) : null}
          
            </div>
            </>

         );
    }
}
 
export default Success;