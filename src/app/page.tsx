import resumePreview from "@/assets/resume-preview.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Layout from "@/components/layout/Layout";
import BackStyle1 from "@/components/backgroundStyle/BackStyle1";

export default function Home() {
  return (
    <Layout>
      <BackStyle1 className="grid gap-5 py-8 md:grid-cols-2">
        <div className="my-auto space-y-3">
          <h1 className="scroll-m-20 text-4xl md:leading-[5rem] lg:text-[5rem]">
            Land Your Dream Job with a Winning Resume.
          </h1>
          <h6 className="font-light md:text-3xl">
            Create a clean, concise, and ATS-optimized resume in minutes.
            Maximize your reach and get noticed by top recruiters.
          </h6>
          <ul className="list-inside list-disc font-inter text-zinc-600 dark:text-zinc-400 max-sm:text-sm">
            <li>Built with smart design & formatting</li>
            <li>Optimized for modern job search platforms</li>
            <li>Increase your interview chances instantly</li>
          </ul>
          <Button asChild size="lg" variant="premium">
            <Link href="/resumes">Create Your CV</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={resumePreview}
            alt="Resume preview"
            width={400}
            className="border-4 border-[#FFAA17] shadow-md"
          />
        </div>
      </BackStyle1>
    </Layout>
  );
}
