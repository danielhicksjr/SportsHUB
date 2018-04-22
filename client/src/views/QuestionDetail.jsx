//answers label
import React from 'react'
import httpClient from '../httpClient'


class CurrentQuestion extends React.Component {

  state = {
    fields: { name: '', details: '', answers: '' }
  }

  handleFormChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }
  
  handleFormSubmit(evt) {
    evt.preventDefault()
    httpClient.createQuestion(this.state.fields).then((serverResponse) => {
        console.log(serverResponse.data)
        this.props.history.push("/questions")
    })
  }

  render() {
    const { name, details, answers } = this.state.fields 
    return (
      <div className="CurrentQuestion">
        <h1>Ask A Question</h1>
        <form onChange={this.handleFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
          {/* <input name="name" type="text" placeholder="Subject" value={name} />
          <input name="details" type="text" placeholder="Question" value={details} /> */}
          <input name="answers" type="text" placeholder="Your Answer" value={answers} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CurrentQuestion
//