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

      {/* LOGO SECTION */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,0,122,0.4), transparent 70%)',
            filter: 'blur(40px)',
            zIndex: 0,
            animation: 'glow 6s ease-in-out infinite',
          }}
        ></div>
        <img
          src="https://teal-efficient-beaver-393.mypinata.cloud/ipfs/bafkreiclbxwb5rfvz5dy2rg5ava6nhvbt5uxfn7x55dd7erpfmrerxs5pq"
          alt="GrumpyShiba Logo"
          style={{ width: '280px', height: 'auto', position: 'relative', zIndex: 1, animation: 'zoomIn 10s ease-in-out infinite' }}
        />
      </div>

      <h1 style={{ fontSize: "4rem", color: "#fff", marginTop: '1.5rem', textShadow: "0 0 15px #ff00cc" }}>
        $GSHIBA
      </h1>
      <p style={{ fontSize: "1.4rem", maxWidth: "700px", margin: "1rem auto", color: "#f0f0f0" }}>
        He’s angry. He’s rich. He’s rewarding. <br /> Hourly SOL drops for the faithful.
      </p>

      {/* BADGES */}
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <span style={{ background: '#111', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid #ff00cc', boxShadow: '0 0 10px #ff00cc' }}>🚀 Fair Launch</span>
        <span style={{ background: '#111', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid #00ffee', boxShadow: '0 0 10px #00ffee' }}>💸 Hourly SOL Rewards</span>
        <span style={{ background: '#111', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid #ffff00', boxShadow: '0 0 10px #ffff00' }}>😡 100% Grumpy — 0% Mercy</span>
      </div>

      {/* TOKEN INFO */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: "1.5rem",
          border: "1px solid #fff",
          marginTop: "2.5rem",
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

      {/* LINKS */}
      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "1rem" }}>Links</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2" }}>
          <li><a href="https://solscan.io/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">🔍 View on Solscan</a></li>
          <li><a href="https://birdeye.so/token/C8KjuUNGivQNmDoCX1y6jjB9PaJkPBystztd7ZVGubzN" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">📊 Birdeye Tracker</a></li>
          <li><a href="https://bit.ly/4kDR6po" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">🐦 Twitter</a></li>
          <li><a href="https://t.me/GrumpyShibaOfficial" style={{ color: '#fff', fontWeight: 'bold' }} target="_blank">📣 Telegram</a></li>
        </ul>
      </div>

      {/* BUY BUTTON */}
      <div style={{ marginTop: '3rem' }}>
        <button
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "8px",
            animation: 'pulseBtn 2s infinite',
            boxShadow: "0 0 10px rgba(255,255,255,0.5)"
          }}
          disabled
        >
          Buy on Raydium (coming soon)
        </button>
      </div>

      {/* WHITEPAPER SECTION */}
      <div style={{ marginTop: '4rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '2rem', borderRadius: '12px', border: '1px solid #fff', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#fff', textShadow: '0 0 10px #fff' }}>📘 Whitepaper</h2>
        <p style={{ margin: '1rem 0', fontSize: '1.1rem', color: '#eee' }}>
          Dive into the full vision, strategy, and the power of GrumpyShiba. Know what drives the most grumpy dog on Solana.
        </p>
        <a
          href="https://teal-efficient-beaver-393.mypinata.cloud/ipfs/bafybeibcphgogepckjiupswtue4ddhgr4uqr36en4ovqcmb5lxgiu4kasa"
          target="_blank"
          style={{
            display: 'inline-block',
            backgroundColor: '#00ffee',
            color: '#000',
            fontWeight: 'bold',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 0 10px #00ffee',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Read the Full Plan
        </a>
      </div>

      {/* STYLES */}
      <style>{`
        @keyframes pulseBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes zoomIn {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes pulseBtn {
          0% { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 25px rgba(255,255,255,0.8); }
          100% { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
        }
      `}</style>
    </div>
  );
}

