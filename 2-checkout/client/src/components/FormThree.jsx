

const FormThree = ( { handlePaymentChange } ) => {
    const handleChange = (event) => {
        handlePaymentChange(event);
    };
    return (
        <form onChange={handleChange}>
            CC Num: <input name="ccNum">

            </input>
            exp Date: <input name="expDate">

            </input>
            cvv: <input name="cvv">

            </input> <br/>
            billingZip: <input name="billingZip" >

            </input>
        </form>
    )
}

export default FormThree;