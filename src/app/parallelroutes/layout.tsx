import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  product: ReactNode;
  login: ReactNode;
};


const Layout=({ children,product, login }: LayoutProps)=>{
  return (
    <div>
    <main>{children}</main>  
     <aside >{product}  </aside>     
     <aside > {login} </aside> 
    </div>
  );
}

export default Layout;
