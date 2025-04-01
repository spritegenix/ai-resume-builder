import { Button } from "@/components/ui/button";
import { usePrintPdf } from "@/hooks/usePrintPdf";
import { Printer } from "lucide-react";
import React from "react";

export default function DownloadButton({ url }: { url: string }) {
  const printPdf = usePrintPdf();

  return (
    <Button
      variant="outline"
      size="icon"
      title="Download Resume"
      onClick={() => printPdf(url)}
    >
      <Printer className="size-5" />
    </Button>
  );
}
