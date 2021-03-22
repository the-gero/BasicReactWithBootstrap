import React from "react";

export default function Settings() {
  return (
    <div>
      <div id="dashboard-content" className="m-4">
        <div className="shadow1 p-5 w-100">
          <h1>Settings</h1>
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
                      <a className="btn btn-dark">Hello</a>
                    </div>
                    <div className="shadow1 row mt-4 p-2">
                      <a className="btn btn-dark">Hello</a>
                    </div>
                    <div className="shadow1 row mt-4 p-2">
                      <a className="btn btn-dark">Hello</a>
                    </div>
                    <div className="shadow1 row mt-4 p-2">
                      <a className="btn btn-dark">Hello</a>
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
