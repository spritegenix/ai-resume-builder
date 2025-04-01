"use client";

import PremiumModal from "@/components/premium/PremiumModal";
import { ResumeStyle } from "@/components/ResumeStyles/Styles";
import usePremiumModal from "@/hooks/usePremiumModal";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface TemplateCardProps {
  style: ResumeStyle;
  canCreate: boolean;
  isUser: boolean;
}

export default function TemplateCard({
  style,
  canCreate,
  isUser,
}: TemplateCardProps) {
  const premiumModal = usePremiumModal();

  if (!isUser) {
    console.log("not user");
    return (
      <Link href={`/sign-in`}>
        <div className="cursor-pointer">
          <Card style={style} />
        </div>
      </Link>
    );
  }

  if (canCreate) {
    console.log("can create");
    return (
      <Link href={`/editor?&styleId=${style.id}`}>
        <div className="cursor-pointer">
          <Card style={style} />
        </div>
      </Link>
    );
  }

  return (
    <>
      <button
        onClick={() => premiumModal.setOpen(true)}
        className="w-full cursor-pointer"
      >
        <Card style={style} />
      </button>
      <PremiumModal />
    </>
  );
}

export function Card({ style }: { style: ResumeStyle }) {
  return (
    <div className="group relative cursor-pointer rounded-sm border-0 text-center transition-all duration-300 hover:border-2 hover:border-black">
      <Image
        src={style.samplePic}
        alt={style.name}
        width={650}
        height={650}
        className="object-contain transition-all duration-500"
      />
      <div className="absolute inset-x-0 top-0 z-10 flex h-0 flex-col items-center justify-center overflow-hidden bg-black/70 text-white transition-all duration-500 group-hover:h-32 group-hover:p-2">
        <h2 className="text-xl font-medium">{style.name}</h2>
        <p className="line-clamp-4 font-rubik text-sm">{style.desc}</p>
      </div>
    </div>
  );
}
