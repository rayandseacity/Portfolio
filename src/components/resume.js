import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
  render(){
return(
<div>
<Grid>
<Cell col={4}>
<div style={{textAlign: 'center'}}>
<img
src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
alt="avatar"
style={{height:'200px'}}
/>
</div>

<h2 style={{paddingTop: '2em'}}>Raymond Nong</h2>
<h4 style={{color: 'grey'}}>Programmer</h4>
<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
<p>is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
 <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
 <h5>Address</h5>
 <p> Hacker Way Menlo Park, 94025</p>
 <h5>Phone</h5>
 <p>(123)456-7890</p>
 <h5>Email</h5>
 <p>someone@gmail.com</p>
 <h5>Web</h5>
 <p>mywebsite.com</p>
 <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
</Cell>
<Cell className="resume-right-col" col={8}>
<h2>Education</h2>


<Education
startYear={2002}
endYear={2006}
schoolName="My University"
schoolDescription="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
/>

<Experience
startYear={2009}
endYear={2012}
schoolName="My 2nd University"
schoolDescription="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
/>
<hr style={{borderTop:'3px solid #e22947'}}/>
<h2> Experience</h2>

<Experience
startYear={2012}
endYear={2016}
jobName="Second Job"
jobDescription="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
<hr style={{borderTop: '3px solid #e22947'}}/>
<h2>Skills</h2>
<Skills
skill="javaScript"
progress={100}

/>
<Skills
skill="html/css"
progress={100}

/>
<Skills
skill="React"
progress={25}

/>
<Skills
skill="android"
progress={25}

/>


</Cell>
</Grid>
</div>
)
  }
}

export default Resume;
