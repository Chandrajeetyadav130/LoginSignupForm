import axios from "axios"
import { useState } from "react"
import {Link} from "react-router-dom"
const Registration = () => {
    const [inputReg, SetInputReg] = useState({
        userName: "",
        password: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:8000/register", inputReg)
        SetInputReg({
            userName: "",
            password: ""
        })
        console.log(response.data)


    }
    const handleRegInput = (e) => {
        const { name, value } = e.target;
        SetInputReg({ ...inputReg, [name]: value })

    }
    return (
        <>
            <div className="container-fluid my-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-8 col-12 formDiv">
                        <form onSubmit={handleSubmit}>
                            <h2>Register user</h2>
                            <div className="row gap-2">
                                <label htmlFor="userName">userName</label>
                                <div className="col-12">
                                    <input type="text" name="userName" value={inputReg.userName} onChange={handleRegInput} required />

                                </div>
                                <label htmlFor="password">password</label>
                                <div className="col-12">
                                <input id="password" type="password" name="password" value={inputReg.password} onChange={handleRegInput} required/>

                                </div>
                                <div className="col-12">
                                <button className="loginRegisterBtn" type="submit">Register</button>

                                </div>
                                <div className="col-12">
                                  <p>If you already register?click to login</p>
                                  <Link to="/Login">click to login</Link>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
            {/* <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" value={inputReg.userName} onChange={handleRegInput} required/>
            <input type="password" name="password" value={inputReg.password} onChange={handleRegInput} required/>
            <button type="submit">Register</button>
        </form> */}

        </>
    )
}
export default Registration