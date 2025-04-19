
import { ComponentType } from "react";
import { StaticImageData } from "next/image";
import { ResumeValues } from "@/lib/validation";

import { ATSStyle1, ATSStyle2, Stylish1, ATSStyle3, Modern1,AATSStyle4, AATSStyle5, AATSStyle6, ATSStyle4, ATSStyle7, ATSStyle8 } from "./index";
import { s1, s2, s3, s4, s5,as6, as7,as8, s6, s7, s8 } from "@/assets/resume-styles";



interface ResumePreviewProps {
    resumeData: ResumeValues;
    className?: string;
}

export const resumeCategories = [
    "All",
    "ATS Friendly",
    "Creative",
    "Stylish",
    "Simple",
    "Modern",
  ] as const;

  export type ResumeCategory = (typeof resumeCategories)[number];

  export const resumeTags = [
    "Single Page",
    "Multi Page",
  ] as const;

  export type ResumeTag = (typeof resumeTags)[number];

export interface ResumeStyle {
    id: string;
    name?: string;
    component: ComponentType<ResumePreviewProps>;
    desc?: string;
    samplePic?: StaticImageData; // Assuming it's a URL string. If using next/image, use `StaticImageData`
    category?: (ResumeCategory)[];
    tags?: ResumeTag[];
    price?: string;
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
        category: ["All", "Stylish"],
        tags: ["Single Page"],
        price: "FREE",
    },
    {
        id: "3",
        name: "Classic monochrome resume template for executives",
        component: ATSStyle2,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s3,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    },
    {
        id: "4",
        name: "Classic monochrome resume template for executives",
        component: ATSStyle3,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: s4,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    },
   {
    id: "5",
    name: "Classic monochrome resume template for executives",
    component: Modern1,
    desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
    samplePic: s5,
    category: ["All", "ATS Friendly", "Modern"],
    tags: ["Multi Page"],
    price: "FREE",
   },

    {
        id: "7",
        name: "Hunter Green · Multi-column resume with accent",
        component: AATSStyle4,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: as6,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    },
    {
        id: "8",
        name: "Green and Black Professional Corporate ATS Resume",
        component: AATSStyle5,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: as7,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    },
    {
        id: "a-9",
        name: "Viola · Minimalistic resume · Classic",
        component: AATSStyle6,
        desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
        samplePic: as8,
        category: ["All", "ATS Friendly"],
        tags: ["Multi Page"],
        price: "FREE",
    }, 
   {
    id: "6",
    name: "Classic monochrome resume template for executives",
    component: ATSStyle4,
    desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
    samplePic: s6,
    category: ["All", "ATS Friendly"],
    tags: ["Single Page"],
    price: "FREE",
   },
   {
    id: "10",
    name: "Classic monochrome resume template for executives",
    component: ATSStyle7,
    desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
    samplePic: s7,
    category: ["All", "ATS Friendly"],
    tags: ["Single Page"],
    price: "FREE",
   },
   {
    id: "11",
    name: "Classic monochrome resume template for executives",
    component: ATSStyle8,
    desc: "Highly ATS Friendly Resume. You can make add or remove your profile photo.",
    samplePic: s8,
    category: ["All", "ATS Friendly"],
    tags: ["Single Page"],
    price: "FREE",
   },

]

