import React, { useEffect, useState } from 'react'
import axios from "axios"
import movie from "./MoviwApi.module.css"
const MovieApi = () => {
    // let [loading, setLoading] = useState(flase)
    let [movies, setMovies] = useState([])
    let [search, setSearch] = useState("titanic")

    useEffect(() => {
        MovieData()
    }, [])
    async function MovieData() {
        try {
            // setLoading(true)
            let response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=92689fae`)
            // setMovies(data)
            setMovies(response.data.Search)

        }
        catch (err) {
            setMovies([])
        }
    }

    let handleSearch = () => {
        MovieData()
    }

    return (
        <div className={movie.container}>
            <h1>Search Movie</h1>
            <div className={movie.searchBar}>
                <input type="text" placeholder='Search movie'
                    onChange={e => { setSearch(e.target.value) }} />
                <button onClick={handleSearch}>Search</button>
                {/* {console.log(search)} */}
            </div>

            <div className={movie.card}>
                {movies.map(({ Title, imdbID, Poster }) => {
                    return (
                        <div className={movie.card1}>
                            <h2>Title:{Title}</h2>
                            <h3>IMDBID:{imdbID}</h3>
                            <img src={Poster} alt="" />
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default MovieApi


