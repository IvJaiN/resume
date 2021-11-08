import './About.scss'
import AboutItem from "./AboutItem/AboutItem";
import {useState} from "react";
import udemy from '../../../images/udemy.jpg'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const About = (props) => {

    const contactsData = [
        {
            href: "tel: +375256358577",
            title: '+375(25)635-85-77',
            path: "M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z"
        },
        {
            href: "mailto:ivjain92@gmail.com",
            title: 'ivjain92@gmail.com',
            path: "M464 64h-416c-26.4 0-48 21.6-48 48v320c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-320c0-26.4-21.6-48-48-48zM199.37 275.186l-135.37 105.446v-250.821l135.37 145.375zM88.19 128h335.62l-167.81 126-167.81-126zM204.644 280.849l51.356 55.151 51.355-55.151 105.277 135.151h-313.264l105.276-135.151zM312.63 275.186l135.37-145.375v250.821l-135.37-105.446z"
        },
        {
            href: "https://telegram.me/ivjain",
            title: "@ivjain",
            path: "M256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zM381.8 175.5l-42 197.9c-2.9 14.1-11.4 17.4-23.2 10.9l-64-47.3-30.7 29.9c-3.6 3.5-6.4 6.4-12.8 6.4-8.3 0-6.9-3.1-9.7-11l-21.8-71.6-63.3-19.7c-13.7-4.2-13.8-13.6 3.1-20.3l246.6-95.2c11.2-5.1 22.1 2.7 17.8 20z"
        },
        {
            href: "https://www.linkedin.com/in/ivjain/",
            title: "https://www.linkedin.com/in/ivjain",
            path: "M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"
        },
        {
            href: "https://github.com/IvJaiN",
            title: "https://github.com/IvJaiN",
            path: "M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"
        }
    ]

    const courseData = [
        {title: 'Полный курс по JavaScript + React - с нуля до результата', teacher: 'Иван Петреченко', link: 'https://www.udemy.com/course/javascript_full/', year: 2021},
        {title: 'React', teacher: 'Владилен Минин', link: 'https://vladilen.ru/react', year: 2021},
        {title: 'Vue JS 3', teacher: 'Владилен Минин', link: 'https://vladilen.ru/vue', year: 2021}
    ]

    const courseDataEng = [
        {title: 'Full course JavaScript + React ', teacher: 'Ivan Petrechenko', link: 'https://www.udemy.com/course/javascript_full/', year: 2021},
        {title: 'React', teacher: 'Vladilen Minin', link: 'https://vladilen.ru/react', year: 2021},
        {title: 'Vue JS 3', teacher: 'Vladilen Minin', link: 'https://vladilen.ru/vue', year: 2021}
    ]

    if (props.lang === 'ru') {
        return (
            <div className='about'>
                <div className="about-item">
                    <AboutItem title='Контактные данные'>
                        <ul className="contacts-list">
                            <TransitionGroup className="todo-list">
                                {contactsData.map((item, idx) => {
                                    return (
                                        <CSSTransition 
                                        key={idx}
                                        timeout={500}
                                        classNames="contacts"
                                        >
                                            <li className="contacts-item" >
                                            <div className="contacts-item__icon">
                                                <a href={item.href} className="contacts-tem__icon-link">
                                                    <svg fill='white' version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        width="15" height="15" viewBox="0 0 512 512">
                                                        <path d={item.path}></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="contacts-item__text">
                                                <a href={item.href} className="contacts-item__text-link">{item.title}</a>
                                            </div>
                                        </li>
                                        </CSSTransition>
                                    )
                                })}
                            </TransitionGroup>
                        </ul>
                    </AboutItem>
                    <AboutItem title='Курсы'>
                        <div className="courses">
                            {courseData.map((course, idx) => {
                                return (
                                    <div className="courses-item" key={idx}>
                                        <div className="courses-item__year">{course.year}</div>
                                        <div className="courses-item__text">
                                            <h6 className='courses-item__title'>{course.title}</h6>
                                            <span className="courses-item__teacher">{course.teacher}</span>
                                            <a href={course.link} className="courses-item__link">{course.link}</a>
                                        </div>
                                    </div>
                                )
                            })}
    
                        </div>
                    </AboutItem>
                    <AboutItem title='Языки'>
                        <div className="languages">
                            <div className="languages-item">
                                <h5 className="languages-item__title">Русский (родной)</h5>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Устный</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                    </div>
                                </div>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Письменный</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="languages-item">
                                <h5 className="languages-item__title">Английский (В1)</h5>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Устный</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
                                </div>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Письменный</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="languages-item">
                                <h5 className="languages-item__title">Польский (А2)</h5>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Устный</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
    
                                </div>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Письменный</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AboutItem>
                    <AboutItem title='Сертифекаты'>
                        <div className="certificate">
                            <a href="https://www.udemy.com/certificate/UC-2c0594be-e771-46a8-a8b7-8f5ac8f15ea1/">
                                <img src={udemy} className="certificate__image"/>
                            </a>
                        </div>
                    </AboutItem>
                    <AboutItem title='Образование'>
                        <div className="education">
                            <span>Неоконченное высшее образование</span>
                            <div className='education__title'>Полоцкий государственный университет</div>
                            <div className='education__subtitle'>Инженерно-строительный</div>
                            <div className='education__subtitle'>Промышленное и гражданское строительство</div>
                            <span className='education__year'>2018</span>
                        </div>
    
                    </AboutItem>
                </div>
    
            </div>
        );
    } else {
        return (
            <div className='about'>
                <div className="about-item">
                    <AboutItem title='Contacts'>
                        <ul className="contacts-list">
                            <TransitionGroup className="todo-list">
                                {contactsData.map((item, idx) => {
                                    return (
                                        <CSSTransition 
                                        key={idx}
                                        timeout={500}
                                        classNames="contacts"
                                        >
                                            <li className="contacts-item" >
                                            <div className="contacts-item__icon">
                                                <a href={item.href} className="contacts-tem__icon-link">
                                                    <svg fill='white' version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        width="15" height="15" viewBox="0 0 512 512">
                                                        <path d={item.path}></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="contacts-item__text">
                                                <a href={item.href} className="contacts-item__text-link">{item.title}</a>
                                            </div>
                                        </li>
                                        </CSSTransition>
                                    )
                                })}
                            </TransitionGroup>
                        </ul>
                    </AboutItem>
                    <AboutItem title='Courses'>
                        <div className="courses">
                            {courseDataEng.map((course, idx) => {
                                return (
                                    <div className="courses-item" key={idx}>
                                        <div className="courses-item__year">{course.year}</div>
                                        <div className="courses-item__text">
                                            <h6 className='courses-item__title'>{course.title}</h6>
                                            <span className="courses-item__teacher">{course.teacher}</span>
                                            <a href={course.link} className="courses-item__link">{course.link}</a>
                                        </div>
                                    </div>
                                )
                            })}
    
                        </div>
                    </AboutItem>
                    <AboutItem title='Languages'>
                        <div className="languages">
                            <div className="languages-item">
                                <h5 className="languages-item__title">Russian (native)</h5>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Verbal</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                    </div>
                                </div>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Writing</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="languages-item">
                                <h5 className="languages-item__title">English (В1)</h5>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Verbal</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
                                </div>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Writing</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="languages-item">
                                <h5 className="languages-item__title">Polish (А2)</h5>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Verbal</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
    
                                </div>
                                <div className="languages-item__level">
                                    <h6 className='languages-item__subtitle'>Writing</h6>
                                    <div className="languages-item__dots">
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot yes"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                        <span className="languages-item__dot"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AboutItem>
                    <AboutItem title='Certificates'>
                        <div className="certificate">
                            <a href="https://www.udemy.com/certificate/UC-2c0594be-e771-46a8-a8b7-8f5ac8f15ea1/">
                                <img src={udemy} className="certificate__image"/>
                            </a>
                        </div>
                    </AboutItem>
                    <AboutItem title='Edacation'>
                        <div className="education">
                            <span>Incomplete higher education</span>
                            <div className='education__title'>Polotsk State University</div>
                            <div className='education__subtitle'>Faculty of Civil Engineering</div>
                            <div className='education__subtitle'>Constructions and Buildings</div>
                            <span className='education__year'>2018</span>
                        </div>
    
                    </AboutItem>
                </div>
    
            </div>
        );
    }
};

export default About;
