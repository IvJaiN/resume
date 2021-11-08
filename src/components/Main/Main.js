import About from "./About/About";
import Work from "./Work/Work";

import './Main.scss'
import WorkEng from "./Work/WorkEng";

const Main = ({lang}) => {
    return (
        <main className='main'>
            <About lang={lang}/>
            {lang === 'ru' ? <Work  lang={lang}/> : <WorkEng/>}
        </main>
    );
};

export default Main;
