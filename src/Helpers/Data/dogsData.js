import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((response) => {
      const allDogsObj = response.data;
      const dogs = [];
      if (allDogsObj != null) {
        Object.keys(allDogsObj).forEach((fbId) => {
          allDogsObj[fbId].id = fbId;
          dogs.push(allDogsObj[fbId]);
        });
      }
      resolve(dogs);
    })
    .catch((error) => reject(error));
});

export default { getAllDogs };
