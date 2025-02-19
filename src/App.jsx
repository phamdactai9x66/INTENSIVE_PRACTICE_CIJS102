import React from "react";
import "./App.css";
import Card from "./Components/Card";
import { chatAI } from "./Service/genmini";
import Modal from "./Components/Modal";

// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = React.createContext();

const listData = [
  {
    type: "user",
    message: "abc",
  },
  {
    type: "bot",
    message: "hello",
  },
];

function App() {
  const [modal, setModal] = React.useState(false);

  const [infoUser, setInfoUser] = React.useState({
    username: "tai.pham",
    age: 25,
  });

  const handleModal = (statusModal) => {
    setModal(statusModal);
  };

  return (
    <>
      <MyContext.Provider value={{ infoUser, handleModal }}>
        <div className="m-auto max-w-5xl bg-slate-400">
          <div>
            <header>
              <input type="text" placeholder="search" />
            </header>
          </div>
          <main>
            <div className="flex columns-4 " style={{ flexWrap: "wrap" }}>
              {/* card1 */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </main>
        </div>

        <button className="btnAssistant">
          <div className="parentBox">
            <button onClick={() => handleModal(true)}>assistant</button>
            {modal ? <Modal handleModal={handleModal} /> : null}
          </div>
        </button>
      </MyContext.Provider>
    </>
  );
}

export default App;
