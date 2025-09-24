export interface Product {
  id: number
  name: string
  price: number
}

const allProducts: Product[] = [
  { id: 1, name: 'labtop', price: 450000 },
  { id: 2, name: 'Mobile phone', price: 20000 },
  { id: 3, name: 'Tv', price: 12000 },
  {id:4,name:'headphone',price:2000}
]


export const sortProduct=(sorting:string):Product[]=>
{
    return [...allProducts].sort((a,b)=>
        
        sorting=== 'asc' ? a.price - b.price : b.price - a.price);
}


export const updatesearch=(sort:string,currentSearchParams:URLSearchParams)=>
{
  const params = new URLSearchParams(currentSearchParams.toString());
  params.set('sort', sort);
  
  window.history.pushState({ page: "product" },"",`/products?${params.toString()}`);

   window.dispatchEvent(new PopStateEvent('popstate'));

}


