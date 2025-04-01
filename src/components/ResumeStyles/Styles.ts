import ATSStyle1 from "@/components/ResumeStyles/ATSStyle1";
import s1 from "@/assets/resume-styles/1.png";
import s2 from "@/assets/resume-styles/2.png";
import { ComponentType } from "react";
import { StaticImageData } from "next/image";
import { ResumeValues } from "@/lib/validation";
import Stylish1 from "./Stylish1";

interface ResumePreviewProps {
    resumeData: ResumeValues;
    className?: string;
}

export interface ResumeStyle {
    id: string;
    name: string;
    component: ComponentType<ResumePreviewProps>;
    desc: string;
    samplePic: StaticImageData; // Assuming it's a URL string. If using next/image, use `StaticImageData`
    category: string;
    price: string;
}


export const resumeStyles: ResumeStyle[] = [
    {
        id: "1",
        name: "ATS Friendly Resume",
        component: ATSStyle1,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s1,
        category: "ATS Friendly",
        price: "FREE",
    },
    {
        id: "2",
        name: "Black Simple Professional CV Resume",
        component: Stylish1,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s2,
        category: "ATS Friendly",
        price: "FREE",
    },
]

