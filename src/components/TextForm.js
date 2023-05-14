import "../App.css";
import React, { useState } from "react";

export default function TextForm(props) {
  var styleElement = document.getElementById("placeholderStyle");
  if (props.mode === "dark") {
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "placeholderStyle";
      document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = "#exampleFormControlTextarea1::placeholder { color: white; }";
  } else {
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "placeholderStyle";
      document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = "#exampleFormControlTextarea1::placeholder { color: black; }";
  }
 
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to upperCase", "success");
  };

  const convertToLowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to lowerCase", "success");
  };
  const convertSentenceCase = () => {
    // let fz=text.Title;
    // setText(fz);

    const arr = text.split(".");
    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const str2 = arr.join(". ");
    console.log(str2);
    setText(str2);
    props.showAlert("Converted to SentenceCase", "success");
  };

  //   const copyToClipBoard=()=>{
  //    var text=document.getElementById("exampleFormControlTextarea1");
  //    text.select();
  //    navigator.clipboard.writeText(text.value);
  // }

  // const copyToClipBoard = () => {
  //   var text = document.getElementById("exampleFormControlTextarea1");
  //   text.select();
  //   if (navigator.clipboard) {
  //     navigator.clipboard.writeText(text.value);
  //     console.log("Text copied to clipboard");
  //   } else {
  //     console.log("Clipboard not available");
  //   }
  // }

  const copyToClipBoard = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text.value)

        .then(() => {
          props.showAlert("Text copied to clipboard", "success");
          console.log("Text copied to clipboard");
        })
        .catch((error) => console.error("Error copying text: ", error));
    } else {
      try {
        var successful = document.execCommand("copy");
        if (successful) {
          console.log("Text copied to clipboard");
        } else {
          console.error("Error copying text");
        }
      } catch (error) {
        console.error("Error copying text: ", error);
      }
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            placeholder="Enter your text"
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "#3b3e40cc" : "#3b3e4029",
              borderColor: props.mode === "dark" ? "grey" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="text-center text-md-start">
          <button
            className="btn btn-primary ms-2 mt-3 text-center"
            onClick={convertToUpperCase}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary ms-3 mt-3 text-center"
            onClick={convertToLowerCase}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary ms-3 mt-3 text-center"
            onClick={convertSentenceCase}
          >
            Convert to SentenceCase
          </button>
          <button
            className="btn btn-primary ms-3 mt-3 text-center"
            onClick={copyToClipBoard}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p>  */}
        <p>
          {text.trim() !== "" ? text.trim().split(" ").length : 0} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * (text.trim() !== "" ? text.trim().split(" ").length : 0)}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the above box to preview here"}
        </p>
      </div>
    </>
  );
}
