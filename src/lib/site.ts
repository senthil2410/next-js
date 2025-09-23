
const getSiteData=async(domain:string)=>
{
    const sites:Record<string,{name:string|null}> ={
        'localhost:3000': { name: 'Not Found product on Local host 3000' },
        'localhost:4000': { name: 'Not Found product on Local host 4000' },
        'localhost:5000': { name: 'Not Found  product on Local host 5000' },
    }
    const site=sites[domain]||"localhost:3000";

    return site;
}

export default getSiteData;