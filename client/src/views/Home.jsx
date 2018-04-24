import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'






class Home extends React.Component {

    state = { questions: [] }

    componentDidMount(){
       
        httpClient.getQuestions().then((serverResponse) => {
               this.setState({ questions: serverResponse.data })
        })

    }


    render() {
        const { questions, question } = this.state

        

        return (
            
        <div>
            <div class="all-questions">
          <h4>All Questions</h4>
          <h5>Click on the question to view more</h5>
          <a class="btn btn-primary" href="/questions/new" role="button">Ask Question</a>
            </div>
            <div class="questions-display">
          {questions.reverse().map((question) =>
        <ul key={question._id} class="questions">
        <Link to={`/questions/${question._id}`}>{question.name}</Link>
        </ul>
        )}
            </div>
        </div>

        
            
        )
    }
}

export default Home





{/* <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          {questions.reverse().map((q) =>
         <ul key={q._id} class="questions">
         <p></p
        </div>
        <div class="card-action">
          <a href="/qu">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div> */}