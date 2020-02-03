import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="layout">
                <header className='layout__header'>
                    <div>
                        <NavLink to="/" exact={true} className='layout__navigation' activeClassName='layout__navigation--active'>Home</NavLink>
                        <NavLink to="/profile" className='layout__navigation' activeClassName='layout__navigation--active'>Profile</NavLink>
                    </div>
                    <div>
                        <button>id</button>
                        <button>en</button>
                    </div>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;

