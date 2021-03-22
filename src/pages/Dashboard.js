import React, { useState, useEffect } from "react";
import Profile from "./Dashboard/Profile";
import Settings from "./Dashboard/Settings";
import { Route, Redirect } from "react-router-dom";
export default function Dashboard() {
  const [page, setPage] = useState("undefined");
  
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div
            className="flip-card p-2 mb-5"
            onClick={(e) => setPage("Profile")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4 className="text-dark p-2">Profile</h4>
              </div>
              <div className="flip-card-back p-2">
                <h4 className="bg-dark p-2">Your profile</h4>
              </div>
            </div>
          </div>
          <div
            className="flip-card p-2 my-5"
            onClick={(e) => setPage("Settings")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4 className="text-dark p-2">Settings</h4>
              </div>
              <div className="flip-card-back p-2">
                <h4 className="bg-dark p-2">This is Settings</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div id="dashboard-content" className="m-4">
            {/* {props.page == "profile" ? <Profile /> : <h1>Loading</h1>} */}
            <Route
              render={(props) =>{
                switch (page) {
                  case "Profile":
                    return <Profile/>;
                    break;
                  case "Settings":
                    return <Settings/>;
                    break;
            
                  default:
                    return <Profile/>;
                    break;
                }
              }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
