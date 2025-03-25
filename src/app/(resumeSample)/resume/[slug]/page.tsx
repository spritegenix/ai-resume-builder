import React from "react";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import ResumePreview from "@/components/ResumeStyles/ResumePreview";
import { mapToResumeValues } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export const metadata: Metadata = {
  title: "Personalized Resume",
};

export default async function FullScreenResumePreview({ params }: Props) {
  const resumeId = (await params).slug;
  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: { id: resumeId },
        include: resumeDataInclude,
      })
    : null;
  const resumeData = resumeToEdit ? mapToResumeValues(resumeToEdit) : {};
  return (
    <>
      <ResumePreview resumeData={resumeData} className="w-full" />
    </>
  );
}
