// src/modules/ListItem.jsx
import React from "react";

const ListItem = ({ Icon, title, text, colorClass = "text-blue-500" }) => (
  <li className="flex items-start text-gray-700">
    <Icon className={`w-5 h-5 ${colorClass} mt-1 mr-3 shrink-0`} />
    <div>
      <strong className="font-semibold">{title}</strong> {text}
    </div>
  </li>
);

export default ListItem;
