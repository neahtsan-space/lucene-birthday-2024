import CardTable from "@/app/view-all-wishcard/cardtable";
const wishtable: React.FC = () => {
    const cards = ["Card 1", "Card 2", "Card 3"]; // Your list of cards
  
    return (
      <div>
        <h1>Card Table</h1>
        <CardTable cards={cards} />
      </div>
    );
};

export default wishtable;