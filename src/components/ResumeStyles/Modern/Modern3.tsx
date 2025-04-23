"use client";

import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { formatDate } from "date-fns";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SocialMediaIconFinder from "@/components/SocialMediaIconFinder";
import Link from "next/link";
import { BiSolidMap } from "react-icons/bi";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function Modern1({ resumeData, className }: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  const BaseFontSize = resumeData?.baseFontSize
    ? `text-[${resumeData.baseFontSize}px]`
    : "text-[10px]";

  const colorHex =
    resumeData.colorHex === "#000000" ? "#163853" : resumeData.colorHex;

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white font-arial text-[#545454]",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          "mx-6 grid h-full grid-cols-12 space-y-2",
          BaseFontSize,
          !width && "invisible",
        )}
        style={{
          zoom: (1 / 794) * width,
        }}
        id="resumePreviewContent"
      >
        {/* Left Side  */}
        <div
          className="col-span-4 mt-16 space-y-3 rounded-t-full p-6"
          style={{
            backgroundColor: colorHex,
          }}
        >
          <PersonalInfoHeader resumeData={resumeData} />
          {/* Skills  */}
          {!!resumeData.skills && resumeData.skills?.length > 0 && (
            <>
              <Heading>Skills</Heading>
              {resumeData.skills?.map((skill, index) => (
                <div key={index} className="!m-0 break-inside-avoid">
                  <div className="!m-0 flex items-center justify-between">
                    <p>
                      <span className="font-semibold">{skill.title}</span>
                      {skill.skillName && skill.skillName.length > 0 && (
                        <span>- {skill.skillName?.join(", ")}</span>
                      )}
                    </p>
                  </div>
                  <p className="whitespace-pre-line"></p>
                </div>
              ))}
            </>
          )}
          {/* Academics */}
          {!!resumeData.educations && resumeData.educations?.length > 0 && (
            <>
              <Heading>Education</Heading>
              {resumeData.educations?.map((edu, index) => (
                <div
                  key={index}
                  className={cn(
                    "!m-0 break-inside-avoid",
                    index !== (resumeData.educations?.length ?? 0) - 1 &&
                      "pb-2",
                  )}
                >
                  <div className="!m-0">
                    <p>
                      {edu.startDate &&
                        `${formatDate(edu.startDate, "MMM yyyy")} -`}{" "}
                      {edu.endDate
                        ? formatDate(edu.endDate, "MMM yyyy")
                        : "Present"}
                    </p>
                    <p className="font-semibold">
                      {edu.school}
                      {edu.location && `, ${edu.location}`}
                    </p>{" "}
                  </div>
                  <ul className="!mt-0 list-disc pl-3">
                    {(edu.degree || edu.stream) && (
                      <li className="">
                        {edu.degree} {edu.stream && `(${edu.stream})`}
                      </li>
                    )}
                    {edu.marks && <li>{edu.marks}</li>}
                    {edu.description && <li>{edu.description}</li>}
                  </ul>
                </div>
              ))}
            </>
          )}
          {/* Certifications  */}
          {!!resumeData.certifications &&
            resumeData.certifications?.length > 0 && (
              <>
                <Heading>Certifications</Heading>
                <div className={cn("!m-0")}>
                  {resumeData.certifications?.map((skill, index) => (
                    <div
                      key={index}
                      className={cn(
                        "break-inside-avoid",
                        index !==
                          (resumeData.certifications?.length ?? 0) - 1 &&
                          "pb-2",
                      )}
                    >
                      <Link
                        href={skill.link ? skill.link : "#"}
                        className="before:mr-1 before:content-['•']"
                      >
                        {skill.title}
                      </Link>{" "}
                      {skill.description && <p>{skill.description}</p>}
                    </div>
                  ))}
                </div>
              </>
            )}
          {/* Interest  */}
          {!!resumeData.others?.title && (
            <>
              <Heading>{resumeData.others.title}</Heading>
              <div
                dangerouslySetInnerHTML={{
                  __html: resumeData.others.description || "",
                }}
                className="richTextEditorStyle !mt-0 whitespace-pre-line"
              />
            </>
          )}
        </div>
        {/* Right Side  */}
        <div className="col-span-8 space-y-3 p-6 pl-3">
          {/* Name And Job Title  */}
          <div className="my-auto">
            <p className="text-[3em]">
              <span className="font-bold text-[#545454]">
                {resumeData.firstName}
              </span>{" "}
              <span
                style={{
                  color: colorHex,
                }}
              >
                {resumeData.lastName}
              </span>
            </p>
            <p className="text-[1.6em] font-medium">{resumeData.jobTitle}</p>
          </div>
          {/* Summary */}
          {resumeData.summary && (
            <>
              <Heading>Professional Summary</Heading>
              <Text>{resumeData.summary}</Text>
            </>
          )}
          {/* Experience */}
          {!!resumeData?.workExperiences &&
            resumeData?.workExperiences?.length > 0 && (
              <>
                <Heading>Professional Experience</Heading>
                <ul className="relative space-y-1 pl-4">
                  <div className="absolute inset-y-0 left-1 h-full w-0 border border-l border-zinc-300" />
                  {resumeData.workExperiences?.map((exp, index) => (
                    <li
                      key={index}
                      className="relative z-10 break-inside-avoid"
                    >
                      <span
                        className="absolute -left-[0.885rem] top-1.5 h-[6px] w-[6px] rounded-full"
                        style={{
                          backgroundColor: colorHex,
                        }}
                      />
                      <div className="!m-0 flex items-center justify-between">
                        <span
                          className="text-[1.2em] font-semibold"
                          style={{
                            color: colorHex,
                          }}
                        >
                          {exp.company}
                        </span>
                        {exp.jobLocation && <span>{exp.jobLocation}</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[1.1em] font-semibold italic">
                          {exp.position}
                        </span>
                        {exp.startDate && (
                          <span>
                            {formatDate(exp.startDate, "MMM yyyy")} -{" "}
                            {exp.endDate
                              ? formatDate(exp.endDate, "MMM yyyy")
                              : "Present"}
                          </span>
                        )}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: exp.description || "",
                        }}
                        className="richTextEditorStyle whitespace-pre-line"
                      />
                    </li>
                  ))}
                </ul>
              </>
            )}
          {/* Projects */}
          {!!resumeData.projectWorks && resumeData.projectWorks?.length > 0 && (
            <>
              <Heading>Project Work</Heading>
              {resumeData.projectWorks?.map((item, index) => (
                <div key={index} className="!m-0 break-inside-avoid">
                  <div className="!m-0 flex justify-between gap-1">
                    <p className="flex gap-1">
                      <Link
                        href={
                          !!item?.links && item?.links[0] ? item?.links[0] : "#"
                        }
                        target="_blank"
                        className="text-[1.2em] font-semibold"
                        style={{
                          color: colorHex,
                        }}
                      >
                        {item.title}
                      </Link>
                      {!!item.links &&
                        item.links.map((l, index) => (
                          <span key={index} className="mr-1 mt-1">
                            <ContactLinks href={l} text={"NO_TEXT"} />
                          </span>
                        ))}
                    </p>
                    <p className="flex flex-col text-right">
                      {item.company && (
                        <span className="italic">{item.company}</span>
                      )}
                      {item.startDate && (
                        <span>
                          {item.startDate &&
                            `${formatDate(item.startDate, "MMM yyyy")} - `}
                          {item.endDate
                            ? formatDate(item.endDate, "MMM yyyy")
                            : "Present"}
                        </span>
                      )}
                    </p>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description || "" }}
                    className="richTextEditorStyle whitespace-pre-line"
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function PersonalInfoHeader({ resumeData }: { resumeData: ResumeValues }) {
  const { photo, portfolioLink, socialLinks, city, country, phone, email } =
    resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  return (
    <div>
      {/* Photo  */}
      {photoSrc && (
        <div className="mb-4 flex w-full justify-center">
          <Image
            src={photoSrc}
            width={500}
            height={500}
            alt="Author photo"
            className="aspect-square h-[200px] w-full object-cover"
            style={{
              borderRadius: "9999px",
            }}
          />
        </div>
      )}
      {/* Social Links  */}
      <div>
        <Heading>Contact</Heading>
        {(city || country) && (
          <p className="flex items-center gap-1">
            <BiSolidMap />
            {city}
            {city && country ? ", " : ""}
            {country}
          </p>
        )}
        <ContactLinks text={phone} href={`tel:${phone}`} />
        <ContactLinks text={email} href={`mailto:${email}`} />
        {!!socialLinks &&
          socialLinks.length > 0 &&
          socialLinks.map((link, index) => (
            <ContactLinks
              key={index}
              text={link.split("://")?.[1]}
              href={link}
            />
          ))}
        {portfolioLink && (
          <ContactLinks text={"Portfolio"} href={portfolioLink} />
        )}
      </div>
    </div>
  );
}
function ContactLinks({
  icon,
  text = "",
  href,
}: {
  icon?: React.ReactNode;
  text?: string | number | undefined;
  href?: string | undefined;
}) {
  return (
    <>
      {text && (
        <Link
          href={href ? href : "#"}
          target="_blank"
          className="flex items-center gap-1"
        >
          {icon ? icon : <SocialMediaIconFinder url={href ? href : ""} />}
          {text === "NO_TEXT" ? "" : <p>{text}</p>}
        </Link>
      )}
    </>
  );
}

function Text({ children }: { children: string }) {
  return <p className="!m-0 whitespace-pre-line">{children}</p>;
}

function Heading({ children }: { children: string }) {
  return (
    <>
      <div className="grid break-inside-avoid grid-cols-6">
        <h1 className="col-span-3 text-nowrap text-[1.2em] font-semibold uppercase">
          {children}
        </h1>
        <div className="col-span-3 mb-2 mt-auto h-0.5 w-10/12 justify-self-end bg-zinc-500" />
      </div>
    </>
  );
}
