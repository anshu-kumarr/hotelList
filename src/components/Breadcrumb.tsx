import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

function Breadcrumb({path}:{path:string}) {
  return (
    <BreadCrumb>
      <span>
        <FontAwesome style={{padding:'0 5px'}} name="home"/>
        <Link style={{ padding: '0 5px',color:'black',textDecoration: 'none'}} to={'/'}>Hotels</Link>
      </span>
      <span>/</span>
      <Link style={{padding:'0 5px',textDecoration: 'none'}} to={path}><span className="active">Application</span></Link>
    </BreadCrumb>
  )
}

export default Breadcrumb

const BreadCrumb = styled.div`
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
padding:10px;
display:block;
.active{
  color:rgba(0,0,0,0.5);
  font-weight:800;
}
`