import ListImg from '../../assets/images/list.png'

const Header = () => {
  return (
    <h1 className='flex gap-2 items-center font-bold text-3xl sm:text-4xl mb-8 relative'>
      To-Do List <span className='text-xs text-[#e08692] absolute bottom-0 left-18'>Atoms</span>
      <img className='size-22' src={ListImg} alt='list photo' />
    </h1>
  );
}

export default Header