import React from 'react'
import httpClient from '../httpClient'


class Questions extends React.Component {

    state = { questions: [] }

    componentDidMount(){
       
        httpClient.getQuestions().then((serverResponse) => {
               this.setState({ questions: serverResponse.data })
        })

    }


    render() {
        const { questions } = this.state


        return (
            <div className = "Questions">
             <h1>Questions</h1>
             <ul>{questions.map((q) => {
               return  <li key={q._id}>{q.name}</li>
             })}
             </ul>
             </div>
            
        )
    }
}

export default Questions 