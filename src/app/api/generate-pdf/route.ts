import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  try {
    const { resumeId } = Object.fromEntries(req.nextUrl.searchParams);
    if (!resumeId) return NextResponse.json({ error: "Missing resumeId" }, { status: 400 });

    // Launch Puppeteer
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    const resumeURL = `${process.env.NEXT_PUBLIC_BASE_URL}/resume/${resumeId}`;

    // Load the resume page
    await page.goto(resumeURL, { waitUntil: "networkidle0" });

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // Return the PDF as response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume-${resumeId}.pdf`,
      },
    });
  } catch (error) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
