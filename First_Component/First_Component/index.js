function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    <div>
      <h1>Your number is {num}</h1>;<p>{num === 7 ? "Congrats" : "Unlucky"}</p>
    </div>;
  }
}

ReactDom.render(<NumPicker />, document.getElementById("root"));
