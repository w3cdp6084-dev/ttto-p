import React from 'react';
import ItemCard from './ItemCard';
import styles from '../ItemGrid.module.css';

interface Item {
  number: string;
  name: string;
  imageUrl: string;
}

interface ItemGridProps {
  items: Item[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ItemCard key={item.number} {...item} />
      ))}
    </div>
  );
};

export default ItemGrid;

