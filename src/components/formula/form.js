import React, {Component} from 'react';
 import './form.css';
 import {firebaseDB} from '../../firebase';
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : '',
            errorMessage : '',
            successMessage : ''
        }
    }
    componentWillMount(){
        if(this.props.type === 'edit'){
            firebaseDB.ref(`notes/${this.props.id}`).once('value')
            .then((snapshot) => {
                this.setState({
                    title : snapshot.val().title,
                    body : snapshot.val().body

                })
            })
        }
    }
    onTitleChanged = (event) => {
        this.setState ({
            title : event.target.value,
            errorMessage : ''
        })
    }
    onBodyChanged = (event) => {
        this.setState ({
            body : event.target.value,
            errorMessage : ''

        })
    }
    formSubmit = (event) => {

        event.preventDefault();
        switch(this.props.type){
            case 'add' : 
            if(this.state.title && this.state.body !== ''){
                let note = {
                    title : this.state.title,
                    body : this.state.body
     
                }
                firebaseDB.ref('notes').push(note)
                .then(() =>{
                          this.setState({
                              successMessage : <div className="success-message">
                                  added note
                                 </div>,
                               errorMessage :'',
                               title : '',
                               body : ''
                                     })
                    }).catch((error)=> {
                        console.log(error)
                      });
             }else{
                        this.setState({
                            errorMessage : 'This field is required'
                                 })
     
             }
            break;
            case 'edit' :
                if(this.state.title && this.state.body !== ''){
                    let note = {
                        title : this.state.title,
                        body : this.state.body
         
                    }
                    firebaseDB.ref(`notes/${this.props.id}`).update(note)
                    .then(() =>{
                              this.setState({
                                  successMessage : <div className="success-message">
                                       note updated
                                     </div>,
                                   errorMessage :'',
                                   title : '',
                                   body : ''
                                         })
                        }).catch((error)=> {
                            console.log(error)
                          });
                 }else{
                            this.setState({
                                errorMessage : 'This field is required'
                                     })
         
                 }
            break;
            default :
            console.log('loading...')
        }

        
    }
    render(){
        return(
            <div className="form">
           <div>{this.state.successMessage}
               <form onSubmit={this.formSubmit}>
                   <div className="form-element">
                       <label htmlFor="title">Title</label>
                       <input value={this.state.title}
                       onChange={this.onTitleChanged}
                       />
                   </div>
                   <div className="form-error">
                       {this.state.errorMessage}
                   </div>
                   <div className="form_element">
                       <label htmlFor="body">Description</label>
                       <textarea cols="30" rows="10"
                       value={this.state.body}
                       onChange={this.onBodyChanged}
                       />
                   </div>
                   <div className="form-error">
                       {this.state.errorMessage}
                   </div>
                   <div className="button_element">
                       <button type="submit">Validate</button>
                   </div>
               </form>
               </div> 
           </div>
        )
    }

}


export default Form;