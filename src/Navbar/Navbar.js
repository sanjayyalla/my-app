
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" > Products CRUD</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link " to="/productslist">Product <span className="sr-only">(current)</span></Link>
                            <Link className="nav-link" to="/createproduct">Create Product</Link>
                            <Link className="nav-link" to="/admin">Admin</Link>
                            
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar