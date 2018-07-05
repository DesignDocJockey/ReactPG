import React from 'react';

export default class Score extends React.Component {
    constructor(props) {
        //calls the parent React.Component() to get the 'this' reference
        super(props);          
        //initialize state in the constructor         
        this.state = {score: 0};
        //make 'this' available on click handlers
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore() {
        console.log('increment button clicked');
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore() {
        console.log('decrement button clicked');
        this.setState({
            score: this.state.score - 1
        });
    }
    
    render() {
        return (
            <div>
                <h2>Score board for {this.props.teamName}</h2>
                <div>
                        Score: {this.state.score} <br/>
                        <button onClick={this.incrementScore}>+</button>
                        <button onClick={this.decrementScore}>-</button>
                </div>
            </div>
        );
    }
}
