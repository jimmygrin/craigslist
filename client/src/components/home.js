import React from 'react'
import { Link } from 'react-router-dom'

import { useUsers } from '../hooks'

export default props => {

    const { users } = useUsers()
    console.log(users)
    return (
        <div id="main">
        <div id="leftcol">
            <div id="cl-link"><Link to="/">craiglist</Link></div>
            <div className="small-text"><Link to="/">create a posting</Link></div>
            <div className="small-text"><Link to="/">my account</Link></div>
            <input id="search" type="text" placeholder="search craigslist"></input>
            
            <div id="left-links">
                <p><Link to="#">help, faq, abuse, legal</Link></p>
                <p><Link to="#">avoid scams fraud</Link></p>
                <p><Link to="#">personal safety tips</Link></p>
                <p><Link to="#">terms of use</Link></p>
                <p><Link to="#">privacy policy</Link></p>
                <p><Link to="#">system status</Link></p>   
            </div> 
            <div id="left-link-bottom">
            <p><Link to="#">about craigslist</Link></p>
            <p><Link to="#">craigslist is hiring in sf</Link></p>
            <p><Link to="#">craigslist open source</Link></p>
            <p><Link to="#">craigslist blog</Link></p>
            <p><Link to="#">best-of-craigslist</Link></p>
            <p><Link to="#">craigslist TV</Link></p>
            <p><Link to="#">"craigslist joe"</Link></p>
            <p><Link to="#">craig connects</Link></p>
          
        

            </div>
        </div>
        <div id="centercol">
            <div id="city">
                <p>las vegas, NV</p>
            </div>
            <div id="categories">
                <div id="leftcat">
                    <div><Link to="/community">community</Link></div>
                  <div>
                   { users.map(user => (
                <p key={user.id}>{user.name}</p>
                ))}
                </div>
                    
                    <div><Link to="/housing">housing</Link></div>
                    <div><Link to="/jobs">jobs</Link></div>
                </div>
                <div id="centercat">
                    <div><Link to="/services">services</Link></div>
                    <div><Link to="/forsale">for sales</Link></div>
                    <div><Link to="/personals">personals</Link></div>
                </div>
                <div id="rightcat">
                    <div><Link to="/gigs">services</Link></div>
                    <div><Link to="/resumes">resumes</Link></div>
                </div>
            </div>
        </div>  
        <div id="rightcol">
            <select id = "dropdown">
               <option value = "">English</option>
               <option value = "2">Spanish</option>
               <option value = "3">Mandarin</option>
               <option value = "4">French</option>
             </select>
             <p id="nearby">near by cl</p>
             <div id="cities">
                <p><Link to="#">phoenix</Link></p>  
                <p><Link to="#">salt lake city</Link></p>  
                <p><Link to="#">los angeles</Link></p>  
                <p><Link to="#">orange county</Link></p>  
                <p><Link to="#">san diego</Link></p>  
                <p><Link to="#">elko</Link></p>  
                <p><Link to="#">reno</Link></p>  
                <p><Link to="#">tucson</Link></p>  
                <p><Link to="#">st george</Link></p>  
                <p><Link to="#">mesquite</Link></p> 
            </div> 
            <div id="regions">
                <p><Link to="#">us cities</Link></p> 
                <p><Link to="#">us states</Link></p> 
                <p><Link to="#">canada</Link></p> 
                <p><Link to="#">cl worldwide</Link></p> 

            </div>
        </div>  
        </div>
    )
}

