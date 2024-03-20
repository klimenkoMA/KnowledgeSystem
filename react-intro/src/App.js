import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import SimpleForm from "./SimpleForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <SimpleForm/>
                </p>
            </header>
        </div>
    );
}

export default App;
