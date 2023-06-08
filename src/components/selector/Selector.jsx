import React from "react";
import "./Selector.scss";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const Selector = (props) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  console.log(props.data);

  return (
    <>
      <div className={`${props.className}`}>
        <div className={`${props.className}-container`}>
          <div
            className={`${props.className}-container-top space-between`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <h6>Services</h6>
            {/* <h6>Choose font</h6> */}
            <div className={`${props.className}-container-top-icon`}>
              <RiArrowDownSLine />
            </div>
          </div>

          {isActive && (
            <div className={`${props.className}-container-menus`}>
              <div className={`${props.className}-container-menus-content`}>
                {props.data.map((item) => {
                  return (
                    <>
                      <Link to={item.path}>
                        <div
                          className={`${props.className}-container-menus-content-item`}
                          onClick={(e) => {
                            setIsActive(!isActive);
                          }}
                          key={item.id}
                        >
                          {item.title}
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Selector;
