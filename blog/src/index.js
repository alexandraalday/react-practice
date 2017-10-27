import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

let post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
}

ReactDOM.render(
	<Post 
		title={post.title}
		author={post.author}
		body={post.body}
		comments={post.comments}
	/>, 
	document.getElementById('root'));
registerServiceWorker();
