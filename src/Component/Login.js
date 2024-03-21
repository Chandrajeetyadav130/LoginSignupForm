import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const Login = () => {
    const [loginData, setLoginData] = useState({
        userName: "",
        password: ""
    })
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/login", loginData)
            const { message } = response.data;
            if (message) {
                alert(message)
            }
            else {
                alert("Login not success")
            }
            setLoginData({ userName: "", password: "" })
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleLoginChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row my-4 centerDiv px-4">
                    <div className="col-lg-4 col-md-8 formDiv col-12">
                        <form onSubmit={submitForm}>
                            <h2>Login</h2>
                            <div className="row py-2 gap-2">
                                <label htmlFor="userName">userName</label>
                                <div className="col-12">
                                    <input id="userName" type="text" name="userName" value={loginData.userName} onChange={handleLoginChange} required/>
                                </div>
                                <label htmlFor="password">password</label>
                                <div className="col-12">

                                    <input id="password" required type="password" name="password" value={loginData.password} onChange={handleLoginChange} />


                                </div>

                                <div className="col-12">

                                    <button className="loginRegisterBtn" type="submit">Login</button>
                                </div>

                                <div className="col-12">
                                    <Link to="/Registration">Registration</Link>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Login