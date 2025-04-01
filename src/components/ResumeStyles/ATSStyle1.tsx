"use client";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { formatDate } from "date-fns";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SocialMediaIconFinder from "../SocialMediaIconFinder";
import Link from "next/link";
import { BiSolidMap } from "react-icons/bi";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ATSStyle1({
  resumeData,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  const BaseFontSize = resumeData?.baseFontSize
    ? `text-[${resumeData.baseFontSize}px]`
    : "text-[10px]";

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-zinc-900",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          "space-y-2 p-6 font-inter",
          BaseFontSize,
          !width && "invisible",
        )}
        style={{
          zoom: (1 / 794) * width,
        }}
        id="resumePreviewContent"
      >
        {resumeData.photo ? (
          <PersonalInfoHeader resumeData={resumeData} />
        ) : (
          <PersonalInfoHeader1 resumeData={resumeData} />
        )}
        {/* Summary */}
        {resumeData.summary && (
          <>
            <Heading colorHex={resumeData.colorHex}>
              Professional Summary
            </Heading>
            <Text>{resumeData.summary}</Text>
          </>
        )}
        {/* Experience */}
        {!!resumeData?.workExperiences &&
          resumeData?.workExperiences?.length > 0 && (
            <>
              <Heading colorHex={resumeData.colorHex}>
                Professional Experience
              </Heading>
              {resumeData.workExperiences?.map((exp, index) => (
                <div key={index} className="!m-0 break-inside-avoid">
                  <div className="!m-0 flex items-center justify-between">
                    <span
                      className="text-[1.2em] font-semibold"
                      style={{
                        color: resumeData.colorHex,
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
                    dangerouslySetInnerHTML={{ __html: exp.description || "" }}
                    className="richTextEditorStyle whitespace-pre-line"
                  />
                </div>
              ))}
            </>
          )}
        {/* Projects */}
        {!!resumeData.projectWorks && resumeData.projectWorks?.length > 0 && (
          <>
            <Heading colorHex={resumeData.colorHex}>Project Work</Heading>
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
                        color: resumeData.colorHex,
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
        {/* Skills  */}
        {!!resumeData.skills && resumeData.skills?.length > 0 && (
          <>
            <Heading colorHex={resumeData.colorHex}>Skills</Heading>
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
            <Heading colorHex={resumeData.colorHex}>Academics</Heading>
            {resumeData.educations?.map((edu, index) => (
              <div key={index} className="!m-0 break-inside-avoid">
                <p className="!m-0 flex w-full justify-between">
                  <span className="font-semibold">
                    {edu.school}, {edu.location}
                  </span>{" "}
                  <span>
                    {edu.startDate &&
                      `${formatDate(edu.startDate, "MMM yyyy")} -`}{" "}
                    {edu.endDate
                      ? formatDate(edu.endDate, "MMM yyyy")
                      : "Present"}
                  </span>
                </p>
                <p className="!m-0 flex w-full justify-between">
                  <span className="">
                    {edu.degree} ({edu.stream})
                  </span>
                  <span>{edu.marks}</span>
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </>
        )}
        {/* Certifications  */}
        {!!resumeData.certifications &&
          resumeData.certifications?.length > 0 && (
            <>
              <Heading colorHex={resumeData.colorHex}>Certifications</Heading>
              <div
                className={`flex flex-wrap gap-x-2 ${resumeData.certifications.find((skill) => skill.description) && "flex-col"}`}
              >
                {resumeData.certifications?.map((skill, index) => (
                  <div key={index} className="!m-0 break-inside-avoid">
                    <Link
                      href={skill.link ? skill.link : "#"}
                      className="before:mr-1 before:content-['•']"
                    >
                      {skill.title}
                    </Link>{" "}
                    {skill.description && (
                      <span className="italic"> - {skill.description}</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        {/* Interest  */}
        {!!resumeData.others?.title && (
          <div className="!m-0 break-inside-avoid">
            <Heading colorHex={resumeData.colorHex}>
              {resumeData.others.title}
            </Heading>
            <div
              dangerouslySetInnerHTML={{
                __html: resumeData.others.description || "",
              }}
              className="richTextEditorStyle whitespace-pre-line"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function PersonalInfoHeader({ resumeData }: { resumeData: ResumeValues }) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    portfolioLink,
    socialLinks,
    city,
    country,
    phone,
    email,
    colorHex,
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
    <div className="mb-2 grid grid-cols-2">
      <div className="flex h-max gap-6">
        {photoSrc && (
          <Image
            src={photoSrc}
            width={500}
            height={500}
            alt="Author photo"
            className="aspect-square h-[100px] w-[100px] object-cover object-top"
            style={{
              borderRadius:
                borderStyle === BorderStyles.SQUARE
                  ? "0px"
                  : borderStyle === BorderStyles.CIRCLE
                    ? "9999px"
                    : "10%",
            }}
          />
        )}
        <div
          className={`flex ${photoSrc ? "h-[100px]" : ""} flex-col justify-between`}
        >
          <div className="my-auto">
            <p
              className="text-[3em] font-bold"
              style={{
                color: colorHex,
              }}
            >
              {firstName} {lastName}
            </p>
            <p
              className="text-[1.6em] font-medium"
              style={{
                color: colorHex,
              }}
            >
              {jobTitle}
            </p>
          </div>
        </div>
      </div>
      {/* Social Links  */}
      <div className="my-auto ml-auto">
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
          socialLinks.map((link) => (
            <ContactLinks
              key={link}
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
function PersonalInfoHeader1({ resumeData }: { resumeData: ResumeValues }) {
  const {
    firstName,
    lastName,
    jobTitle,
    portfolioLink,
    socialLinks,
    city,
    country,
    phone,
    email,
    colorHex,
  } = resumeData;

  return (
    <div className="mb-2">
      <Link
        href={resumeData.portfolioLink || "#"}
        className="cursor-pointer text-center"
      >
        <p
          className="text-[3em] font-bold"
          style={{
            color: colorHex,
          }}
        >
          {firstName} {lastName}
        </p>
        <p
          className="text-[1.6em] font-medium"
          style={{
            color: colorHex,
          }}
        >
          {jobTitle}
        </p>
      </Link>
      {/* Social Links  */}
      <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-4">
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
          socialLinks.map((link) => (
            <ContactLinks
              key={link}
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

function Heading({
  children,
  colorHex,
}: {
  children: string;
  colorHex: string | undefined;
}) {
  return (
    <>
      <div className="flex break-inside-avoid gap-x-0.5">
        <h1
          className="text-nowrap text-[1.2em] font-semibold"
          style={{
            color: colorHex,
          }}
        >
          {children}
        </h1>
        <div
          className="border-1 mb-[5px] mt-auto h-0 w-full border"
          style={{
            borderColor: colorHex,
          }}
        />
      </div>
    </>
  );
}
