// class, function component
// state, lifecycle

// 16.8: function component + hook => stateful function component

import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       text: "",
//     };
//   }

//   componentDidMount() {
//     console.log("component did mount");
//   }

//   componentDidUpdate() {
//     console.log("component did update");
//   }

//   render() {
//     return (
//       <div>
//         <p>Butona {this.state.count} kez tıkladınız</p>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("component did mount");

    const countData = localStorage.getItem("count");
    if (countData) {
      setCount(Number(countData));
    }
  }, []);

  useEffect(() => {
    console.log("count");
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    console.log("text");
  }, [text]);

  return (
    <div>
      <p>Butona {count} kez tıkladınız</p>
      <p>Girilen Text : {text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          e.preventDefault;
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setCount(props.count);
        }}
      >
        Reset
      </button>
    </div>
  );
};

App.defaultProps = {
  count: 0,
  text: "deneme",
};

ReactDOM.render(<App />, document.getElementById("root"));
