import React from "react";

export default function GrumpyShibaLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff007a, #ffa500, #7f00ff)",
        backgroundSize: "300% 300%",
        animation: "pulseBG 10s ease infinite",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}>

      <img
        src="https://teal-efficient-beaver-393.mypinata.cloud/ipfs/bafkreiclbxwb5rfvz5dy2rg5ava6nhvbt5uxfn7x55dd7erpfmrerxs5pq"
        alt="GrumpyShiba Logo"
        style={{ width: '220px', height: '220px', borderRadius: '9999px', marginBottom: '1rem' }}
      />

      <h1 style={{ fontSize: "3.5rem", color: "#fff", textShadow: "2px 2px 10px #000" }}>
        $GSHIBA
      </h1>
      <p style={{ fontSize: "1.4rem", maxWidth: "700px", margin: "1rem auto", color: "#f0f0f0" }}>
        Solana's most grumpy shiba. A meme token with attitude, that rewards you every hour in SOL if you keep him with you.
      </p>

      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: "1.5rem",
          border: "1px solid #fff",
          marginTop: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(255,255,255,0.2)",
        }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "0.5rem" }}>Token Info</h2>
        <p><strong>Symbol:</strong> GSHIBA</p>
        <p><strong>Mint Address:</strong></p>
        <code style={{ fontSize: "0.95rem", background: "#111", padding: "0.4rem 0.8rem", borderRadius: "8px", display: "inline-block", wordBreak: "break-all" }}>
          C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN
        </code>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "1rem" }}>Links</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2" }}>
          <li><a href="https://solscan.io/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">🔍 View on Solscan</a></li>
          <li><a href="https://birdeye.so/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">📊 Birdeye Tracker</a></li>
          <li><a href="https://bit.ly/4kDR6po" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">🐦 Twitter</a></li>
          <li><a href="https://t.me/GrumpyShibaOfficial" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">📣 Telegram</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <button
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "not-allowed",
            opacity: 0.8,
            boxShadow: "0 0 10px rgba(255,255,255,0.5)"
          }}
          disabled
        >
          Buy on Raydium (coming soon)
        </button>
      </div>

      <style>{`
        @keyframes pulseBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
