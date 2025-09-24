'use client'

import { Product, sortProduct, updatesearch } from '@/services/productService';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProductPage=()=>
{
    const searchParams = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    
    const sort = searchParams.get('sort') || 'asc'

    useEffect(() => 
    {
        const sorted = sortProduct(sort);

        setProducts(sorted)
    }, [sort])

    const handleChange=(sort:string)=>
    {
        updatesearch(sort, searchParams);

    }

    return(
        <div>
            <h2>Products</h2>
            <button onClick={() => handleChange('asc')}>Increment</button>
            <button onClick={() => handleChange('desc')} >Decrement</button>

             <ul>
                {products.map(product=>(
                    <li key={product.id}>
                     {product.name}-{product.price}
                    </li>
                ))}
             </ul>

        </div>
    )
}

export default ProductPage;