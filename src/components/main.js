import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route} from 'react-router-dom';


import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './project';
import Resume from './resume';


const Main = () => (
<Switch>
<Route exact path="/" component={LandingPage} />
<Route path="/aboutme" component={AboutMe}/>
<Route path="/contact" component={Contact}/>
<Route path="/project" component={Projects}/>
<Route path="/Resume" component={Resume}/>
</Switch>
)



export default Main;
