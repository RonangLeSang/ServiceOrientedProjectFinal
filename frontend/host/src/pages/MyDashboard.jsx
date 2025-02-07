import React, { Suspense } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

// Dynamically import the ProductPage from the products micro frontend
const ProductPage = React.lazy(() => import("products/MyProducts"));

const MyDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
        <main className="flex-grow p-6">
          <Suspense fallback={<div>Loading Products...</div>}>
            <ProductPage />
          </Suspense>
        </main>
      <Footer/>
    </div>
  );
};

export default MyDashboard;