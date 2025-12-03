import logo from './logo.svg';
import './App.css';
import apiClient from './api.js';

function App() {


const data = apiClient.get('/')
             .then(response => console.log(response.data))
	     .catch(error => console.log(error))	

  

  return (
    <div className="App">
      <header className="App-header">
        !


     <button onClick={() => window.location.href = "http://localhost:8888/oauth2/authorization/google"}>
         Google Login
     </button>

</header>

    </div>
  );
}

export default App;
