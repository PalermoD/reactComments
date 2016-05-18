var data = [
  {id: 1, author: "Melissa Bee", text: "some whatever comment"},
  {id: 2, author: "Andre Deschamps", text: "Data needs to be serverd from server on prod"}
];


var CommentBox = React.createClass({
	render: function(){
		return(
			<div className="CommentBox">
			   <h1>Comments</h1>
			   <CommentList data={this.props.data} />
			   <CommentForm />
			</div>
		);
	}
});


var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
               <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment> 
			); 
		});
		return (
			<div className="commentList">
			  {commentNodes}
			 </div>
		);
	}
});


var CommentForm = React.createClass({
	render: function(){
		return(
			<div className="commentForm">
			   
			</div>
	    );
	}
});

var Comment = React.createClass({
    rawMarkup: function(){
    	var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    	return { __html: rawMarkup};
    },

	render: function(){
		return (
			<div className="comment">
			    <h2 className="commentAuthor">
			       {this.props.author}
			    </h2>
			       <span dangerouslySetInnerHTML={this.rawMarkup()} />
		    </div>
		);
	}
});

ReactDOM.render(
	<CommentBox url="/api/comments" />,
    document.getElementById('content')
);