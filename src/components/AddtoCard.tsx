"use client"

const AddToCardButton=({params}:{params:{id:string,title:string}})=>
{
    const handleClick=()=>
    {
       alert(`${params.title} is added to card`);
    }

    return <button onClick={handleClick}>Add to Card</button>

}

export default AddToCardButton;