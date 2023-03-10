

const FormOne = ( { handleResponsesChange } ) => {
    const handleChange = (event) => {
        handleResponsesChange(event);
    };
    return (
        <form onChange={handleChange}>
            name: <input name="username">

            </input>
            email: <input name="email" type='email'>

            </input>
            password: <input name="password" type='password'>

            </input>
        </form>
    )
}

export default FormOne;