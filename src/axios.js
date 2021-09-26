import axios from 'axios';


 const instance = axios.create({
	 baseURL: "https://tinder-clone-sachira.herokuapp.com",
 });

 export default instance;
