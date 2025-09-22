import Link from "next/link";
import { headers } from "next/headers";
import getSiteData from "../../../../lib/site";

const NotFound= async () => {
  const headerlist = await headers();
  const domain =  headerlist.get("Host");;
  const data = await getSiteData(domain);

  return (
    <div>
      <h2>Not Found: {data?.name}</h2>
      <p>
        <Link href="/">Product</Link>
      </p>
    </div>
  );
};

export default NotFound;
