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
        <WishTable />
        <Footer />
      </div>
    );
}

export default ViewAllWishcard;