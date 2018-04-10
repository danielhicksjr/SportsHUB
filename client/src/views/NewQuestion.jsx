import React from 'react'
import httpClient from '../httpClient'


class NewQuestion extends React.Component {

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
      <div className="NewQuestion">
        <h1>Add A Question</h1>
        <form onChange={this.handleFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
          <input name="name" type="text" placeholder="Name" value={name} />
          <input name="details" type="text" placeholder="Details" value={details} />
          <input name="answers" type="text" placeholder="Answers" value={answers} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewQuestion