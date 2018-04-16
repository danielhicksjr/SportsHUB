import React from 'react'
import httpClient from '../httpClient'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'


class Profile extends React.Component {

    state = { questions: [],
              fields: { name: '', email: '', password: ''}

            }
   
            handleEditFormSubmit(evt) {
                evt.preventDefault()
                const { name, email, password } = this.refs
                

                httpClient.updateUser(this.props.match.params.id).then((serverResponse) => {
                    this.setState({ 
                        
                        user: serverResponse.data.user
                    })
                })
            }
        
            
    handleDeleteClck(id) {
         httpClient.deleteQuestion(id).then((serverResponse) => {
            console.log(id)
            this.props.routeProps.history.push('/profile')
            this.setState({
                questions: this.state.questions.filter((q) => {
                    return q._id !== id
                })
            })
        })
    }
   

    componentDidMount(){
       
        httpClient.getQuestions().then((serverResponse) => {
               this.setState({ questions: serverResponse.data.filter((q)=>{
				//    console.log(this.props.currentUser._id, q._id)
				   return this.props.currentUser._id === q.user    
			   }) })
        })

    }

    render(props) {
        const { questions } = this.state
        const {currentUser} = this.props
       
	
        return (
            <div >
               
                <h1 class="profile-css">{currentUser.name}</h1> 
                <div class="img">
                <img src="https://i.imgur.com/CrAyzPv.png"/>
                </div>
                <Link to={`/profile/edit`}>Edit Profile</Link>
                <h3>My Questions</h3>
                {questions.map((q) =>

                    <div key={q._id}>
                    
                    <h3>{q.name}</h3>
                    <button type="button" onClick={this.handleDeleteClck.bind(this, q._id)}>Delete</button>   
                    
                     
                    </div>
                )}
            </div>
        )
    }
}

export default Profile 
