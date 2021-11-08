import './Work.scss'
import kidsGame from '../../../images/kids-game.jpg'
import coffee from '../../../images/cofe.jpg'
import WorkItem from "./WorkItem/WorkItem";
import {useEffect, useMemo, useState} from "react";
import Square from '../../Square/Square';

const Work = (props) => {

    const [softSkillsData, setSoftSkillsData] = useState(['Ответственность','Внимание к деталям','Командная работа','Пунктуальность','Инициативность'])
    const [softSkillsDataEng, setSoftSkillsDataEng] = useState([
        'Responsibility','Attention to detail','Teamwork','Punctuality','Initiative'
    ])

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
            <WorkItem title='Опыт работы'>
                <div className="experience">
                <Square/>
                    <div className="experience-item">
                        <div className="experience-item__date">Декабрь 2020 <br/> — <br/> по настоящее время</div>
                        <div className="experience-item__content">
                            <h5 className="experience-item__title">Обучение, фриланс</h5>
                            <p className="experience-item__subtitle">Front-end Developer</p>
                            <p className="experience-item__text">
                                Верстка сайтов на HTML, CSS(scss) по макетам PSD, Figma. Внедрение сторонних библиотек и плагинов.
                                Создание интерактивных пользовательских интерфейсов на JavaScript, React, Vue3 JS. Разбор чужого кода и решение задач на <a
                                href="https://www.codewars.com/users/IvJaiN">CodeWars</a>
                            </p>
                        </div>
                    </div>
                </div>
            </WorkItem>
            
            <WorkItem title='Ссылки на выполненные работы'>
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
            
            <WorkItem title='Обо мне'>
                <div className="about-me">
                    <span>Здравствуйте.</span> <br/> Меня зовут Евгений. Я начинающий Front-end разработчик. <br/> Чуть меньше чем год назад начал изучать web-раработку. За это время успешно окончил курсы по направлению JavaScript, React и Vue3. Изучил и опробовал на учебных приложениях такие технологии как HTML, CSS, JavaScript, React, Vue3, Git. В настоящий момент активно занимаюсь изучением английского языка. Не собираюсь останавливаться на достигнутом, ведь мне нравится то, что я делаю, и у меня отлично это выходит.
                </div>
            
            </WorkItem>
        </div>
    );
};

export default Work;
