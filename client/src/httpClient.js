import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	console.log(token)
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}



// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

httpClient.addAnswer = function(id, answer) {
	return this({ method: 'post', url: `/api/questions/${id}`, data: answer})
}

httpClient.getQuestions = function() {
	return this({method: 'get', url: '/api/questions' })
}

httpClient.getQuestion = function(id) {
	return this({method: 'get', url: `/api/questions/${id}` })
}

httpClient.createQuestion = function(questionInfo) {
	return this({ method: 'post', url: '/api/questions', data: questionInfo})
}

httpClient.deleteUser = function(id) {
	return this({method: 'delete', url: `/api/users/${id}`})
}

httpClient.deleteQuestion = function(id) {
	return this({method: 'delete', url: `/api/questions/${id}`})
}
httpClient.updateProile = function(fields) {
    return this({method: 'patch', url: `/api/users/me`, data: fields})
}

httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient