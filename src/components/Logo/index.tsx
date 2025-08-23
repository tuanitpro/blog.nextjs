import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="custom-logo-link" rel="home">
      <Image
        width="248"
        height="248"
        src="/logo.jpg"
        className="custom-logo"
        alt="Tuấn"
      />
    </Link>
  );
};

export default Logo;
