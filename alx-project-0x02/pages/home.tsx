
import React from "react";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Card 1" content="This is the content for Card 1." />
      <Card title="Card 2" content="This is the content for Card 2." />
      <Card title="Card 3" content="This is the content for Card 3." />
    </div>
  );
};

export default HomePage;
