import {useState} from "react";

const AboutItem = (props) => {
    const [active, setActive] = useState(false)

    return (
        <div className='about-item'>
            <h4
                className='about-item__title'
                onClick={() => setActive(active => !active)}
            >{props.title}</h4>
            {active ? props.children : null}
        </div>
    );
};

export default AboutItem;
