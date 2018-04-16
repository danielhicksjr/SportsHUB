import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, CardTitle, CardText, Card  } from 'reactstrap';
import httpClient from '../httpClient'




class Questions extends React.Component {

    state = { question: [] }

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


    render() {
        const { question } = this.state
       return (
            
        <div>

          
          <h3>Question</h3>
        
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
          <Input type="submit"></Input>
          

        </FormGroup>
      </Form>
      </Card>
     
        </div>
        )
    }
}

export default Questions 