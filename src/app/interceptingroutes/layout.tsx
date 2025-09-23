import Link from 'next/link';

const InterceptingRoutesLayout=({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
})=> {
  return (
    <>
      <header>

        <nav>
          <Link href="/interceptingroutes">Home</Link>
          <Link href="/interceptingroutes/(login)">Login Modal</Link>
        </nav>
        
      </header>
      <main >{children}</main>
      {modal}
    </>
  );
}

export default InterceptingRoutesLayout;
