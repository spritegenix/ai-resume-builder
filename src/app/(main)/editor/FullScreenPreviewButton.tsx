import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "next-view-transitions";

export default function FullScreenPreviewButton({ slug }: { slug: string }) {
  const Icon = ExternalLink;
  return (
    <Button asChild variant="outline" size="icon" title="Change border style">
      <Link href={slug ? `/resume/${slug}` : "#"} target="_blank">
        <Icon className="size-5" />
      </Link>
    </Button>
  );
}
