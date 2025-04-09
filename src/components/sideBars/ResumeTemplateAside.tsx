"use client";
import { useStyleAsideState } from "@/app/(main)/editor/Footer";
import React from "react";
import { Sidebar } from "./SideBar";
import { resumeStyles } from "../ResumeStyles/Styles";
import { Card } from "@/app/(resumeSample)/templates/TemplateCard";

export default function ResumeTemplateAside() {
  const { open, setOpen } = useStyleAsideState();
  return (
    <Sidebar
      isOpen={open}
      onClose={() => setOpen(false)}
      className="flex flex-col gap-4 p-4 overflow-y-auto bg-w3/80"
    >
      <h2 className="text-white text-center font-medium text-lg">Select Resume Templates</h2>
      {resumeStyles.map((style) => (
        <Card key={style.id} style={style} />
      ))}
    </Sidebar>
  );
}
