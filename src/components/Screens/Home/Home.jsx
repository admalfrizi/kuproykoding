import "./Home.css"
import website from "../../../assets/website.svg";
import who_us_ic from "../../../assets/who_us_ic.svg";
import profile_corp from '../../../assets/profile_corp_ic.svg';
import ecommerce from '../../../assets/e-commerce_online.svg';
import personalweb from '../../../assets/personal_web_ic.svg';
import etc from '../../../assets/etc_ic.svg';
import wa from '../../../assets/wa_ic.svg';
import instagram from '../../../assets/instagram_ic.svg';
import email from '../../../assets/email_ic.svg';
import titleWord from '../../../assets/title_word.svg';

const Home = () =>  {
    return (
        <div className="HomeContainer">
            <div className="BannerHome">
                <div className="Isi">
                    <div className="BannerTitle">
                        <h1>Kembangkan Bisnismu Dengan Sistem Integrasi Masa Depan</h1>
                        <p>Sistem aplikasi dan juga website yang akan mempermudah anda
                            dalam urusan bisnis dan di lengkapi dengan sistem yang berbasis
                            masa depan untuk mengembangkan bisnis anda lebih luas</p>
                    </div>
                    <div className="BannerImg">
                        <img src={website} alt="website" />
                    </div>
                </div>
            </div>
            <div className="EmailSubmission">
                <h1>Silahkan Cantumkan Email Untuk <br/> Diskusi Tentang Project</h1>
                <div className='InputEmail'>
                    <input type="text" id="email" placeholder='Email Disini'/>
                    <button className='Kirimkan'>Kirimkan</button>
                </div>
            </div>
            <div className="WhoUs">
                <div className="WhoUsInfo">
                    <h2 className="WhoUsTitle">Siapa Kami ?</h2>
                    <p>Kuproykoding.com adalah jasa pembuatan website dan aplikasi
                        yang memudahkan pengembangan bisnis serta sistem integrasi
                        berbasis masa depan yang akan membantu pengembangan bisnis
                        anda hingga ke internasional</p>
                    <button className='Find_us'>
                       Cari Tahu
                    </button>
                </div>
                <div className="ImgWhoUs">
                    <img src={who_us_ic} alt="who us"/>
                </div>
            </div>
            <div className="Services">
                <div className="ServiceTitle">
                    <h1>Layanan Kami</h1>
                    <p>Kami menyediakan jasa untuk pembuatan website dan aplikasi berbasis mobile seperti : </p>
                </div>
                <div className="ServicesIcons">
                    <div className='profile_corp'>
                        <img src={profile_corp} alt='profile_corp' />
                        <p>Profil Perusahaan</p>
                    </div>
                    <div className='online_shop'>
                        <img src={ecommerce} alt='online_shop' />
                        <p>Toko Online</p>
                    </div>
                    <div className='web_personal'>
                        <img src={personalweb} alt='web_personal'/>
                        <p>Web Pribadi</p>
                    </div>
                    <div className='etc'>
                        <img src={etc} alt='etc' />
                        <p>Lain - Lain</p>
                    </div>
                </div>
            </div>
            <div className='Contact'>
                <div className='ContactTitle'>
                    <h1>Kontak Kami</h1>
                </div>
                <div className='ContactIsi'>
                    <div className='Whatsapp'>
                        <img src={wa} alt=''/>
                        <h1>+62865002221232</h1>
                    </div>
                    <div className='Instagram'>
                        <img src={instagram} alt=''/>
                        <h1>@kuproykoding</h1>
                    </div>
                    <div className='Email'>
                        <img src={email} alt=''/>
                        <h1>kuproykoding@gmail.com</h1>
                    </div>
                </div>
            </div>
            <div className='Footer'>
                <div className='FooterIsi'>
                    <img src={titleWord} alt='title'/>
                    <p>Copyright - 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Home