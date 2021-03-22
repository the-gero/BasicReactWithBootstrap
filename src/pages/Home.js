import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="row shadow1 m-5 p-5">
                    <h1 className="text-center col-12">
                        Welcome to Gero.com
                    </h1>
                    <div className="col-12">
                        <div className="row">
                            <div className="shadow2 col-sm-3 col-12 text-center pt-4">
                                <img className="w-50" src="logo512.png"/>
                            </div>
                            <div className="shadow2 col-sm-9 col-12 p-5">
                                Hello! This is my first front-end Only website. A project suggested by my brother to understand the working of react and its components.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}