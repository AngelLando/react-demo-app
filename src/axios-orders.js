import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://react-demo-app-8797f.firebaseio.com/'
});

export default Instance;