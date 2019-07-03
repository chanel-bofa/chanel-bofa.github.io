class MyComponent extends React.Component{
  returnArrow(arg){
    var answer = <h2>{arg}</h2>;
    switch(arg){
      case "right":
        answer = <h2> --> </h2>;
        break; 
    }
    return answer;
  }
  render(){
    return(
			<div> 
				{this.returnArrow(this.props.arg)}
			</div>
		);
	}
 }


class Path extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	newRole: ["newRole1", "newRole2"],//this.getParameterByName('newRole') ,
		    oldRole: "oldRole",//oldRole: this.getParameterByName('oldRole'),
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
	renderComponent(arg){
		const Component = React.createElement(MyComponent, {arg: arg});
		return Component;
	}
	render() {
		return (
			<div id="path_holder">
				<div>
				<h2>I'm the path</h2>
				{this.renderComponent("howdy")}
				</div>
				<div>
				{this.renderComponent("right")}
				</div>
			</div>
		);
	}
	
}
ReactDOM.render(
	<Path />,
	document.getElementById('root')
);
