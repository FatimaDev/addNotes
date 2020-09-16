import React from 'react';
import Form from './formula/form';
import Navbar from './includes/navbar';

const AddNote = () => {
    return(
        <div>
            <Navbar/>
            <Form type="add"/>

        </div>
    )
}
export default AddNote ;