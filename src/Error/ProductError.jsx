import Error from '../assets/Product-Error.png'

const ProductError = () => {
    return (
        <div className='py-20 sm:py-30'>
            <img className='mx-auto h-[150px] sm:h-[250px]' src={Error} alt="" />
        </div>
    );
};

export default ProductError;