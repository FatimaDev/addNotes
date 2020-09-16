import React from 'react';
import Form from './formula/form';
import Navbar from './includes/navbar';

const EditNote = (props) => {
    //console.log(props.match.params.id);
    return(
        <div>
            <Navbar/>
            <Form type="edit" id={props.match.params.id}/>

        </div>
    )
}
export default EditNote ;