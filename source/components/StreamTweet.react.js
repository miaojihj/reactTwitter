var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
    //在这里定义其他组件生命周期方法
    getInitialState: function() {
        console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
        return {numberOfCharactersIsIncreasing: null, headerText: null};
    },

    componentWillMount: function() {
        console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
        this.setState({numberOfCharactersIsIncreasing: true, headerText: 'Latest public photo from Twitter'});
        window.Snapterest = {
            numerOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },

		componentDidMount: function(){
			console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

			var componentDOMRepresentation =ReactDOM.findDOMNode(this);
			window.snapterest.headerHtml=componentDOMRepresentation.childern[0].outerHTML;
			window.snapterest.tweetHtml=componentDOMRepresentation.childern[1].outerHTML;
		},

		componentWillUnmount:function(){
			console.log('[Snapterest] StreamTweet: 4. Running componentWillUnmount()');
			delete window.snapterest;
		},

    render: function() {
        console.log('[Snapterest] StreamTweet:Running render()');
        return (
            <section>
                <Header text={this.state.headerText}/>
                <Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection}/>
            </section>
        );
    }
});

module.exports = StreamTweet;
