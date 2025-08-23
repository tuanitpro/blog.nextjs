import Link from "next/link";

const Hero = () => {
  return (
    <>
      <h2 className="site-title">
        <Link href="/" rel="home">
          Tuấn
        </Link>
      </h2>
      <p className="site-description">
        Hãy theo đuổi đam mê, nợ nần sẽ theo đuổi bạn
      </p>
    </>
  );
};

export default Hero;
