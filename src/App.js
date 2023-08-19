import logo from './logo.svg';
import './App.css';
import ProductPage from './products/productspage';
const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]




function App() {
  const items=productsArr.map(item=>{
    return <ProductPage  key={item.imageUrl} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
  });
  return (<div>
    
      {items}
    </div>
  );
}

export default App;
