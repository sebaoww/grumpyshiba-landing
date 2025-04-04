import React from "react";

export default function GrumpyShibaLanding() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#0f0', padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <img
        src="https://teal-efficient-beaver-393.mypinata.cloud/ipfs/bafkreiclbxwb5rfvz5dy2rg5ava6nhvbt5uxfn7x55dd7erpfmrerxs5pq"
        alt="GrumpyShiba Logo"
        style={{ width: '200px', height: '200px', borderRadius: '9999px', border: '4px solid white', boxShadow: '0 0 20px #0f0', objectFit: 'cover' }}
      />
      <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: '#0f0' }}>$GSHIBA</h1>
      <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '1rem auto', color: '#ccc' }}>
        Solana's most grumpy shiba. A meme token with attitude, that rewards you every hour in SOL if you keep him with you.
      </p>

      <div style={{ backgroundColor: '#111', padding: '1.5rem', border: '1px solid #0f0', marginTop: '2rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.7rem', marginBottom: '0.5rem' }}>Token Info</h2>
        <p><strong>Mint:</strong> C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN</p>
        <p><strong>Symbol:</strong> GSHIBA</p>
        <p><strong>Decimals:</strong> 6</p>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem' }}>Links</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
          <li><a href="https://solscan.io/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#0f0', fontWeight: 'bold' }} target="_blank">🔍 Solscan</a></li>
          <li><a href="https://birdeye.so/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#0f0', fontWeight: 'bold' }} target="_blank">📊 Birdeye</a></li>
          <li><a href="https://bit.ly/4kDR6po" style={{ color: '#0f0', fontWeight: 'bold' }} target="_blank">🐦 Twitter</a></li>
          <li><a href="https://t.me/GrumpyShibaOfficial" style={{ color: '#0f0', fontWeight: 'bold' }} target="_blank">📣 Telegram</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <button style={{ padding: '1rem 2rem', backgroundColor: '#0f0', color: '#000', fontWeight: 'bold', fontSize: '1rem', borderRadius: '8px', cursor: 'not-allowed', opacity: 0.8 }} disabled>
          Buy on Raydium (coming soon)
        </button>
      </div>
    </div>
  );
}
