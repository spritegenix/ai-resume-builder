export function usePrintPdf() {
    return async (url: string) => {
        try {
            const response = await fetch("/api/generate-pdf", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) throw new Error("Failed to generate PDF");

            const blob = await response.blob();
            //--------- Download the PDF-----------//
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "resume.pdf";
            link.click();
            //--------- Print the PDF-----------//
            // const pdfUrl = URL.createObjectURL(blob);
            // Create an iframe, set the PDF as source, and trigger the print dialog
            // const iframe = document.createElement("iframe");
            // iframe.style.display = "none";
            // iframe.src = pdfUrl;
            // document.body.appendChild(iframe);
            // iframe.onload = () => {
            //     iframe.contentWindow?.print();
            // };
        } catch (error) {
            console.error("Print error:", error);
        }
    };
}
