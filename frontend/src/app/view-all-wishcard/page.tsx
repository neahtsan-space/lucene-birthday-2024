'use client';
import Header from "@/components/header";
import Footer from "@/components/footer";
import './page.css';
import React from 'react';
import WishTable from "@/components/view-all-wish";

const ViewAllWishcard: React.FC = () => {
    return (
      <div>
        <Header />
        <WishTable />
        <Footer />
      </div>
    );
}

export default ViewAllWishcard;