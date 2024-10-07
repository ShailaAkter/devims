import {Grid} from "react-loader-spinner"

const Loader = () => 
{
  return (
    <div className="flex justify-center items-center">
        <div>
            <h1 className="text-center py-4 text-2xl text-slate-800"></h1>
            <div className="flex justify-center items-center opacity-50">
            <Grid
                height={100}
                width={100}
                radius={5}
                color="black"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}/>
            </div>
        </div>
  </div>
  )
}

export default Loader