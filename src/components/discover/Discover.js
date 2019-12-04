import React, { useEffect } from 'react'
import Carousel from '../carousel/Carousel';
import { connect } from 'react-redux'

import {getDiscover} from '../../actions/moviesActions'

const Discover = ({movies,getDiscover}) => {

  useEffect(() => {
    getDiscover()
  },[])
  
  return (
    <div>
      <Carousel data={movies.nowPlaying.results} mediaType='movie' />
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps,{getDiscover})(Discover)
