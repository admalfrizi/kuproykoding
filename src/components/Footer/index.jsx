import titleWord from '../../assets/title_word.svg';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FooterIsi'>
                <img src={titleWord} alt='title'/>
                <p>Copyright - 2021</p>
            </div>
        </div>
    );
};

export default Footer;