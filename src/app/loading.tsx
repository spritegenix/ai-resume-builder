import Image from "next/image";
import thinking from "@/assets/avatar-thinking-9.svg"

export default function Loading() {
  return (
  <div className="relative h-screen flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-webColor" />
    <Image src={thinking} alt="loader"  className="rounded-full h-28 w-28" />
</div>
)
}
