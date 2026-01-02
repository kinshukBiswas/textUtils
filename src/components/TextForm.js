import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase(); // block-scope variable
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase(); // block-scope variable
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const textto0 = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          placeholder="Enter Text here..."
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "#1b3f81" : "grey",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={textto0}>
          clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          copy text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.trim() === ""
            ? 0
            : text
                .trim()
                .split(/\s+/)
                .filter((element) => element.length !== 0).length}{" "}
          words, {text.length} characters
        </p>
        <p>
          reading time:{" "}
          {0.008 *
            (text.trim() === ""
              ? 0
              : text
                  .trim()
                  .split(/\s+/)
                  .filter((element) => element.length !== 0).length)}{" "}
          minutes
        </p>
      </div>
    </>
  );
}
