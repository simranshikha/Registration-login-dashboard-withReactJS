import React, { Component } from 'react';

const Welcome = () => {
    return ( 
        <div className="welcome-wrapper">
            <h2 className="welcome pink">Welcome</h2>
            <h1 className="company-name pink">A<span className="orange">B</span>C</h1>
            <div className="tag-line-wrapper">
                <p>Expect <span className="black">more</span>.</p>
                <p>Expect <span className="black">performance</span>.</p>
                <p>Expect <span className="black">results</span>.</p>
            </div>
            <p>On-demand courses and bite-sized videos to fit your schedule.</p>
            <div className="button-wrapper">
                <button className="btn yellow">Schedule a Demo</button>
                <button className="btn white">Learn more</button>
            </div>
        </div>
     );
}
 
export default Welcome;