import React, {Component} from 'react';
import personal from '../../../assets/personal_ic.svg'
import business from '../../../assets/business_ic.svg'
import professional from '../../../assets/professional_ic.svg'
import "./Project.css"

class Project extends Component {
    render() {
        return (
            <div className="PaketContainer">
                <div className="title">
                Silahkan Memilih Paket Projek
                </div>
                <div className="Paket">
                    <div className="Paket1">
                        <h1>Personal</h1>
                        <img src={personal} alt="personal"/>
                        <h2>Rp. 300.000/projek</h2>
                        <div className="list_benefit">
                            <p>Pembuatan Web Pribadi</p>
                            <p>Tanpa Menggunakan API</p>
                            <p>Di Sediakan CMS dan Hosting</p>
                            <p>Gratis Domain</p>
                        </div>
                        <button className="Choose" >
                            Choose
                        </button>
                    </div>
                    <div className="Paket2">
                        <h1>Business</h1>
                        <img src={business} alt="business"/>
                        <h2>Rp. 500.000/projek</h2>
                        <div className="list_benefit">
                            <p>Pembuatan Web Atau Aplikasi Bisnis</p>
                            <p>Menggunakan API Beserta Database</p>
                            <p>Penambahan Fitur dan Aplikasi Mobile</p>
                            <p>Gratis Domain</p>
                        </div>
                        <button className="Choose">
                            Choose
                        </button>
                    </div>
                    <div className="Paket3">
                        <h1>Professional</h1>
                        <img src={professional} alt="pro"/>
                        <h2>Hubungi Kami<br/>Untuk Harga</h2>
                        <div className="list_benefit">
                            <p>Pembuatan Web Untuk<br/>Bisnis Berskala Besar</p>
                            <p>Bisa Dilakukan Kustomisasi<br/>Untuk Business Logic Component</p>
                            <p>Bisa Dilakukan Untuk Pembuatan<br/>API yang lebih luas dan flexible</p>
                        </div>
                        <button className="Choose">
                            Choose
                        </button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Project