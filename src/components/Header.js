import React, {useState} from 'react'
import PropTypes from 'prop-types'
function Header(props) {

	
  	const onClick = (e) =>{
	  	e.preventDefault();
		let uname = document.getElementById('EnterName').value;
		document.getElementById('name').innerHTML = uname + "'s " +  props.title
		document.getElementById('nameForm').style.visibility = "hidden";
		
  	}
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" id = "name"></a>
          <form className="d-flex" id = 'nameForm'>
            <input className="form-control me-2" type="search" id = "EnterName" placeholder="Name" aria-label="Search"/>
            <button className="btn btn-outline-dark" type="submit" onClick = {onClick}>Name</button>
          </form>
        </div>
      </nav>
    )
}

Header.defaultProps = {
    title: "Sanyam's ToDos"
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header
