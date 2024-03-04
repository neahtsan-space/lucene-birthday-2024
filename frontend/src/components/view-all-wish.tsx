import CardTable from "@/app/view-all-wishcard/cardtable";
import { allWish } from "../../data/allWish";


const WishTable: React.FC = async () => {

  const wishData = allWish;

  return (
    <div>
      <div className='Table' ></div>
      <CardTable data={wishData} />
    </div>
  );
};

export default WishTable;
