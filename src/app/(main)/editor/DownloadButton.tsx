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
      if (!response.ok) throw new Error("Failed to download PDF");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "resume.pdf";
      link.click();
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
