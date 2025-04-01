import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
    }

    // Launch Puppeteer with specific arguments to fix text selection
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.evaluateHandle('document.fonts.ready');
    
    const loadedFonts = await page.evaluate(() =>
      Array.from(document.fonts).map((f) => f.family)
    );
    console.log("Loaded Fonts:", loadedFonts);


    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: "0px", bottom: "0px", left: "0px", right: "0px" },
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}

