import './Home.css';
import Navbar from '../Navbar/Navbar';
import Greeting from './Greeting/Greeting';
import AddTask from '../AddTask/AddTask';
import Tasks from '../Tasks/Tasks';

function Home() {
  return (
    <section className='px-10 lg:px-52 pt-8'>
        <Navbar />
        <Greeting />
        <AddTask />
        <Tasks />
    </section>
  );
}

export default Home;