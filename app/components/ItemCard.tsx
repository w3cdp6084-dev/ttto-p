import React from 'react';
import Image from 'next/image';
import styles from '../ItemCard.module.css';

interface ItemCardProps {
  number: string;
  name: string;
  imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ number, name }) => {
  return (
    <div className={styles.card}>
      <Image 
        src={`https://via.placeholder.com/400x400?text=${name}`}
        alt={name} 
        width={400} 
        height={400} 
        className={styles.image} 
      />
      <div className={styles.info}>
        <span className={styles.number}>{number}</span>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
};

export default ItemCard;
