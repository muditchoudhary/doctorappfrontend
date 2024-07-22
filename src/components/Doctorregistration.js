import React, { useState } from "react";
export default function Doctorregistration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [specialisation, setspecialisation] = useState("");
    function userSubmit(e) {
        // e.preventDefault();

        if (!name || !email || !password || !specialisation) {
            alert('Please Fill All The Fields')
        }
        else {
            console.log(name, email, password, specialisation)
        }
    }
    return (
        <>
            <section className="imgbg">
                <div className="backbg">
                    <div className="text">Doctor Registration</div>
                    <div className='userform-wp mt-3 mb-5'>
                        <div className='container-fluid'>
                            <div className="text-center mb-4">
                                <h3>Doctor Registration</h3>
                            </div>
                            <form >
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" onChange={(e) => setspecialisation(e.target.value)} placeholder="Specialisation" />
                                </div>
                                <button className="cmnbtn" onClick={(e) => userSubmit(e)} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}