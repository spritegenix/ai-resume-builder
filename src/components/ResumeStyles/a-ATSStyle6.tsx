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

export default function ATSStyle2({
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
        "aspect-[210/297] h-fit w-full bg-white p-6 text-zinc-900",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          "space-y-2 font-inter",
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
        Experience
        {!!resumeData?.workExperiences &&
          resumeData?.workExperiences?.length > 0 && (
            <>
              <Heading colorHex={resumeData.colorHex}>
                Professional Experience
              </Heading>
              {resumeData.workExperiences?.map((exp, index) => (
                <div
                  key={index}
                  className="!m-0 grid break-inside-avoid grid-cols-4 pt-1"
                >
                  <div className="flex flex-col gap-y-1">
                    {exp.startDate && (
                      <span>
                        {formatDate(exp.startDate, "MMM yyyy")} -{" "}
                        {exp.endDate
                          ? formatDate(exp.endDate, "MMM yyyy")
                          : "Present"}
                      </span>
                    )}
                    {exp.jobLocation && (
                      <span className="font-semibold">{exp.jobLocation}</span>
                    )}
                  </div>
                  <div className="col-span-3 !m-0">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[1.2em] font-semibold"
                        style={{
                          color: resumeData.colorHex,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-[1.1em] font-semibold italic">
                      {exp.position}
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: exp.description || "",
                      }}
                      className="richTextEditorStyle whitespace-pre-line"
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        {/* Projects */}
        {!!resumeData.projectWorks && resumeData.projectWorks?.length > 0 && (
          <>
            <Heading colorHex={resumeData.colorHex}>Project Work</Heading>
            {resumeData.projectWorks?.map((item, index) => (
              <div
                key={index}
                className="!m-0 break-inside-avoid space-y-1 pt-1"
              >
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
                </div>
                <div className="font-semibold">
                  <p className="flex flex-row">
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
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {resumeData.skills?.map((skill, index) => (
                <div key={index} className="!m-0 break-inside-avoid">
                  <div className="!m-0 flex items-center justify-between">
                    <p className="flex flex-col">
                      <span className="font-semibold">{skill.title}</span>
                      {skill.skillName && skill.skillName.length > 0 && (
                        <span>{skill.skillName?.join(", ")}</span>
                      )}
                    </p>
                  </div>
                  <p className="whitespace-pre-line"></p>
                </div>
              ))}
            </div>
          </>
        )}
        {/* Academics */}
        {!!resumeData.educations && resumeData.educations?.length > 0 && (
          <>
            <Heading colorHex={resumeData.colorHex}>Academics</Heading>

            {resumeData.educations?.map((edu, index) => (
              <div
                key={index}
                className="grid break-inside-avoid grid-cols-4 gap-x-2 gap-y-2"
              >
                <div className="">
                  <p className="!m-0 flex w-full flex-col justify-between">
                    <span>
                      {edu.startDate &&
                        `${formatDate(edu.startDate, "MMM yyyy")} -`}{" "}
                      {edu.endDate
                        ? formatDate(edu.endDate, "MMM yyyy")
                        : "Present"}
                    </span>
                    <span> {edu.location}</span>
                    {edu.marks && <span>Percentage: {edu.marks}%</span>}
                  </p>
                </div>
                <div className="col-span-3">
                  <div className="!m-0 flex w-full flex-col justify-between">
                    <span className="font-semibold">{edu.school}</span>{" "}
                    <span className="">
                      {edu.degree} ({edu.stream})
                    </span>
                    <p>{edu.description}</p>
                  </div>
                </div>
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
          <div className="break-inside-avoid">
            <Heading colorHex={resumeData.colorHex}>
              {resumeData.others.title}
            </Heading>
            <div
              dangerouslySetInnerHTML={{
                __html: resumeData.others.description || "",
              }}
              className="richTextEditorStyle whitespace-pre-line pt-1"
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
          className={`flex ${photoSrc ? "h-[100px]" : ""} gird flex-col justify-between`}
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
      <div className="my-auto ml-auto grid grid-cols-2">
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
    <div className="mb-2 space-y-1">
      <Link
        href={resumeData.portfolioLink || "#"}
        className="cursor-pointer text-center"
      >
        <div className="flex items-end gap-x-3">
          <p
            className="text-2xl font-bold"
            style={{
              color: colorHex,
            }}
          >
            {firstName &&
              firstName?.charAt(0).toUpperCase() + firstName?.slice(1)}{" "}
            {lastName}
          </p>
          <p
            className="text-xl"
            style={{
              color: colorHex,
            }}
          >
            {jobTitle}
          </p>
        </div>
      </Link>
      {/* Social Links  */}
      <div className="grid grid-cols-3 flex-wrap gap-x-8 gap-y-1">
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
  return <p className="!m-0 whitespace-pre-line pt-1">{children}</p>;
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
      <div className="flex break-inside-avoid flex-col space-y-1 text-base">
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
