import React,{useEffect} from 'react'
import { connect } from 'react-redux'

import {getSession} from '../../actions/authActions'
import Loader from '../loader/Loader'

const Dashboard = ({getSession,auth}) => {
  useEffect(() => {
    getSession()
  },[])

  if(auth.loading) return <Loader/>

  return (
    <div>
      dashboard
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps,{getSession})(Dashboard)
