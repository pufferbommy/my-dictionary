import Skeleton from './Skeleton'

const Results = ({ isLoading, results }) => {
  if (isLoading) {
    return (
      <div className="py-4">
        <Skeleton className="w-16 h-10" />
        <Skeleton className="w-12 h-6 my-2" />
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-12 h-6 my-2" />
        <Skeleton className="w-full h-72" />
      </div>
    )
  }

  return (
    <main className="grid grid-cols-1 gap-8 py-4">
      {results.map(({ word, meanings, phonetic }, index) => (
        <section>
          <div className="text-white inline-block relative mb-2">
            <h2 className="text-4xl">
              {word}
              <small className="ml-2 text-sm">{phonetic}</small>
            </h2>
            <div className="absolute -top-0 text-gray-300 -right-6 bg-gray-700 w-5 h-5 text-sm grid place-content-center rounded-full">{index + 1}</div>
          </div>
          <div>
            {meanings.map(({ partOfSpeech, definitions }) => (
              <div className="mt-2">
                <span className="bg-gray-100 text-sm px-1 rounded inline-block mb-2 font-bold">{partOfSpeech}</span>
                <ul className="text-gray-300 space-y-2">
                  {definitions.map(({ definition }) => (
                    <li className="text-lg">
                      <span className="w-1.5 h-0.5 bg-red-300 inline-block mx-2 mb-1"></span>
                      {definition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Results
