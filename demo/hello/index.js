class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there</h1>
        <h1>Hello there</h1>
        <h1>Hello there</h1>
      </div>
    );
  }
}

function HelloComponent () {
    return (
        <div>
            <h1>Hello there!</h1>
            <h2>Handsome</h2>
            <h3>Boy</h3>
        </div>
    )
}

ReactDOM.render(<Hello />, document.getElementById("root"));
