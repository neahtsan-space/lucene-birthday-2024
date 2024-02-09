import Header from "@/components/header";
import Footer from "@/components/footer";
import './page.css';
import React from 'react';
import wishtable from "@/components/table";

const ViewAllWishcard: React.FC = () => {
    return (
      <div>
        <Header />
        <wishtable/> {/* Render MyComponent directly */}
        <Footer />
      </div>
    );
}

export default ViewAllWishcard;