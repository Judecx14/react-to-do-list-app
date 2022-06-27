import './Task.css';

function Task({ name = "Ninguna", category = "Ninguna" }) {
  return (
    <section className='flex items-center justify-between'>
      <div className='flex items-center'>
        <input type="checkbox" />
        <h1>{name}</h1>
      </div>
      <small>{category}</small>
    </section>
  );
}

export default Task;