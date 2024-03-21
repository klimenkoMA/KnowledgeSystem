import logo from './logo.svg';
import './App.css';
import SimpleForm from "./SimpleForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <body style={{
                background: `url(/backFon.jpg`,
                backgroundSize: `auto`
            }}>
            <p>
                <SimpleForm/>
            </p>
            <p>
                <SimpleForm/>
            </p>
            </body>
        </div>
    );
}

export default App;
