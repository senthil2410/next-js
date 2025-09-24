'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const SearchPost=()=>
{
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const handleChange=useCallback((e: React.ChangeEvent<HTMLInputElement>)=>
  {
    const params = new URLSearchParams(searchParams);
    params.set('search', e.target.value);
     router.replace(`?${params.toString()}`);

  },[searchParams, router])

  return(
    <>
    <input
     type='text'
     value={search}
     onChange={handleChange}
     placeholder='search the post'
     />
     </>
  )

}

export default SearchPost;