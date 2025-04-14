
// import { useEffect, useState } from "react";
import { useToast } from "./use-toast";
import { usePdfGeneratingModalState } from "@/components/GeneratingPdfModal";

export function usePrintPdf() {
    const { setOpen } = usePdfGeneratingModalState()
    const { toast } = useToast();

    async function handlePrintPdf(url: string) {
        setOpen(true);
        try {
            const response = await fetch("/api/generate-pdf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate PDF");
            }

            const blob = await response.blob();
            const pdfUrl = URL.createObjectURL(blob);
           window.open(pdfUrl, "_self");  
            // Clean up after a short delay
            setTimeout(() => URL.revokeObjectURL(pdfUrl), 10000);
            console.log(pdfUrl)
            setOpen(false);
            //--------- Open the PDF in a new tab -----------//
            // window.open(pdfUrl, "_blank");
            //--------- Download the PDF -----------//
            // const link = document.createElement("a");
            // link.href = pdfUrl;
            // link.download = "resume.pdf";
            // link.click();
        } catch (error) {
            console.error("Print error:", error);
            setOpen(false);
            toast({
                variant: "destructive",
                description: "Something went wrong. Please try again.",
            });
        }
    }

    return handlePrintPdf;
}
