import React from 'react'
import LandingContent from './components/LandingContent/LandingContent'
import NavBar from './components/NavBar/NavBar'

const LandingPage = () => {
    return (

        <div>
            <NavBar/>
            <LandingContent main={["As much as we love it, sometimes", <br/>, "version control", <span> can be a pain </span>]} sub="That’s why GitRadar makes it easy to get notified about events your version control system. With GitRadar, you can get notifications when your teammate commits and when your latest release is deployed, straight to Discord."  />
        </div>
        
    );
}


export default LandingPage;