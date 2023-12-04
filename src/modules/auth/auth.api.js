import http from '../../api_config/axios.config';

const getResponseLogin = async (data)=>{
  const resLogin = await http.post('/security/logIn', data);
  return resLogin;
}

export default getResponseLogin;
