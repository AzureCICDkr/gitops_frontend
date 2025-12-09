'use client'

import apiClient from './api.js';
import {useState} from 'react';


function Request() {

const [reqData, setReqData] = useState('');

  const getRequest = () => {


	  
    return apiClient.get('/').then(response => setReqData(response.data));

  }

  return (
    <div className="App">
      <header className="App-header">
        !


     <button onClick={() => getRequest()  } >
         getRequest         
     </button>	  
	  {reqData}
</header>

    </div>
  );
}

export default Request;

