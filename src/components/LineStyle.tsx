import React, { ReactNode } from "react";
import { Heading } from "./ResumeStyles/a-ATSStyle5";
interface LineStyleProps {
  colorHex: string;
  header: string;
  children: ReactNode;
}
const LineStyle: React.FC<LineStyleProps> = ({
  colorHex,
  header,
  children,
}) => {
  return (
    <div className="relative grid grid-cols-12 gap-x-4">
      <div className="col-span-2 pb-2">
        <Heading colorHex={colorHex}>{header}</Heading>
      </div>
      <div className="relative col-span-10 pb-2">
        <div
          className="absolute left-0 top-0 h-full w-[2px]"
          style={{ backgroundColor: colorHex }}
        />
        <div className="pl-4">{children}</div>
      </div>
    </div>
  );
};

export default LineStyle;
