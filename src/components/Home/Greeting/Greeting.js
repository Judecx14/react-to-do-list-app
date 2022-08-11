import utils from '../../../utils/tools';
import './Greeting.css';

function Greeting() {
    const { greet, month, day, numberDay } = utils.getTime();
    const name = "Billie"
    return (
        <section className='py-12 text-5xl'>
            <h1 id='banner-text-gradient'>{greet + ", " + name}</h1>
            <span className='text-3xl text-gray-600' id='banner-subtitle'>
                {"Today is " + day + ", " + month + " " + numberDay}
            </span>
        </section>
    );
}

export default Greeting;