import React from 'react'

function Registration() {
    return (
        <div>
            <div className="container justify-content-start mt-3">
                <h3>Modal Registration Form</h3>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myRegisterModal">
                    Open modal
                </button>
            </div>

            {/* registration modal*/}
            <div className="modal" id="myRegisterModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Registration Form</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form className="row g-3">
                            <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Enter Name" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username"  placeholder="Enter Username"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNumber" placeholder="Enter number"/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Enter confirm password"/>
                                </div>
                                
                                <div className='gender row mt-3'>
                                <label for="inputGender" className="form-label">Gender</label>
                                <div className="form-check col-md-4">
                                        <input className="form-check-input" type="radio" id="male"/>
                                            <label className="form-check-label" for="male">
                                                Male
                                            </label>
                                    </div>
                                    <div className="form-check col-md-4">
                                        <input className="form-check-input" type="radio" id="female"/>
                                            <label className="form-check-label" for="female">
                                                Female
                                            </label>
                                    </div>
                                    <div className="form-check col-md-4">
                                        <input className="form-check-input" type="radio" id="prefer"/>
                                            <label className="form-check-label" for="prefer">
                                                Prefer not to say
                                            </label>
                                    </div>
                                </div>
                                    
                                <div className="register justify-content-center">
                                    <button type="submit" className="btn btn-primary" style={{ width: "200px" }}>Register</button>
                                </div>
                            </form>
                        </div>

                    


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration
