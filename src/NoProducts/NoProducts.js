import React from 'react'

const NoProducts = () => {
    return (
        <div className="container-fluid" style={{  backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
                <h1 style={{ color: '#ff5733' }}>Oops! No Products Available</h1>
                <p style={{ color: '#33ff77', fontSize: '18px' }}>We apologize, but there are currently no products available.</p>
            </div>
        </div>
    );


}

export default NoProducts