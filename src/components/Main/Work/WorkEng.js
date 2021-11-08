import './Work.scss'
import kidsGame from '../../../images/kids-game.jpg'
import coffee from '../../../images/cofe.jpg'
import WorkItem from "./WorkItem/WorkItem";
import {useEffect, useMemo, useState} from "react";
import Square from '../../Square/Square';

const WorkEng = () => {

    const [softSkillsData, setSoftSkillsData] = useState([ 'Responsibility','Attention to detail','Teamwork','Punctuality','Initiative'])

    useEffect(() => {
        slick()
    }, [])

    function slick() {
        const track = document.querySelector('.soft-skills__track')
        const currentWidth = window.getComputedStyle(track).width
        let width = parseInt(currentWidth)
        let currentItem = 1
        setInterval(() => {
            if (currentItem % softSkillsData.length === 0) {
                setSoftSkillsData(prevData => [...prevData, ...softSkillsData])
            }
            track.style.transform = `translateX(-${width}px)`
            width += parseInt(currentWidth)
            currentItem++
        }, 1000)
    }

        return (
            <div className='work'>
                <Square/>
                <WorkItem title='Experience'>
                    <div className="experience">
                        <div className="experience-item">
                            <div className="experience-item__date">December 2020 <br/> — <br/> currently</div>
                            <div className="experience-item__content">
                                <h5 className="experience-item__title">Education, freelance</h5>
                                <p className="experience-item__subtitle">Front-end Developer</p>
                                <p className="experience-item__text">
                                Layout of sites in HTML, CSS (scss) according to layouts PSD, Figma. Implementation of third party libraries and plugins.
Creation of interactive user interfaces in JavaScript, React, Vue3 JS. Parsing someone else's code and solving problems on <a
                                    href="https://www.codewars.com/users/IvJaiN">CodeWars</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </WorkItem>
              
                <WorkItem title='Links to completed work'>
                    <div className="example">
                        <a href="https://kids-games.herokuapp.com/" className='example__link'>
                            <img src={kidsGame} alt="" className="example__image"/>
                        </a>
                        <a href="https://coffee-spa.herokuapp.com/" className='example__link'>
                            <img src={coffee} alt="" className="example__image"/>
                        </a>
    
                    </div>
                </WorkItem>
               
                <WorkItem title='Hard skills'>
                    <div className="hard-skills">
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">HTML</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">CSS/SCSS</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">JavaScript</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">React</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">Redux</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">Vue</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                        <div className="hard-skills__item">
                            <h5 className="hard-skills__title">Git</h5>
                            <div className="hard-skills__dots">
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot yes"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                                <span className="hard-skills__dot"></span>
                            </div>
                        </div>
                    </div>
                </WorkItem>
               
                <WorkItem title='Soft skills'>
                    <div className="soft-skills">
                        <div className="soft-skills__track">
                            {softSkillsData.map((data, idx) => (<div key={idx} className="soft-skills__item">{data}</div>))}
                        </div>
                    </div>
                </WorkItem>
               
                <WorkItem title='About me'>
                    <div className="about-me">
                        <span>Hello.</span> <br/>My name is Evgeniy. I'm a beginner front-end developer. <br/> A little less than a year ago I started to study web development. During this time, he successfully completed courses in JavaScript, React and Vue3. I studied and tested technologies such as HTML, CSS, JavaScript, React, Vue3, Git on educational applications. At the moment I am actively studying English. I'm not going to be satisfied with what has already been achieved, because I like what I do, and I am great at it.
                    </div>
               
                </WorkItem>
            </div>
        );
    }    

export default WorkEng;
