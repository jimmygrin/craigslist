import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <div className="cat-toprow">
            <p><Link to="/">CL</Link></p>
            <select id = "dropdown">
               <option value = "">las vegas</option>
               <option value = "2">phoenix</option>
               <option value = "3">los angeles</option>
               <option value = "4">salt lake city</option>
             </select>
             <p>></p>
             <select id = "dropdown">
               <option value = "">community</option>
               <option value = "2">for sales</option>
               <option value = "3">gigs</option>
               <option value = "4">housing</option>
               <option value = "4">jobs</option>
               <option value = "4">personals</option>
               <option value = "4">resumes</option>
               <option value = "4">services</option>
             </select>
             <p>></p>
             <select id = "dropdown">
               <option value = "">all</option>
               <option value = "2">artist</option>
               <option value = "3">childcare</option>
               <option value = "4">general</option>
             </select>

        </div>
    )
}