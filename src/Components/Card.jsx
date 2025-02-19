import React from "react";
import UserInfo from "./UserInfo";

const Card = (props) => {
  return (
    <div className="card">
      {/* img  product */}
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/ca0b/6a31/7432ac0af2421df1206eb2d057c7b6e1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IufPV4xgpxyIkHE~23Y1xTUcK7gJ8tdL8J59-qd1QKLyEQYk5mqBtmJotxupH~ypb3rvl24knvv9FKzN9BIHRlf4QQZ-Iwhul93l~0REOtyogaLvxMmxyZixz7pHuKRlcptOwdev3P3Ngzb-ykvXoakIgUr~zTvepMj2ibk2TEzXcXF~werrwzZCk20hyZyvhWj0aXavUapILbxWpzeXo7dfB28i9xib3IKSPxxPxRFn7g2haxcXUUi8Nf7bupq4g8fDOMKAWhkr3yoIyzPNQIilPHFDXVU59IVRnv~hZen88YqoXgxPZvBqvT686vezCKq1Vx9UUwbOtNWIKtvN2w__"
          alt=""
        />
      </div>

      {/*  content*/}
      <div>
        <p>Apple</p>

        <p>2020 Apple MacBook Air Laptop: Apple M1 Chip</p>
        <p>
          <span>$1024.99+</span>
        </p>
      </div>

      {/*  action product*/}

      <div>
        {/* <button>View Deal</button> */}
        <UserInfo />
        {/* <button>userInfo:{props.username}</button> */}
      </div>
    </div>
  );
};

export default Card;
