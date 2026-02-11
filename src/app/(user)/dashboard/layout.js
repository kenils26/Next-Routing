export default function DashboardLayout({
  children,
  charts,
  notifications
}) {
  return (
    <div style={{ padding: "20px" }}>
        <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>
            {children}
        </div>  
        <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>
            {charts}
        </div>

        <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>
            {notifications}
        </div>
    </div>
  );
}
