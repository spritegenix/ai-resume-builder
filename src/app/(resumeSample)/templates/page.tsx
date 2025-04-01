import React from "react";
import Layout from "@/components/layout/Layout";
import { resumeStyles } from "@/components/ResumeStyles/Styles";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { canCreateResume } from "@/lib/permissions";
import prisma from "@/lib/prisma";
import TemplateCard from "./TemplateCard";
import BackStyle2 from "@/components/backgroundStyle/BackStyle2";

export default async function TemplatesPage() {
  const { userId } = await auth();

  let totalCount = 0;
  let subscriptionLevel = null;

  if (userId) {
    [totalCount, subscriptionLevel] = await Promise.all([
      prisma.resume.count({
        where: { userId },
      }),
      getUserSubscriptionLevel(userId),
    ]);
  }
  return (
    <Layout>
      <BackStyle2>
        <div className="flex w-full grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-3">
          {resumeStyles.map((style) => (
            <TemplateCard
              key={style.id}
              style={style}
              canCreate={
                subscriptionLevel
                  ? canCreateResume(subscriptionLevel, totalCount)
                  : false
              }
              isUser={userId ? true : false}
            />
          ))}
        </div>
      </BackStyle2>
    </Layout>
  );
}
