// Purchase.jsx
import React from "react";

const Purchase = () => {
  return (
    <section className="purchase-section" style={{ background: "#f7f7f7", padding: "4rem 2rem" }}>
      <div className="purchase-intro" style={{ maxWidth: 1200, margin: "0 auto 4rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "3rem" }}>
        <div style={{ flex: "1 1 400px", minWidth: 350 }}>
          <h2 style={{ color: "#2f7a30", fontWeight: "700", fontSize: "2.5rem", marginBottom: "1.5rem" }}>Purchase</h2>
          <p style={{ fontSize: "1.375rem", lineHeight: 1.6, color: "#222" }}>
            Start using static.app as a hosting for your websites today to get the best features to buck ratio on the market.
          </p>
        </div>
        <div style={{ flex: "1 1 400px", minWidth: 350, display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.125rem" }}>
          <div><span style={{ color: "#2f7a30", marginRight: 12, fontSize: "1.25rem" }}>✔</span>Unlimited Pages</div>
          <div><span style={{ color: "#2f7a30", marginRight: 12, fontSize: "1.25rem" }}>✔</span>Unlimited Forms</div>
          <div><span style={{ color: "#2f7a30", marginRight: 12, fontSize: "1.25rem" }}>✔</span>Unlimited HTTPS</div>
        </div>
        <div style={{ flex: "1 1 400px", minWidth: 350, display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.125rem" }}>
          <div><span style={{ color: "#2f7a30", marginRight: 12, fontSize: "1.25rem" }}>✔</span>Free Sub-Domain</div>
          <div><span style={{ color: "#2f7a30", marginRight: 12, fontSize: "1.25rem" }}>✔</span>Unlimited Data</div>
          <div><span style={{ color: "#2f7a30", marginRight: 12, fontSize: "1.25rem" }}>✔</span>24/7 Support</div>
        </div>
      </div>

      <div className="plans" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#2f7a30", color: "#fff", padding: "3rem", flex: "1 1 350px", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Starter Plan</h3>
            <p style={{ fontSize: "4rem", fontWeight: "700", margin: "0 0 1.5rem" }}>Free</p>
          </div>
          <button style={{ backgroundColor: "#fff", color: "#2f7a30", border: "none", padding: "1rem 2rem", borderRadius: 8, fontWeight: "600", cursor: "pointer", alignSelf: "start", fontSize: "1.125rem" }}>
            Upload for Free →
          </button>
          <div style={{ marginTop: "2rem", fontSize: "1.125rem" }}>
            <p>Free static.app domain included.</p>
            <p>No credit card</p>
          </div>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "3rem", flex: "1 1 350px", borderRadius: 8, boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#2f7a30", margin: 0, fontSize: "1.5rem" }}>Yearly Plan</h3>
            <span style={{ backgroundColor: "#e6be00", color: "#fff", borderRadius: 20, padding: "0.5rem 1rem", fontWeight: "700", fontSize: "1rem" }}>
              SAVE 25%
            </span>
          </div>
          <p style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2f7a30", margin: "0 0 1.5rem" }}>
            $9<span style={{ fontWeight: "400", fontSize: "1.25rem" }}>/month</span>
          </p>
          <button style={{ backgroundColor: "#2f7a30", color: "#fff", border: "none", padding: "1rem 2rem", borderRadius: 8, fontWeight: "700", cursor: "pointer", fontSize: "1.125rem" }}>
            Proceed Annually →  
          </button>
          <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "#333" }}>
            Billed $108 per website annually.<br />
            $36 cheaper to this way.
          </p>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "3rem", flex: "1 1 350px", borderRadius: 8, boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#2f7a30", marginBottom: "1.5rem", fontSize: "1.5rem" }}>Monthly Plan</h3>
          <p style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2f7a30", margin: "0 0 1.5rem" }}>
            $12<span style={{ fontWeight: "400", fontSize: "1.25rem" }}>/month</span>
          </p>
          <button style={{ backgroundColor: "#2f7a30", color: "#fff", border: "none", padding: "1rem 2rem", borderRadius: 8, fontWeight: "700", cursor: "pointer", fontSize: "1.125rem" }}>
            Proceed Monthly →
          </button>
          <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "#333" }}>
            Billed $12 per website monthly.<br />
            Total is $144 per year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purchase;