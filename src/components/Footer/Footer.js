import './Footer.scss'

const Footer = (props) => {
    if (props.lang === 'ru') {
        return (
            <footer className='footer'>
                <h6>Дизайн и разработка: всё сам.</h6>
                <a href="tel: +375256358577">Tel: +375256358577</a>
            </footer>
    );
    } else {
        return (
            <footer className='footer'>
                <h6>Design and development: all by myself.</h6>
                <a href="tel: +375256358577">Tel: +375256358577</a>
            </footer>
        )
    }
};

export default Footer;
