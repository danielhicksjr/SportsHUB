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
        const { questions } = this.state

        

        return (
            
        <div class="home">
          <h1>SportsHUB</h1>
          <h3>All Questions</h3>
        

          {questions.map((q) =>
        <ul key={q._id} class="questions">
        <Link to={`/questions/${q._id}`}>{q.name}</Link>
        
      </ul>
          )}
        </div>
            
        )
    }
}

export default Home