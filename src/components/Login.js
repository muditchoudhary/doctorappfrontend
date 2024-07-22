import React, { useState } from "react"
export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function userLogin() {
        if (!email || !password) {
            alert('Please Fill All The Fields')
        } else {
            console.log(email, password)

        }
    }

    // 

    const [activeLogin, setActiveLogin] = useState('user');
    const handleButtonClick = (loginType) => {
        setActiveLogin(loginType);
    };

    return (
        <>
            <section>

                <div className='userform-wp mt-3 mb-3'>
                    <div className='container-fluid'>
                        <div className="loginbtns mb-5">
                            <ul id="login-buttons">
                                <li>
                                    <button
                                        className={activeLogin === 'user' ? 'activebtn' : ''}
                                        onClick={() => handleButtonClick('user')}
                                    >
                                        User Login
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={activeLogin === 'doctor' ? 'activebtn' : ''}
                                        onClick={() => handleButtonClick('doctor')}
                                    >
                                        Doctor Login
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={activeLogin === 'admin' ? 'activebtn' : ''}
                                        onClick={() => handleButtonClick('admin')}
                                    >
                                        Admin Login
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="login-content" style={{ display: activeLogin === 'user' ? 'block' : 'none' }}>
                            <div className="text-center mb-4">
                                <h3>User Login</h3>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <input type="email" onChange={(e) => setEmail(e.target.value) } placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <button className='cmnbtn' type='button' onClick={userLogin}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="login-content" style={{ display: activeLogin === 'doctor' ? 'block' : 'none' }}>
                            <div className="text-center mb-4">
                                <h3>Doctor Login</h3>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <input type="email" onChange={(e) => setEmail(e.target.value) } placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <button className='cmnbtn' type='button' onClick={userLogin}>Login</button>
                                </div>

                            </form>
                        </div>
                        <div className="login-content" style={{ display: activeLogin === 'admin' ? 'block' : 'none' }}>
                            <div className="text-center mb-4">
                                <h3>Admin Login</h3>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <input type="email" onChange={(e) => setEmail(e.target.value) } placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <button className='cmnbtn' type='button' onClick={userLogin}>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}