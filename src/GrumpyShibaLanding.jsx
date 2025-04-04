import React from "react";

export default function GrumpyShibaLanding() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#0f0', padding: '2rem', textAlign: 'center' }}>
      <img
        src="https://gateway.pinata.cloud/ipfs/bafybeie2bgkxdxnphdemtulc66yaffhg6ktqtj57scxg65tapqykf7eqzi"
        alt="GrumpyShiba Logo"
        style={{ width: '150px', borderRadius: '9999px', border: '4px solid white' }}
      />
      <h1 style={{ fontSize: '3rem', marginTop: '1rem' }}>$GSHIBA</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto', color: '#ccc' }}>
        Solana's most grumpy shiba. A meme token with attitude, that rewards you every hour in SOL if you keep him with you.
      </p>

      <div style={{ backgroundColor: '#111', padding: '1rem', border: '1px solid #0f0', marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Token Info</h2>
        <p><strong>Mint:</strong> C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN</p>
        <p><strong>Symbol:</strong> GSHIBA</p>
        <p><strong>Decimals:</strong> 6</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Links</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="https://solscan.io/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#0f0' }}>Solscan</a></li>
          <li><a href="https://birdeye.so/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#0f0' }}>Birdeye</a></li>
          <li><a href="https://bit.ly/4kDR6po" style={{ color: '#0f0' }}>Twitter</a></li>
          <li><a href="https://t.me/GrumpyShibaOfficial" style={{ color: '#0f0' }}>Telegram</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <button style={{ padding: '1rem 2rem', backgroundColor: '#0f0', color: '#000', fontWeight: 'bold', borderRadius: '8px' }} disabled>
          Buy on Raydium (coming soon)
        </button>
      </div>
    </div>
  );
}
