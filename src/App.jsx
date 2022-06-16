import { useState } from 'react'

// Components
import Error from './components/Error'
import Results from './components/Results'
import SearchInput from './components/SearchInput'
import WaitToSearch from './components/WaitToSearch'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmedSearchValue = searchValue.trim()
    if (!trimmedSearchValue) return

    setResults([])
    setError(null)
    setIsLoading(true)

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${trimmedSearchValue}`)
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
          {results.length === 0 && !error && !isLoading && <WaitToSearch />}
          <Results isLoading={isLoading} results={results} />
        </div>
      </div>
    </div>
  )
}
export default App
