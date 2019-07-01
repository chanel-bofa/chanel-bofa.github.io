function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class myComponent extends React.Component{
	render(){
		return (
			<div> 
				<h2>
				props.arg is {this.props.arg}.
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
	    return <myComponent arg={hi}/>;
	}
	render() {
		return (
			<div>
				<h2>im the path</h2>
				<div>
					{this.renderComponent()}
				</div>
			</div>
		);
	}
	
}

ReactDOM.render(
	<Path />,
	document.getElementById('root')
);
