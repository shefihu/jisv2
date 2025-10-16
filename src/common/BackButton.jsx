import { ChevronLeft } from "lucide-react";

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1.15625rem",
  gap: "0.625rem",
  height: "2.75rem",
  background: "#c8cace",
  borderRadius: "1rem",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1rem",
  color: "#282828",
  marginBottom: "1.5rem",
  border: "none",
  cursor: "pointer",
};

function BackButton() {
  return (
    <button style={style}>
      <ChevronLeft width={22} height={24} /> Back
    </button>
  );
}

export default BackButton;
