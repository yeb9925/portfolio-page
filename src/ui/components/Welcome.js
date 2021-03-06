import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcome-container">
        <div className="first-paragraph-container">
          <div>
            <h1 className="first-line">Hi, my name is</h1>
            <h1 className="second-line">Tim Han</h1>
            <h1 className="third-line">Software Engineer</h1>
          </div>
          <div className="profile-image-container">
            <img className="profile-pic" src="./profile.png"/>
          </div>
        </div>
        <div>
          <p className='fourth-line'>
            {'\I\'m a software engineer based in New York, NY specializing in building web applications with 2 year experience. I currently work at '}
            <span><a href='https://spotify.com/' target='_blank' style={{color: '#45ce95', textDecoration: 'none'}}>{'Spotify'}</a></span>
            {' as a Martech Engineer.'}
          </p>
        </div>
        <div>
          <p className='fifth-line'>
            {'I also work as a freelance web developer creating websites. Feel free to check out the websites I have already made and reach out!'}
          </p>
        </div>
        <div className="email-me-container">
          <div className="email-me">
            <h1 className="email"><a href="mailto:seungt.han@gmail.com" style={{textDecoration: 'none', color: '#0e162f'}}>Email</a></h1>
          </div>
        </div>
      </div>
    )
  }
}
