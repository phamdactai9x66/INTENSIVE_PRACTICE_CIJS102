import React from "react";
import { MyContext } from "../App";

const UserInfo = () => {
  const myValue = React.useContext(MyContext);

  const handleBtn = () => {
    myValue.handleModal && myValue.handleModal(true);
  };

  return <button onClick={handleBtn}>card detail</button>;
};

export default UserInfo;
