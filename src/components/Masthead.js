import React from 'react'

const Masthead = () => {
    return (
        <div>
            <header className="masthead">
        <div className="container">
            <div className="masthead-subheading">Welcome To Our Studio!</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase" href="#services" style={{backgroundColor : '#ffea00', color : 'black', fontWeight : 'bold', paddingTop : '15px', paddingBottom : '15px', paddingRight : '20px', paddingLeft : '20px'}}>Tell Me More</a>
        </div>
    </header> 
        </div>
    )
}

export default Masthead
