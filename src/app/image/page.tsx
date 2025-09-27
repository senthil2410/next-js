import Image from 'next/image'
import chennai from "../../../public/images/chennai.jpg"

const ImagePage=()=>
{
    return(
        <>
        <Image
        src="https://cdn.vecteezy.com/path/to/image.jpg"
        alt="Dog"
        width={400}
        height={400}
      />
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/320px-Cat03.jpg"
        alt="Wikipedia"
        width={320}
        height={340}
      />
      <Image
         src={chennai}
         alt='chennai'
         width={300}
         height={300}

      />
      </>
    )
}

export default ImagePage;