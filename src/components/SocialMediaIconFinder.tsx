import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface SocialMediaIconFinderProps {
  url: string;
  className: string;
}

const SocialMediaIconFinder: React.FC<SocialMediaIconFinderProps> = ({ url, className }) => {
  // Function to detect the platform from the URL
  const detectPlatform = (url: string): string => {
    if (url.includes("tel:")) return "phone";
    if (url.includes("facebook.com")) return "facebook";
    if (url.includes("twitter.com")) return "twitter";
    if (url.includes("instagram.com")) return "instagram";
    if (url.includes("linkedin.com")) return "linkedin";
    if (url.includes("youtube.com")) return "youtube";
    if (url.includes("github.com")) return "github";
    return "generic"; // Default platform if none match
  };

  // Function to return the respective icon
  const getIcon = (platform: string) => {
    switch (platform) {
      case "phone":
        return <FaPhone className={`${className}`} />;
      case "facebook":
        return <FaFacebook className={`${className}`} />;
        case "github":
        return <FaGithub className={`${className}`} />;
      case "twitter":
        return <FaSquareXTwitter className={`${className}`} />;
      case "instagram":
        return <FaInstagram className={`${className}`} />;
      case "linkedin":
        return <FaLinkedin className={`${className}`} />;
      case "youtube":
        return <FaYoutube className={`${className}`} />;
      default:
        return <FaLink className={`${className}`} />;
    }
  };

  // Detect platform and get the corresponding icon
  const platform = detectPlatform(url);
  return getIcon(platform);
};

export default SocialMediaIconFinder;

//  <SocialMediaIconFinder url={link} />
