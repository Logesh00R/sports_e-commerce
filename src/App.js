import React,{useState} from 'react';
import './App.css';
import Category from './components/Category';
import { getCategories,getProducts } from './fetcher';
import CategoryProducts from './components/CategoryProducts';


function App() {
  const[categories, setCategories] = useState({errorMessage: '',data: []});
  const[products, setProducts] = useState({errorMessage: '',data: []});


  React.useEffect(()=>{
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  },[])

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
    
  }


const renderCategories = () => {
  return categories.data.map(c=>
    <Category key ={c.id} id={c.id} title ={c.title} onCategoryClick={()=> handleCategoryClick(c.id)} />
    );
   
  
}
  const renderProducts=()=>{
    return products.data.map(p =>
    <CategoryProducts title={p.title} image = {p.image}/>
    );
  }
  return (
    <>
    

    <header> My Sports </header>   
    
    <section>
      <nav>
       {categories.errorMessage && <div>Error : {categories.errorMessage}</div> } 
      {
       categories.data && renderCategories()
      }
      </nav>
      <article>
        {products.errorMessage && <div>Error : {products.errorMessage}</div> } 
        <h1>products</h1>
        {products && renderProducts()}
      </article>
    </section>

    <footer>
      footer
    </footer>

    
    </>
  );
}

export default App;
