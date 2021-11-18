import React from 'react'

const SignupForm = () => {
    return (
        <div>
            <form className="mt-5 p-5">
                <legend className="mb-5">Tell us about yourself...</legend>

                <div className="form-group row">
                    <div className="col-sm">
                        <label htmlFor="userEmail" className="form-label mt-4">Email</label>
                        <input id="userEmail" type="email" className="form-control" placeholder="email"/>
                    </div>
                    <div className="col-sm">
                        <label htmlFor="password" className="form-label mt-4">Password</label>
                        <input id="password" type="email" className="form-control" placeholder="password"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
