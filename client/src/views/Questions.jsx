import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, CardTitle, CardText, Card  } from 'reactstrap';
import httpClient from '../httpClient'




class Questions extends React.Component {

    state = { question: [],
      questions: [],
      fields: { name: '', email: '', password: ''} }

    componentDidMount(){
       var questionId = this.props.routeProps.match.params.id
        httpClient.getQuestion(questionId).then((serverResponse) => {
               this.setState({ question: serverResponse.data })
        })

    } 

    submitAnswer(evt) {
      evt.preventDefault()
     var value = evt.target[0].value 
     const answer = {
      body: value,
      user: this.props.currentUser._id
     }
      httpClient.addAnswer(this.props.routeProps.match.params.id, answer)
        .then(serverResponse => {
          this.setState({
            question: serverResponse.data 
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


    render(props) {
        const { question } = this.state
        const {currentUser} = this.props
        
      
       return (
            
        <div>

          
          <h3 key="question8">Question</h3>
        
             <Card key={question._id}>
        <CardTitle class= "question4">{question.name}</CardTitle>
        <CardText>{question.details}</CardText>

           {question.answers && question.answers.map((a) => {
         return <p>{a.body}</p>
      })}
      
      <Form onSubmit={this.submitAnswer.bind(this)}>
        <FormGroup>
          <Label for="exampleText">Your Answer</Label>
          <Input type="textarea" name="text" id="exampleText" />
          
          {currentUser
					  ? (
						  <span class="questions1">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleDeleteClck.bind(this, question._id)}>Delete</button>
          
	</span>
					  )
					  : (
			
						  <span class="questions1">
          <button type="submit">Submit</button>
          </span>
					  )
				  }

          
          

        </FormGroup>
      </Form>
      </Card>
     
        </div>
        )
    }
}

export default Questions 