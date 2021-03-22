import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div class="flip-card p-2 mb-5">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h4 className="text-dark p-2">Profile</h4>
              </div>
              <div class="flip-card-back p-2">
                <h4 className="bg-dark p-2">Your profile</h4>
              </div>
            </div>
          </div>
          <div class="flip-card p-2 my-5">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h4 className="text-dark p-2">Section One</h4>
              </div>
              <div class="flip-card-back p-2">
                <h4 className="bg-dark p-2">This is Section One</h4>
              </div>
            </div>
          </div>
          <div class="flip-card p-2 my-5">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h4 className="text-dark p-2">Section Two</h4>
              </div>
              <div class="flip-card-back p-2">
                <h4 className="bg-dark p-2">This is Section Two</h4>
              </div>
            </div>
          </div>
          <div class="flip-card p-2 my-5">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h4 className="text-dark p-2">Section Three</h4>
              </div>
              <div class="flip-card-back p-2">
                <h4 className="bg-dark p-2">This is Section Three</h4>
              </div>
            </div>
          </div>
          <div class="flip-card p-2 my-5">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h4 className="text-dark p-2">Section Four</h4>
              </div>
              <div class="flip-card-back p-2">
                <h4 className="bg-dark p-2">This is Section Four</h4>
              </div>
            </div>
          </div>
          <div class="flip-card p-2 my-5">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h4 className="text-dark p-2">Settings</h4>
              </div>
              <div class="flip-card-back p-2">
                <h4 className="bg-dark p-2">This is Settings</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div id="dashboard-content" className="m-4">
            <div className="shadow1 p-5 w-100">
              <h1>Profile</h1>
              <hr />
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-sm-6 col-12 text-center">
                      <img className="p-2 w-50" src="logo512.png"/>
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
      </div>
    </div>
  );
}
