import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
  render(){
return(
      <div style ={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoODd8fnuvNgGQ1SWAGFKknXOBx5sfzAw00n-VGcJvu1FDzO7U"
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>

            <hr/>
            <p> Html/CSS | BootStrap | JavaScript | React | Angular | Python </p>
<div className="social-links">
{/* Linked in  */}
<a href="http://google.com" rel="noopener noreferrer"target="_blank">
<i className="fa fa-linkedin-square" aria-hidden="true"/>
</a>
{/* Github  */}
<a href="http://google.com" rel="noopener noreferrer"target="_blank">
<i className="fa fa-github-square" aria-hidden="true"/>
</a>
{/* Freecodecamp  */}
<a href="http://google.com" rel="noopener noreferrer"target="_blank">
<i className="fa fa-free-code-camp" aria-hidden="true"/>
</a>
{/* Youtube */}
<a href="http://google.com" rel="noopener noreferrer"target="_blank">
<i className="fa fa-youtube-square" aria-hidden="true"/>
</a>
</div>
          </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
