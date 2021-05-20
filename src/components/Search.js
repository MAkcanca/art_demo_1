import React, { useEffect, useState } from 'react'
import { useAlgolia } from 'use-algolia'


function Search({ handleResult }) {
    const [query, setQuery] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        handleResult(hits)
    }

    const makeQuery = (event) => {
        event.preventDefault()
        handleResult(hits)
    }

    const handleQueryChange = (event) => setQuery(event.target.value)


    const [searchState, requestDispatch] = useAlgolia(
        process.env.ALGOLIA_APPID,
        process.env.ALGOLIA_SEARCHKEY,
        process.env.ALGOLIA_SEARCHINDEX,
        { query: query }
    );
    const { hits } = searchState;

    useEffect(() => {
        requestDispatch({ query: query });
    }, [query, requestDispatch])
    if (hits.length >= 1 && query) {
        return (
            <div>
                <SearchBox makeQuery={makeQuery} handleQueryChange={handleQueryChange} />
                <p>Bunu mu demek istediniz <a href={hits[0].name} onClick={handleClick}><strong>{hits[0].name}</strong></a></p>
            </div>
        )
    } else if (!query) {
        return (
            <div>
                <SearchBox makeQuery={makeQuery} handleQueryChange={handleQueryChange} />
                <p>Şimdilik yapabildiklerim: Emekle, Esne, Kaşın, Kendine Dokun, Kendini Öp, Mekik, Otur, Takla, Tek Ayak Üstünde Dur, Tokat, Üfle</p>
            </div>
        )
    } else {
        return (
            <div>
                <SearchBox makeQuery={makeQuery} handleQueryChange={handleQueryChange} />
                <p>.</p>
            </div>
        )
    }
}

const SearchBox = ({ makeQuery, handleQueryChange }) => {
    return <form onSubmit={makeQuery}>
        <input placeholder="Ne yapmamı istersin?" onChange={handleQueryChange} autoFocus ></input>
    </form>
}

export default Search
