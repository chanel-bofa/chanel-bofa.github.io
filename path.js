function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class Component extends React.Component{
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

class Path extends React.component {
	renderComponent(arg, isArrow){
		return <Component isArrow={isArrow} arg={arg}>
	}
	render() {
		return (
			<div>
			{this.renderComponent('hello', false)}
			{this.renderComponent('right', true)}
			{this.renderComponent('World', false)}
			</div>
		);
	};
	
}

ReactDOM.render(
	<Path />,
	document.getElementById('root')
);
