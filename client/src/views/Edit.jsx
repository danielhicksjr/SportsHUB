import React from 'react'
import httpClient from '../httpClient'


class EditProfile extends React.Component {
    
    state = {
        fields: { name: '', email: '', password: ''}
    }
    
    componentDidMount() {
        const { name, email } = this.props.currentUser
        this.setState({
            fields: {
                name, email, password: ''
            }
        })
    }

    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }
    onFormSubmit(evt) {
        evt.preventDefault()
        httpClient.updateProile(this.state.fields).then(serverResponse => {
            if(serverResponse.data.success) {
                httpClient.setToken(serverResponse.data.token)
                this.props.onUpdateUserSuccess()
                this.props.history.push('/profile')
            } else {
                this.setState({ fields: { name: '', email: '', password: '' } })
            }
        })
    }

            
    handleDeleteClck(fields) {
        httpClient.deleteProfile().then((serverResponse) => {
           this.props.history.push('/logout')
        })
   }

    render (){
        const { name, email, password } = this.state.fields
        return (
            <div className="EditProfile">
                <div className='row'>
                    <div className='column column-33 column-offset-33'>
                        <h1>Edit Profile</h1>
                        
                        <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                            <input type="text" placeholder="Name" name="name" value={name} />
                            <input type="text" placeholder="Email" name="email" value={email} />
                            <input type="password" placeholder="Password" name="password" value={password} />
                            <button>Update Profile</button>
                        </form>
                            <button onClick={this.handleDeleteClck.bind(this)}>Delete Account</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile