import React from 'react'

const Alert = (props) => {
    // console.log('this is alert', props.alert
    
    
    return (
       
         props.alert &&   <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> :{props.alert.message}
               
            </div>
       
    )
}

export default Alert
