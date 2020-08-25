import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vth0to5g95.execute-api.us-east-1.amazonaws.com/v1'
})

//instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
