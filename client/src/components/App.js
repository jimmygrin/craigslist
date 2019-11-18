import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Home from "./home"
import Community from "./community"
import Housing from "./housing"
import Jobs from "./jobs"
import Services from "./services"
import ForSale from "./forsale"
import Personals from "./personals"
import Gigs from "./gigs"
import Resumes from "./resumes"
import Home from "./home"

function App() {

  return (

    <Router>
    <div id="container">
  
 
    
    <Route exact path="/" component={Home} />
    <Route path="/community" component={Community} />
    <Route path="/housing" component={Housing} />
    <Route path="/jobs" component={Jobs} />
    <Route path="/services" component={Services} />
    <Route path="/forsale" component={ForSale} />
    <Route path="/personals" component={Personals} />
    <Route path="/gigs" component={Gigs} />
    <Route path="/resumes" component={Resumes} />
    </div>
    </Router>
  )
}

export default App
