import logo from './logo.svg';
import './App.css';
import SimpleForm from "./SimpleForm";
import Footer from "./footer/footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <body style={{
                marginTop: `120px`,
                marginBottom: `100px`,
                width: `100%`,
                background: `url(/backFon.jpg`,
                backgroundSize: `100% 100%`,
                backgroundRepeat: "no-repeat",
            }}>
            <p>
                <SimpleForm/>
            </p>
            <p>
                <SimpleForm/>
            </p>
            </body>
            <footer className="App-footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
