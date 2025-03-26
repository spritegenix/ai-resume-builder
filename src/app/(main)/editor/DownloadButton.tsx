import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { Printer } from "lucide-react";
import React from "react";

export default function DownloadButton({ resumeId }: { resumeId: string }) {
  const reactToPrintFn = async () => {
    try {
      const url = `${env.NEXT_PUBLIC_BASE_URL}/resume/${resumeId}`;
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
  
      if (!response.ok) throw new Error("Failed to generate PDF");
  
      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
  
      // Create an iframe, set the PDF as source, and trigger the print dialog
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = pdfUrl;
      document.body.appendChild(iframe);
  
      iframe.onload = () => {
        iframe.contentWindow?.print();
      };
    } catch (error) {
      console.error("Print error:", error);
    }
  };
  
  


  return (
    <Button
      variant="outline"
      size="icon"
      title="Download Resume"
      onClick={reactToPrintFn}
    >
      <Printer className="size-5" />
    </Button>
  );
}
