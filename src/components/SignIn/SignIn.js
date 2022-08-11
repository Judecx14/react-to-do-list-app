import './SignIn.css';
import Splash from './Splash/Splash';
import Form from './Form/Form';

function SignIn() {
  return (
    <section className='flex columns-2 min-h-screen'>
      <div className='w-0 hidden lg:block lg:w-3/5'>
        <Splash/>
      </div>
      <div className='w-full lg:w-2/5'>
        <Form/>
      </div>
    </section>
  );
}

export default SignIn;