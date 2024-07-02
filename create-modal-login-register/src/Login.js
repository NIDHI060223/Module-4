import React from 'react'

function Login() {
    return (
        <div>
            <div className="container justify-content-start mt-5 my-5">
                <h3>Modal Login Form</h3>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Open modal
                </button>
            </div>

            {/* login modal */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content justify-content-center">

                        <div className="modal-header">
                            <h4 className="modal-title">Login To My Account</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form action="/action_page.php">
                                <div className="mb-3 mt-3">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>
                                <div className="form-check mb-3 align-items-center">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                    </label>
                                </div>

                                <div className='login'>
                                <button type="submit" className="login btn btn-primary mb-3 " style={{ width: "300px" }}>Login</button>  
                                </div>
                               
                            </form>
                             
                             <div className="pass">
                                <p className='forgot mb-3'>Forgot Your Password?</p>
                                <p className='text-primary'>Create A New Account</p>
                             </div>
                           

                            
                        </div>

                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
