import React, { useState } from 'react';
import FormRegister from '../../StepProgress/StepScreen/FormRegister/formRegister';
import StepNavigation from '../../StepProgress/StepNav/stepNavigation';
import "./Payment.css"
import PaymentScreen from '../../StepProgress/StepScreen/PaymentScreen/paymentScreen';
import KonfirmasiScreen from '../../StepProgress/StepScreen/KonfirmasiScreen/KonfirmasiScreen';

function Reservasi() {

    const labelArray = ["Isi Form Registrasi", "Pilih Sistem Pembayaran", "Konfirmasi Pembayaran"]
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(step) {
        updateCurrentStep(step)
    };

    const PageDisplay = () => {
        if (currentStep === 1) {
            return <FormRegister />;
        } else if (currentStep === 2) {
            return <PaymentScreen />;
        } else {
            return <KonfirmasiScreen />;
        }
    };

    return (
        <div className="PaymentContainer">
            <div className='stepNav'>
                <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
            </div>
            <div className='form'>
                {PageDisplay()}
            </div>
            <div className="nextorprevious">
                <button className='Previous' disabled={currentStep === 1} onClick={() => { updateCurrentStep((currPage) => currPage - 1); }}>
                    Prev
                </button>
                <button className='Next' onClick={() => {
                    if (currentStep === 3) {
                        alert("FORM SUBMITTED");
                    } else {
                        updateCurrentStep((currPage) => currPage + 1);
                    }
                }}>
                    {currentStep === 3 ? "Submit" : "Next"}
                </button>
            </div>
            <div className='Footer'>
                <div className='FooterIsi'>
                    <img src='assets/title_word.svg' alt='title' />
                    <p>Copyright - 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Reservasi