import './Splash.css';
import person from '../../../assets/person-2.png'

function Splash() {
  return (
    <figure className='flex h-full pl-24 pt-24'>
      <h1 className='flex flex-col text-white text-8xl animate__animated animate__fadeInLeft'>
        <span>Organize</span>
        <span className='my-7'>Your</span>
        <span>Life</span>
      </h1>
      <img src={person} alt='person' id='img-relative' className='min-h-full w-3/5 h-3/5 object-contain animate__animated animate__fadeInLeft' />
    </figure>
  );
}

export default Splash;