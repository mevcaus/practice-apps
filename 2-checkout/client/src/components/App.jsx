import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const url = 'http://localhost:3000/checkout';
    const [currentForm, setCurrentForm] = useState(0);
    const [responsesState, setResponsesState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [address, setAddress] = useState({
        lineOne: '',
        lineTwo: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''
    });

    const [payment, setPayment] = useState({
        ccNum: '',
        expDate: '',
        cvv: '',
        billingZip: ''
    });

    const handleResponsesChange = (event) => {
        const value = event.target.value;
        setResponsesState({
            ...responsesState,
            [event.target.name]: value
        });
    };

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress({
            ...address,
            [event.target.name]: value
        });
    };

    const handlePaymentChange = (event) => {
        const value = event.target.value;
        setPayment({
            ...payment,
            [event.target.name]: value
        });
    };

    const handleSubmitForm = () => {
        if (currentForm === 4) {
            axios.post(url, {
                name: responsesState.name,
                email: responsesState.email,
                password: responsesState.password,
                lineOne: address.lineOne,
                lineTwo: address.lineTwo,
                city: address.city,
                state: address.state,
                zipCode: address.zipCode,
                phoneNumber: address.phoneNumber,
                ccNum: payment.ccNum,
                expDate: payment.expDate,
                cvv: payment.cvv,
                billingZip: payment.billingZip
            })
                .then(reponse => {
                    setCurrentForm(0);
                })
        } else {
            setCurrentForm(a => a + 1);
        };
    }

    return (
        <div>
            {currentForm === 1 &&
                <FormOne handleResponsesChange={handleResponsesChange} />
            }
            {currentForm === 2 &&
            <FormTwo handleAddressChange={handleAddressChange} />
            }
            {currentForm === 3 &&
            <FormThree handlePaymentChange={handlePaymentChange} />
            }
            {currentForm === 4 &&
            <div>
            name: {responsesState.name},
            email: {responsesState.email},
            password: {responsesState.password},
            lineOne: {address.lineOne},
            lineTwo: {address.lineTwo},
            city: {address.city},
            state: {address.state},
            zipCode: {address.zipCode},
            phoneNumber: {address.phoneNumber},
            ccNum: {payment.ccNum},
            expDate: {payment.expDate},
            cvv: {payment.cvv},
            billingZip: {payment.billingZip}
            </div>
            }
            <button onClick={handleSubmitForm}>{!currentForm ? 'Checkout' : currentForm === 4 ? 'Purchase' : 'Next'}</button>

        </div>
    )

}

export default App;