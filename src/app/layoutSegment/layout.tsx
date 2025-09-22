'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

const Layout = ({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth?: React.ReactNode;
}) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div >
      <main >
        {segment === 'login' && <h1>login page</h1>}
        {segment === 'product' && <h1>product page</h1>}
        {children}
      </main>

      <aside>
        {auth ?? <p>Select login or product from auth slot</p>}
      </aside>
      
    </div>
  );
};

export default Layout;
