import { useState } from "react";

function List() {
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "This is the description for item 1.",
    },
    {
      id: 2,
      title: "Item 2",
      description: "This is the description for item 2.",
    },
    {
      id: 3,
      title: "Item 3",
      description: "This is the description for item 3.",
    },
  ];
  const [expandedItems, setExpandedItems] = useState({});
  const toggleItem = (id) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [id]: !prevExpandedItems[id],
    }));
  };

  return (
    <div>
      <h1>Item List</h1>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            margin: "10px 0",
            cursor: "pointer",
            backgroundColor: "ButtonShadow",
          }}
        >
          <h2
            onClick={() => toggleItem(item.id)}
            style={{ margin: "0", fontSize: "18px" }}
          >
            {item.title}
          </h2>
          {expandedItems[item.id] && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default List;
