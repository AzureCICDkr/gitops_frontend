'use client'

import apiClient from './api.js';
import {useState} from 'react';


function Request() {

const [reqData, setReqData] = useState('');

  const getRequest = () => {

	  
    return apiClient.get('/').then(response => setReqData(response.data)).catch(err=> alert("please try again"));

  }

  return (
   
      <>
        <button onClick={() => getRequest()  } >
            getRequest         
        </button>	  
        {reqData}
     </>

  );
}

export default Request;

