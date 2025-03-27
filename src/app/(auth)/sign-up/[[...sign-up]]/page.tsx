import BackStyle1 from "@/components/backgroundStyle/BackStyle1";
import Layout from "@/components/layout/Layout";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
   <BackStyle1 className="flex justify-center items-center py-8">
      <Layout>
        <SignUp />
      </Layout>
    </BackStyle1>
  );
}
