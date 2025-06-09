import React from "react";
import "./formRegister.css";

function formRegister(){
    return(
        <div className="formContainer">
            <div className="title">
                Silahkan Isi Form Berikut Ini Untuk<br/> Melakukan Reservasi Projek
            </div>
            <div className="isi">
                <div className="lokasiPhone">
                    <input type="text" id="lokasi" placeholder='Lokasi'/>
                    <input type="tel" id="number" placeholder='Nomor Telepon'/>
                </div>
                <div className="namaLengkap">
                    <input type="text" id="nama" placeholder='Nama Lengkap'/>
                </div>
                <div className="alamat">
                    <input type="text" id="alamat" placeholder='Alamat'/>
                </div>
                <div className="email">
                    <input type="email" id="email" placeholder='Alamat Email'/>
                </div>
            </div>
        </div>
    )
}

export default formRegister