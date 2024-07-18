import React,{useState} from "react";

function UserSignUp() {

    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    function userFormSubmit(){
        if(!name || !email || !password){
            alert('please fill all the fileds')
        }else {
            console.log(name, email, password)
        }
    }

    return (
        
        <>

            <section>

                <div className='userform-wp mt-5 mb-5'>
                    <div className='container-fluid'>
                        <div className="text-center mb-5">
                            <h3>User Registration</h3>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input type="text" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  />
                            </div>
                            <div className="mb-4">
                                <input type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}  />
                            </div>
                            <button className='cmnbtn'onClick={userFormSubmit} type="submit">Submit</button>
                        </form>
                    </div>
                </div>

                {/* <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1> */}

            </section>

        </>
    );
}

export default UserSignUp;