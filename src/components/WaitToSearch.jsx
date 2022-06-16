// Images
import searchSvg from '../images/search.svg'

const WaitToSearch = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[16rem] overflow-hidden mt-20">
        <img className="invert w-80" src={searchSvg} alt="search" />
      </div>
      <h2 className="text-4xl max-w-[500px] text-center text-white leading-normal mt-4">Search some thing to find the word above here</h2>
    </div>
  )
}

export default WaitToSearch
