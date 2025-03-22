import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
      // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:"shell"});
  const page = await browser.newPage();

  // Load the resume page
  await page.goto("http://localhost:3000/resume", {
    waitUntil: "networkidle0",
  });

  // Generate PDF
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
  });

  await browser.close();

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    },
  });
}
