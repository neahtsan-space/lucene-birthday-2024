'use client';
import Header2 from "@/components/header2";
import Footer from "@/components/footer";
import './page.css';
import React, { Suspense } from 'react';
import WishTable from "@/components/view-all-wish";

const ViewAllWishcard: React.FC = () => {
    return (
      <div>
        <Header2 />
        <Suspense fallback={<div>Loading...</div>}>
          <WishTable />
        </Suspense>
        <Footer />
      </div>
    );
}

export default ViewAllWishcard;