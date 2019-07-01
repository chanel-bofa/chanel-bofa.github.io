class myComponent extends React.Component{
	render(){
		return (
			<div> 
				<h2>
				{this.props.arg}.
				</h2>
			</div>
		);
	}
}

class Path extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	newRole: this.getParameterByName('newRole') ,
		oldRole: this.getParameterByName('oldRole'),
	    };
	}
	getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, '\\$&');
	    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	renderComponent(arg, isArrow){
		return <Component isArrow={isArrow} arg={arg}>;
	}
	render() {
		return (
			<div>
			Hello
			{this.renderComponent("howdy")}
			</div>
			World
			<div>
			{this.renderComponent({this.state.newRole})}
			</div>
		);
	}
	
}

ReactDOM.render(
	<Path />,
	document.getElementById('root')
);
