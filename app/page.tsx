import React from 'react';
import ItemGrid from './components/ItemGrid';

const items = [
  { number: '#01', name: 'なす' },
  { number: '#02', name: 'にんじん' },
  { number: '#03', name: 'ブロッコリー' },
  { number: '#04', name: 'トマト' },
  { number: '#05', name: 'しいたけ' },
  { number: '#06', name: 'しめじ' },
  { number: '#07', name: 'えのき' },
  { number: '#08', name: 'ほうれん草' },
  { number: '#09', name: 'たまねぎ' },
  { number: '#10', name: 'かぼちゃ' },
  { number: '#11', name: 'ピーマン' },
  { number: '#12', name: 'オクラ' },
  { number: '#13', name: 'キャベツ' },
  { number: '#14', name: 'レタス' },
  { number: '#15', name: 'りんご' },
];

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>やさしい切りかた辞典</h1>
      <ItemGrid items={items} />
    </main>
  );
}
