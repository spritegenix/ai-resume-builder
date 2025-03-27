"use client";

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
      <Link href={`/editor?styleId=${style.id}`}>
        <div className="cursor-pointer">
          <Card style={style} />
        </div>
      </Link>
    );
  }

  console.log("cannot create");
  return (
    <button
      onClick={() => premiumModal.setOpen(true)}
      className="w-full cursor-pointer"
    >
      <Card style={style} />
    </button>
  );
}

export function Card({ style }: { style: ResumeStyle }) {
  return (
    <div className="cursor-pointer border-2 border-webColor p-2 text-center transition-all duration-300 hover:border-black">
      <Image
        src={style.samplePic}
        alt={style.name}
        width={650}
        height={650}
        className="mb-2 border border-zinc-300 object-contain"
      />
      <h2 className="text-xl font-medium">{style.name}</h2>
      <p className="line-clamp-2 text-sm hover:line-clamp-none">{style.desc}</p>
    </div>
  );
}
