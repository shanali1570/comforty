import Container from './Container';
import Logo from './Logo';
import SearchInput from './SearchInput';
import ButtonCart from './ButtonCart';

const MidHeader = () => {
  return (
    <div className="bg-[#f0f3f3] text-accent lg:h-14 ">
            <Container className='h-full flex justify-between items-center gap-10 '>
                    <Logo />
                    <SearchInput />
                    <ButtonCart />
            </Container>
            </div>
  );
};

export default MidHeader;
