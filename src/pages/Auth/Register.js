import React from 'react'

export default function Register() {
    return (
        <div className="card mx-auto w-50 mx-auto mt-5">
            <h1 className="card-header">Register</h1>
            <form action="/dashboard" className="card-body">
                <div className="form-group m-2">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control col-md-6"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control col-md-6"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control col-md-6"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control col-md-6"/>
                </div>
                <div className="form-group m-2">
                    <input type="submit" className="form-control btn btn-dark" value="Submit" />
                </div>
            </form>
        </div>
    )
}
