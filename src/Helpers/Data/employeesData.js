import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((response) => {
      const allEmpObj = response.data;
      const employees = [];
      if (allEmpObj != null) {
        Object.keys(allEmpObj).forEach((fbId) => {
          allEmpObj[fbId].id = fbId;
          employees.push(allEmpObj[fbId]);
        });
      }
      resolve(employees);
    })
    .catch((error) => reject(error));
});

export default { getAllEmployees };
