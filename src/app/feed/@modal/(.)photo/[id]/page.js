"use client";

import { useRouter } from "next/navigation";

export default async function PhotoModal({ params }) {
  const router = useRouter();
  const { id } = await params;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Modal Photo {id}</h2>
        <button onClick={() => router.back()}>
          Close
        </button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "white",
  padding: "20px",
};
