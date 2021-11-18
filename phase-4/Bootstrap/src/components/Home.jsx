import React from 'react'
import '../styles/home.css';

const Home = () => {
    return (
        <div className="shadow-lg home-container">
            <div className="jumbotron">
                <h1 className="display-4">
                    Super Cool App!
                </h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque illo beatae obcaecati esse vero, corporis, laborum voluptatibus nihil voluptas ab. Iste eius labore doloribus facere, nobis repellendus maxime dolore, modi iusto, dicta sint et exercitationem ipsa qui soluta cumque officia cum. Atque, sint id.
                </p>
                <hr className="my-4" />
                <p className="lead">
                    <button className="btn home-btn">Sign up!</button>
                </p>
            </div>
        </div>
    )
}

export default Home
