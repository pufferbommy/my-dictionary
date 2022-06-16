import { useState } from 'react'

// Components
import Error from './components/Error'
import Results from './components/Results'
import SearchInput from './components/SearchInput'

// Images
import searchSvg from './images/search.svg'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!searchValue) return

    setResults([])
    setError(null)
    setIsLoading(true)

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      const data = await res.json()

      if (data.title === 'No Definitions Found') throw data

      setResults(data)
      setSearchValue('')
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-zinc-900 min-h-screen px-4">
      <div className="max-w-3xl mx-auto">
        <div className="pt-8">
          <form onSubmit={handleSubmit}>
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
          </form>
          <Error error={error} />
          {results.length === 0 && !error && !isLoading && (
            <div className="flex flex-col items-center">
              <div className="h-[16rem] overflow-hidden mt-20">
                <img className="invert w-80" src={searchSvg} alt="search" />
              </div>
              <h2 className="text-4xl max-w-[500px] text-center text-white leading-normal mt-4">Search some thing to find the word above here</h2>
            </div>
          )}
          <Results isLoading={isLoading} results={results} />
        </div>
      </div>
    </div>
  )
}
export default App
