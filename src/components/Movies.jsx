import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({handleAddtoWatchList, handleRemoveFromWatchList , watchList}) => {

  const [movies,setMovies] = useState([])
  const [pageNo,setPageNo] = useState(1)

  const handlePrev =()=>{
    if(pageNo ==1){
      setPageNo(1)
    }else{
    setPageNo(pageNo-1)
    }
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3e97aa8c1c44f2e3fdb70156a3828a4c&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      
    })
  },[pageNo])
  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around m-10 gap-5'>
        
        {movies.map((movieObj)=>{
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}  watchList={watchList} />
        })}
      </div>

      <Pagination pageNo={pageNo} handlePrev={handlePrev}  handleNext={handleNext}/>
    </div>
  )
}

export default Movies

