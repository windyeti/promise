const fetchProducts = () => new Promise( (res, rej) => {
    setTimeout(() => {
        res({
            name : 'Jora'
        });
    },2000);
} );
const getProducts = async () => {
    console.log('===> before await <===');
    const products = await fetchProducts();
    console.log('===> after await <===');
    console.log('products', products); // ( 1.1 )
    // return products  // ( 2.1 )
}
getProducts(); // ( 1.2 )
// getProducts().then(res => console.log('result', res));  // ( 2.2 )
