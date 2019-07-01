class myComponent extends React.Component{
	render(){
		return (
			<div> 
				<h2>
          he
				  {this.props.arg}.
				</h2>
			</div>
		);
	}
}

class Path extends React.Component {
	constructor(props) {
	    super(props);
	  }

	renderSquare() {
    const thing = React.createElement(myComponent, {arg: 'test'});
	    return thing;
	}
	render() {
		return (
			<div>
				<h2>im the path</h2>
				<div>
					{this.renderSquare()}
				</div>
			</div>
		);
	}
	
}

ReactDOM.render(
	<Path />,
	document.getElementById('root')
);
