import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((response) => {
      const allWalksObj = response.data;
      const walks = [];
      if (allWalksObj != null) {
        Object.keys(allWalksObj).forEach((fbId) => {
          allWalksObj[fbId].id = fbId;
          walks.push(allWalksObj[fbId]);
        });
      }
      resolve(walks);
    })
    .catch((error) => reject(error));
});

const saveNewWalk = (newWalk) => axios.post(`${baseUrl}/walks.json`, newWalk);

const deleteAWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const updateAWalk = (walkId, updatedWalk) => axios.put(`${baseUrl}/walks/${walkId}.json`, updatedWalk);

export default { getAllWalks, saveNewWalk, deleteAWalk, updateAWalk };
