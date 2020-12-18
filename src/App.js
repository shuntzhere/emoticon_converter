import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "winking",
  "🤗": "hugging",
  "😪": "sleepy",
  "🥵": "hot",
  "🥶": "cold",
  "😵": "dizzy",
  "🤓": "nerd",
  "😟": "worried",
  "🤧": "sneezing",
  "😨": "fearful",
  "🤔": "thinking",
  "🤪": "zany",
  "🤫": "shushing",
  "😒": "unamused ",
  "🤥": "lying",
  "🥳": "partying",
  "😫": "tired",
  "😣": "persevering",
  "😀": "grinning",
  "😑": "expressionless"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Here is the expression");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Unavailable expression");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>Know your emoticon</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%",
          backgroundColor: "#dfe6e9"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
