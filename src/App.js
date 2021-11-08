import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import './App.scss';

function App() {

    const [lang, setLang] = useState('ru')

    function changeLang (e) {
        setLang(e.target.innerText)
    }

    return (
        <div className="App">
            <Header 
                lang={lang}
                changeLang={changeLang}
            />
            <Main lang={lang}/>
            <Footer lang={lang}/>
        </div>
    );
}

export default App;
