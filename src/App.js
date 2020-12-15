import React, { useState } from "react";
import "./styles.css";
var emojidict = {
  "⛔": " No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen",
  "↩️": "Right Arrow Curving Left",
  "↪️": "Left Arrow Curving Right",
  "⤴️": " Right Arrow Curving Up",
  "⤵️": " Right Arrow Curving Down",
  "🔃": "Clockwise Vertical Arrows",
  "🔄": "Counterclockwise Arrows Button",
  "🔙": "Back Arrow",
  "🔚": "End Arrow",
  "🔛": " On! Arrow",
  "🔜": "Soon Arrow",
  "🔝": "Top Arrow"
};
var signweknow = Object.keys(emojidict);

export default function App() {
  const [meaning, setmeaning] = useState(" ");

  function changehandler(event) {
    var userinput = event.target.value;
    var meaning = emojidict[userinput];

    if (meaning === undefined) {
      meaning = "This Sign is not available in our database";
    }
    setmeaning(meaning);
  }
  function EmojiClick(emoji) {
    var meaning = emojidict[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>What does the SIGN means?</h1>
      <input id="box" type="textbox" onChange={changehandler}></input>
      <p>{meaning}</p>
      <h3 style={{ color: "blueviolet" }}>Signs we know:</h3>
      {signweknow.map(function (emoji) {
        return (
          <span onClick={() => EmojiClick(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
      <footer></footer>
    </div>
  );
}
