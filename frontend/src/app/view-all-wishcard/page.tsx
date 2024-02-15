'use client';
import Header2 from "@/components/header2";
import Footer from "@/components/footer";
import './page.css';
import React, { Suspense } from 'react';
import WishTable from "@/components/view-all-wish";
import { VIEWALLWISH_BG } from "@/params/background_params";

const ViewAllWishcard: React.FC = () => {
    return (
      <div className="view-all-wish" style={{backgroundColor: VIEWALLWISH_BG}}>
        <Header2 />
        <WishTable />
        <Footer />
      </div>
    );
}

export default ViewAllWishcard;