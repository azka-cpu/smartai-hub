import { FileText, Receipt, Mic, ScanBarcode } from "lucide-react";

export const appsConfig = {
  "pdf-copilot": {
    name: "PDF Copilot",
    tagline: "Chat with PDFs using AI.",
    icon: FileText,
    accent: "#0d9488",
    externalUrl: "https://pdf-copilot-ui-five.vercel.app/",
  },
  spendsnap: {
    name: "SpendSnap",
    tagline: "AI expense tracker.",
    icon: Receipt,
    accent: "#ea580c",
    externalUrl: "https://spendsnap.streamlit.app/",
  },
  "meeting-notes-bot": {
    name: "Meeting Notes Bot",
    tagline: "AI meeting assistant.",
    icon: Mic,
    accent: "#4f46e5",
    externalUrl: "https://meeting-notes-bot-ui.vercel.app/",
  },
  "barcode-scanner": {
    name: "Barcode Scanner",
    tagline: "AI product scanner.",
    icon: ScanBarcode,
    accent: "#e11d48",
    externalUrl: "https://labellens-zeta.vercel.app/",
  },
} as const;

export type AppId = keyof typeof appsConfig;