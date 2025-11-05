// import React from "react";
// import Link from "next/link";

// const FooterText = ({ text }: { text: string }) => {
//   return (
//     <div>
//       <Link href="#" >
//         {text}
//       </Link>
//     </div>
//   );
// };
// export default FooterText;
import React from "react";
import Link from "next/link";

interface FooterTextProps {
  text: string;
  href: string;
  className?: string; // optional className
}

const FooterText: React.FC<FooterTextProps> = ({ text, href, className }) => {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
};

export default FooterText;
