import React from "react";
import Layout from "@/components/layout/Layout";
import { resumeStyles } from "@/components/ResumeStyles/Styles";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { canCreateResume } from "@/lib/permissions";
import prisma from "@/lib/prisma";
import TemplateCard from "./TemplateCard";
import BackStyle1 from "@/components/backgroundStyle/BackStyle1";

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
  console.log(userId, totalCount, subscriptionLevel);
  return (
    <Layout>
      <BackStyle1>
        <div className="flex w-full grid-cols-2 flex-col gap-2 sm:grid md:grid-cols-3 lg:grid-cols-4">
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
      </BackStyle1>
    </Layout>
  );
}
