import React, {Component} from 'react';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
      		shakeSpeare: ""
    	}
	}

	componentDidMount() {
	// save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this

    // fetch a poem
    let poemApi = 'http://ShakeItSpeare.com/api/poem';
    fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({ shakeSpeare: json.poem });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      })
  	}

  	render () {
  		let poetry = this.state.shakeSpeare;
  		if (this.state.shakeSpeare){
    	  return (
      		<div>
        		<h1>Thanks for visiting my awesome website!</h1>
        		<p>Here is a joke I really like:</p>
          		<img src="https://i.redd.it/o33ryb4zfc6z.jpg" alt="It turns out computers are just flattened rocks with lightning in them" width="300px" />
          		<h1>My favorite Shakespeare poem: </h1>
          		{poetry}
            </div>
    	)
    	}
    	return (
       <div>
         <h1>My favorite Shakespeare poem:</h1>
         Loading...
       </div>
     )
  	}
}

export default Home