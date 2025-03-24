// 1. First, install the necessary packages
// npm install puppeteer-core puppeteer @react-pdf/renderer jspdf html2canvas

// 2. Create a PDF export service (src/lib/pdfExport.ts)
import puppeteer from 'puppeteer';

export async function generateResumePDF(resumeId: string): Promise<Buffer> {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  
  try {
    const page = await browser.newPage();
    
    // Navigate to the resume preview page (with a special query param to indicate PDF mode)
    await page.goto(`${process.env.NEXT_PUBLIC_APP_URL}/resume/${resumeId}/preview?pdf=true`, {
      waitUntil: 'networkidle2', // Wait until the page is fully loaded
    });
    
    // Apply optimal PDF settings for ATS compatibility
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      scale: 1.0,
    });
    
    return pdfBuffer;
  } finally {
    await browser.close();
  }
}



