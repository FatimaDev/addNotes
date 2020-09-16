import React,{Component} from 'react';
import Navbar from './includes/navbar';
import './includes/navbar.css';
import {firebaseDB} from '../firebase';
import {Link} from 'react-router-dom';
import './formula/notes.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes : [],
            successMessage : ''

        }
    }
    componentWillMount(){
      firebaseDB.ref('notes').once('value')
      .then((snapshot) => {
          const data = [];
          snapshot.forEach((childsnapshot) => {
              data.push({
                  id : childsnapshot.key,
                  ...childsnapshot.val()
              })
          })
          this.setState({
              notes : data
          })
      })
    }
    showData = () => {
       let template = '';
       template = this.state.notes.map((note,i)=>{
           return(
               <tbody>
                   <tr key={i}>
           <td>{note.title}</td>
           <td>
               <p>{note.body}</p>
           </td>
           <td>
               <Link to={`/edit/${note.id}`} className="link">Edit</Link>
               <Link to={`/delete/${note.id}`} className="link">Delete</Link>

           </td>


                   </tr>
               </tbody>
           )
       });
       return template;
    }
    render(){
        return(
                    <div>
                        <Navbar/>
                        <div className="container">
                            {this.state.successMessage}
                            <table>
                                <thead>
                                    <tr>
                                        <td className="th">Title</td>
                                        <td className="th">Description</td>
                                        <td className="th">Action</td>
                                    </tr>
                                </thead>
                                {this.showData()}
                            </table>

                        </div>

                    </div>
                
            
        )
    }
}
export default Home;