import React, { Component } from 'react';
import { Header, Footer } from './index';

export default class App extends Component {
    render() {
        return (
            <div className="site">
                <Header />
                <div className="page-container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
