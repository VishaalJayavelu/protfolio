import loader from '../../assets/loader.json'
import Lottie from 'react-lottie';
import {LoaderProps} from '../../types'

export default function Loader({isOpen}:LoaderProps) {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loader,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  if(isOpen) return (
    <div className='absolute flex flex-col text-2xl text-white justify-center items-center w-screen h-screen bg-black bg-opacity-70 z-[1000]'>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      Loading Portfolio.....
    </div>
  );
  else return (
    <div className='absolute flex flex-col text-2xl text-white justify-center items-center w-screen h-screen bg-black bg-opacity-70 z-[1000]'>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      Portfolio Is Under Progress.....
    </div>
  )
}
