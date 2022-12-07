import './App.css';
import Product from './Product';

function App() {
  return (
    <div>

      <Product name="Amazon Eco" 
               description="Your AI Assistant"
               price={55.99} 
               />
      <Product name="Google Home" 
               description="Your AI Assistant"
               price={155.99} 
               />
      <Product name="iPhone 12" 
               description="The Best"
               price={855.99} 
               />
    </div>

  );
}

export default App;
