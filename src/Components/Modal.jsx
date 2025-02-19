import React from "react";
import { chatAI } from "../Service/genmini";

const Modal = (props) => {
  const [input, setInput] = React.useState("");

  const [listConversation, setListConversation] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const handleAI = async () => {
    try {
      setLoading(true);
      const res = await chatAI(input);

      setListConversation((preConversation) => {
        return [
          ...preConversation,
          {
            type: "user",
            message: input,
          },
          {
            type: "bot",
            message: res,
          },
        ];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="modal">
      <button
        style={{ fontWeight: 600 }}
        onClick={() => props.handleModal(false)}
      >
        X
      </button>
      <div>
        {/* conversation */}
        <div>
          {/* {listConversation.map(e => {})} */}

          {listConversation.map((e, i) => {
            const { type, message } = e;

            if (type == "user")
              return (
                <div key={i} className="userConversation">
                  {message}
                </div>
              );

            return (
              <div key={i} className="botConversation">
                {message}
              </div>
            );
          })}

          {loading ? "loading..." : ""}
        </div>
        <div>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Ask GenMini"
            style={{ color: "black" }}
          />
          <button onClick={handleAI}>search</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
