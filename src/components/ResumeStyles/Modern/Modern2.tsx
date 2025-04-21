"use client";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
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
        `font-poppins aspect-[210/297] h-fit w-full bg-white text-[#545454]`,
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          "grid h-full grid-cols-12 space-y-2 px-8 py-10",
          BaseFontSize,
          !width && "invisible",
        )}
        style={{
          zoom: (1 / 794) * width,
        }}
        id="resumePreviewContent"
      >
        {/* Left Side  */}
        <div className="col-span-4 space-y-3 border-2 border-black p-6 pr-3 text-gray-600">
          <PersonalInfoHeader resumeData={resumeData} hexColor={colorHex} />
          {/* Skills  */}
          {!!resumeData.skills && resumeData.skills?.length > 0 && (
            <>
              <Heading colorHex={colorHex}>Skills</Heading>
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
              <Heading colorHex={colorHex}>Education</Heading>
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
                <Heading colorHex={colorHex}>Certifications</Heading>
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
              <Heading colorHex={colorHex}>{resumeData.others.title}</Heading>
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
              <Heading colorHex={colorHex}>Professional Summary</Heading>
              <Text>{resumeData.summary}</Text>
            </>
          )}
          {/* Experience */}
          {!!resumeData?.workExperiences &&
            resumeData?.workExperiences?.length > 0 && (
              <>
                <Heading colorHex={colorHex}>Professional Experience</Heading>
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
              <Heading colorHex={colorHex}>Project Work</Heading>
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

function PersonalInfoHeader({
  resumeData,
  hexColor,
}: {
  resumeData: ResumeValues;
  hexColor?: string;
}) {
  const {
    photo,
    portfolioLink,
    socialLinks,
    city,
    country,
    phone,
    email,
    borderStyle,
  } = resumeData;

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
            className="-ml-3 aspect-square h-[120px] w-[120px] border-4 border-white object-cover object-top"
            style={{
              borderRadius:
                borderStyle === BorderStyles.SQUARE
                  ? "0px"
                  : borderStyle === BorderStyles.CIRCLE
                    ? "9999px"
                    : "10%",
            }}
          />
        </div>
      )}
      {/* Social Links  */}
      <div className="flex flex-col gap-y-1">
        {(city || country) && (
          <p className="flex items-center gap-1">
            <span
              className="p-0.5"
              style={{
                backgroundColor: hexColor,
              }}
            >
              <BiSolidMap />
            </span>

            {city}
            {city && country ? ", " : ""}
            {country}
          </p>
        )}
        <ContactLinks hexColor={hexColor} text={phone} href={`tel:${phone}`} />
        <ContactLinks
          hexColor={hexColor}
          text={email}
          href={`mailto:${email}`}
        />
        {!!socialLinks &&
          socialLinks.length > 0 &&
          socialLinks.map((link, index) => (
            <ContactLinks
              hexColor={hexColor}
              key={index}
              text={link.split("://")?.[1]}
              href={link}
            />
          ))}
        {portfolioLink && (
          <ContactLinks
            hexColor={hexColor}
            text={"Portfolio"}
            href={portfolioLink}
          />
        )}
      </div>
    </div>
  );
}
function ContactLinks({
  icon,
  text = "",
  href,
  hexColor,
}: {
  icon?: React.ReactNode;
  text?: string | number | undefined;
  href?: string | undefined;
  hexColor?: string | undefined;
}) {
  return (
    <>
      {text && (
        <Link
          href={href ? href : "#"}
          target="_blank"
          className="flex items-center gap-1"
        >
          <span
            className="p-0.5"
            style={{
              backgroundColor: hexColor,
            }}
          >
            {icon ? icon : <SocialMediaIconFinder url={href ? href : ""} />}
          </span>
          {text === "NO_TEXT" ? "" : <p>{text}</p>}
        </Link>
      )}
    </>
  );
}

function Text({ children }: { children: string }) {
  return <p className="!m-0 whitespace-pre-line">{children}</p>;
}

function Heading({
  children,
  colorHex,
}: {
  children: string;
  colorHex?: string | undefined;
}) {
  return (
    <>
      <div className="relative break-inside-avoid">
        <h1 className="text-nowrap text-[1.2em] font-semibold uppercase">
          {children}
        </h1>
        <span
          className="absolute left-[10%] top-0 h-0 w-full border-4"
          style={{
            borderColor: colorHex,
          }}
        ></span>
      </div>
    </>
  );
}
