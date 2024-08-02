import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photo-item">
              <div className="photo-detail">
                <img
                  src="https://images.pexels.com/photos/27053549/pexels-photo-27053549.jpeg?w=200&h=200&fit=crop&dpr=1"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photo-item">
              <div className="photo-detail">
                <img
                  src="https://images.pexels.com/photos/27053549/pexels-photo-27053549.jpeg?w=200&h=200&fit=crop&dpr=1"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photo-item">
              <div className="photo-detail">
                <img
                  src="https://images.pexels.com/photos/27053549/pexels-photo-27053549.jpeg?w=200&h=200&fit=crop&dpr=1"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photo-item">
              <div className="photo-detail">
                <img
                  src="https://images.pexels.com/photos/27053549/pexels-photo-27053549.jpeg?w=200&h=200&fit=crop&dpr=1"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Log Out</button>
      </div>
    </div>
  );
};

export default Details;
