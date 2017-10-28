import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const post = {
    title: "Dinosaurs are awesome",
    authors: ["Stealthy Stegosaurus", "Tiny trex", "Iguanodon Ivory"],
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
} 

ReactDOM.render(
	<Post 
		title={post.title}
		authors={post.authors}
		body={post.body}
		comments={post.comments}
	/>, 
	document.getElementById('root'));
registerServiceWorker();
