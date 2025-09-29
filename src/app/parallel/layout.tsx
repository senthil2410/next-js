import React from "react";

const ParallelLayout = ({
  products,
  sidebar,
}: {
  products: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "300px",
          padding: "20px",
          background: "blue",
          overflowY: "auto",
        }}
      >
        {sidebar}
      </aside>

      <main style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
        {products}
      </main>
    </div>
  );
};

export default ParallelLayout;
