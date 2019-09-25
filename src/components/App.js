import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import prestonprofile from '../assets/prestonprofile.jpg';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={prestonprofile} alt='profile' className='profile' />
                <h1>Hello, I'm Preston!</h1>
                <p>I'm a front end developer.</p>
                <p>I'm always looking forward to working on meaningful projects that challenge me.</p>
                <p>I developed this portfolio using React.js.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live near Salt Lake City, and code every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I love spending time with my wife and children, writing music, playing guitar and rooting for my favorite sports teams.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;