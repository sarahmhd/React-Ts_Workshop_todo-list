import ListImg from '../../assets/images/list.png'

const Header = () => {
  return (
    <h1 className='flex gap-2 items-center font-bold text-3xl sm:text-4xl mb-8'>
      To-Do List
      <img className='size-22' src={ListImg} alt='list photo' />
    </h1>
  );
}

export default Header