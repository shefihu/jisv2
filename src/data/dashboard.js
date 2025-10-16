import { OctagonAlert } from "lucide-react";
import { BookIcon, ClockIcon, TickCircleIcon } from "../assets/Svg";

export const metricsData = [
  {
    id: 1,
    icon: <BookIcon />,
    title: "New Cases Today",
    value: 20,
    type: "normal",
  },
  {
    id: 2,
    icon: <OctagonAlert size={24} color="#fff" />,
    title: "Total Cases",
    value: 123,
    type: "normal",
  },
  {
    id: 3,
    icon: <TickCircleIcon size={24} />,
    title: "Cases Approved",
    value: 26,
    type: "normal",
  },
  {
    id: 4,
    icon: <ClockIcon />,
    title: "Pending Verification",
    value: 100,
    type: "urgent",
  },
  {
    id: 5,
    icon: <OctagonAlert size={24} color="#fff" />,
    title: "Flagged Cases",
    value: 24,
    type: "urgent",
  },
];

export const caseCardData = [
  { label: "Civil Cases", value: 219, color: "#5CA9FB" },
  { label: "Criminal Cases", value: 126, color: "#FF4D4F" },
  { label: "Motion", value: 180, color: "#FFD54F" },
  { label: "Affidavit", value: 240, color: "#00C853" },
];

export const caseCardStatusOptions = [
  { value: "approved", label: "Cases Approved" },
  { value: "pending", label: "Pending Cases" },
];
