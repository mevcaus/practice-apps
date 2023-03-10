

const FormTwo = ( { handleAddressChange }) => {
    const handleChange = (event) => {
        handleAddressChange(event);
    };
    return (
        <form onChange={handleChange}>
            Line One: <input name="lineOne">

            </input>
            Line Two: <input name="lineTwo">

            </input>
            City: <input name="city">

            </input> <br/>
            State: <input name="state">

            </input>
            Zip Code: <input name="zipCode">

            </input>
            Phone Number: <input name="phoneNumber">

            </input>
        </form>
    )
}

export default FormTwo;