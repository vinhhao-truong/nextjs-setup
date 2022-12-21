import React from "react";
import ReactProps from "../interfaces/react-props/ReactProps";
import { getClasses, getStyles } from "../utils/getProps";

const PageContainer: React.FC<ReactProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={`${getClasses(
        className
      )} px-3 md:px-8 lg:px-[9rem] block mx-auto max-w-[1440px] w-full `}
      style={getStyles(style)}
    >
      {children}
    </div>
  );
};
export default PageContainer;
