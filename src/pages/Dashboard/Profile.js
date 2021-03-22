import React from "react";

export default function Profile() {
  return (
    <div>
      <div id="dashboard-content" className="m-4">
        <div className="shadow1 p-5 w-100">
          <h1>Profile</h1>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-6 col-12 text-center">
                  <img className="p-2 w-50" src="logo512.png" />
                </div>
                <div className="col-sm-6 col-12">
                  <div className="row">
                    <div className="shadow1 row mt-4 p-2">
                      <div className="col-6 bold">Name:</div>
                      <div className="col-6">React App</div>
                    </div>
                    <div className="shadow1 row mt-4 p-2">
                      <div className="col-6 bold">Email:</div>
                      <div className="col-6">info@reactapp.com</div>
                    </div>
                    <div className="shadow1 row mt-4 p-2">
                      <div className="col-6 bold">Status:</div>
                      <div className="col-6 text-success">Currently Active</div>
                    </div>
                    <div className="shadow1 row mt-4 p-2">
                      <div className="col-6 bold">Last Seen:</div>
                      <div className="col-6">2 weeks ago.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
