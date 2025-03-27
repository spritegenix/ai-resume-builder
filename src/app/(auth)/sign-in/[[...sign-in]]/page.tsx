import BackStyle1 from "@/components/backgroundStyle/BackStyle1";
import Layout from "@/components/layout/Layout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <BackStyle1 className="flex items-center justify-center py-8">
      <Layout>
        <SignIn />
      </Layout>
    </BackStyle1>
  );
}
