import React, { Component } from "react";
import Navbar from "../components/Navbar";

class App extends Component {
    login() {
        this.props.auth.login();
    }
    logout() {
        this.props.auth.logout();
    }
    render() {
        <div>
            <button bsStyle="primary" className="btn btn-margin" onClick={this.goTo.bind(this, 'saved')}>
                Saved
            </button>
            <button bsStyle="primary" className="btn btn-margin" onClick={this.goTo.bind(this, 'specials')}>
                Today's Specials
            </button>
            {
                !isAuthenticated() && (
                    <button id="loginBtn" bsStyle="primary" className="btn btn-margin" onClick={this.logout.bind(this)}>
                        Log Out
                    </button>
                )
            }
        </div>
    };
}

export default App;