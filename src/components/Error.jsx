// Images
import notFound from '../images/not-found.svg'

const Error = ({ error }) => {
  if (error) {
    return (
      <div className="py-4 flex flex-col items-center">
        <div className="w-80">
          <img className="invert h-full w-full" src={notFound} alt="not found" />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-4xl text-white">{error.title}</h2>
          <p className="mt-2 text-gray-300">{error.message}</p>
          <p className="text-gray-300">{error.resolution}</p>
        </div>
      </div>
    )
  }
}

export default Error
