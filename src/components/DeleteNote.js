import React from 'react';
import {firebaseDB} from '../firebase';

const DeleteNote = (props) => {
    const removeNote = () => {
        firebaseDB.ref(`notes/${props.match.params.id}`).remove()
        .then(() => {
            props.history.push('/');

        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div>
            {removeNote()}
        </div>
    )
}
export default DeleteNote ;