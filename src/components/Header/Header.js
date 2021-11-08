import './Header.scss'
import {useEffect, useState} from "react";

import photo from '../../images/photo_2021-08-06_13-40-21.jpg'

const Header = (props) => {

    const [title, setTitle] = useState(' ')
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        changeTitle()
    }, [flag])

    function changeTitle() {

        setTimeout(() => {setTitle('|')
            setTimeout(() => {setTitle(' ')
                setTimeout(() => {setTitle('|')
                    setTimeout(() => {setTitle(' ')
                        setTimeout(() => {setTitle('|')
                            setTimeout(() => {setTitle('F|')
                                setTimeout(() => {setTitle('Fr|')
                                    setTimeout(() => {setTitle('Fro|')
                                        setTimeout(() => {setTitle('Fron|')
                                            setTimeout(() => {setTitle('Front|')
                                                setTimeout(() => {setTitle('Front-|')
                                                    setTimeout(() => {setTitle('Front-e|')
                                                        setTimeout(() => {setTitle('Front-en|')
                                                            setTimeout(() => {setTitle('Front-end|')
                                                                setTimeout(() => {setTitle('Front-end |')
                                                                    setTimeout(() => {setTitle('Front-end D|')
                                                                        setTimeout(() => {setTitle('Front-end De|')
                                                                            setTimeout(() => {setTitle('Front-end Dev|')
                                                                                setTimeout(() => {setTitle('Front-end Deve|')
                                                                                    setTimeout(() => {setTitle('Front-end Devel|')
                                                                                        setTimeout(() => {setTitle('Front-end Develo|')
                                                                                            setTimeout(() => {setTitle('Front-end Develop|')
                                                                                                setTimeout(() => {setTitle('Front-end Develope|')
                                                                                                    setTimeout(() => {setTitle('Front-end Developer|')
                                                                                                        setTimeout(() => {setTitle('Front-end Developer')
                                                                                                            setTimeout(() => {setTitle('Front-end Developer|')
                                                                                                                setTimeout(() => {setTitle('Front-end Developer')
                                                                                                                    setTimeout(() => {setTitle('Front-end Developer|')
                                                                                                                        setTimeout(() => {setTitle('Front-end Develope|')
                                                                                                                            setTimeout(() => {setTitle('Front-end Develop|')
                                                                                                                                setTimeout(() => {setTitle('Front-end Develo|')
                                                                                                                                    setTimeout(() => {setTitle('Front-end Devel|')
                                                                                                                                        setTimeout(() => {setTitle('Front-end Deve|')
                                                                                                                                            setTimeout(() => {setTitle('Front-end Dev|')
                                                                                                                                                setTimeout(() => {setTitle('Front-end De|')
                                                                                                                                                    setTimeout(() => {setTitle('Front-end D|')
                                                                                                                                                        setTimeout(() => {setTitle('Front-end |')
                                                                                                                                                            setTimeout(() => {setTitle('Front-end|')
                                                                                                                                                                setTimeout(() => {setTitle('Front-en|')
                                                                                                                                                                    setTimeout(() => {setTitle('Front-e|')
                                                                                                                                                                        setTimeout(() => {setTitle('Front-|')
                                                                                                                                                                            setTimeout(() => {setTitle('Front|')
                                                                                                                                                                                setTimeout(() => {setTitle('Fron|')
                                                                                                                                                                                    setTimeout(() => {setTitle('Fro|')
                                                                                                                                                                                        setTimeout(() => {setTitle('Fr|')
                                                                                                                                                                                            setTimeout(() => {setTitle('F|')
                                                                                                                                                                                                setTimeout(() => {setTitle('|')
                                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                                        setTitle(' ')
                                                                                                                                                                                                        setFlag(!flag)
                                                                                                                                                                                                    }, 800)
                                                                                                                                                                                                }, 100)
                                                                                                                                                                                            }, 100)
                                                                                                                                                                                        }, 100)
                                                                                                                                                                                    }, 100)
                                                                                                                                                                                }, 100)
                                                                                                                                                                            }, 100)
                                                                                                                                                                        }, 100)
                                                                                                                                                                    }, 100)
                                                                                                                                                                }, 100)
                                                                                                                                                            }, 100)
                                                                                                                                                        }, 100)
                                                                                                                                                    }, 100)
                                                                                                                                                }, 100)
                                                                                                                                            }, 100)
                                                                                                                                        }, 100)
                                                                                                                                    }, 100)
                                                                                                                                }, 100)
                                                                                                                            }, 100)
                                                                                                                        }, 100)
                                                                                                                    }, 800)
                                                                                                                }, 800)
                                                                                                            }, 800)
                                                                                                        }, 800)
                                                                                                    }, 150)
                                                                                                }, 150)
                                                                                            }, 150)
                                                                                        }, 150)
                                                                                    }, 150)
                                                                                }, 150)
                                                                            }, 150)
                                                                        }, 150)
                                                                    }, 150)
                                                                }, 150)
                                                            }, 150)
                                                        }, 150)
                                                    }, 150)
                                                }, 150)
                                            }, 150)
                                        }, 150)
                                    }, 150)
                                }, 150)
                            }, 150)
                        }, 800)
                    }, 800)
                }, 800)
            }, 800)
        }, 800)


    }

    if (props.lang === 'ru') {
        return (
            <header className='header'>
                <div className="header-lang">
                    <button
                     className='header-lang__btn _active'
                     onClick={props.changeLang}
                     >ru</button>
                    /
                    <button 
                    className='header-lang__btn'
                    onClick={props.changeLang}
                    >eng</button>
                </div>
                <div className="header-main">
                    <div className="header-main__photo">
                        <img className='header-main__photo-image' src={photo}/>
                    </div>
                    <div className="header-main__text">
                        <div className="header-main__text-name">Пархимович Евгений</div>
                        <div className="header-main__text-prof">{title}</div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className='header'>
                <div className="header-lang">
                    <button
                     className='header-lang__btn'
                     onClick={props.changeLang}
                     >ru</button>
                    /
                    <button 
                    className='header-lang__btn _active'
                    onClick={props.changeLang}
                    >eng</button>
                </div>
                <div className="header-main">
                    <div className="header-main__photo">
                        <img className='header-main__photo-image' src={photo}/>
                    </div>
                    <div className="header-main__text">
                        <div className="header-main__text-name">Parkhimovich Evgeniy</div>
                        <div className="header-main__text-prof">{title}</div>
                    </div>
                </div>
            </header>
        );
    }


};

export default Header;
