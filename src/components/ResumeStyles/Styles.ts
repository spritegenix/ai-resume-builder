
import { ComponentType } from "react";
import { StaticImageData } from "next/image";
import { ResumeValues } from "@/lib/validation";
import { ATSStyle1, ATSStyle2, Stylish1 } from "./index";
import { s1, s2 } from "@/assets/resume-styles";


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
    category:("All" | "ATS Friendly" | "Creative" | "Stylish" | "Simple" | "Modern")[];
    tags: ("Single Page" | "Multi Page")[];
    price: string;
}


export const resumeStyles: ResumeStyle[] = [
    {
        id: "1",
        name: "ATS Friendly Resume",
        component: ATSStyle1,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s1,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    },
    {
        id: "2",
        name: "Black Simple Professional CV Resume",
        component: Stylish1,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s2,
        category: ["All", "ATS Friendly"],
        tags: ["Single Page"],
        price: "FREE",
    },
    {
        id: "3",
        name: "ATS FRIENDLY Professional CV Resume",
        component: ATSStyle2,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s1,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    },
   
]

