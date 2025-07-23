import Image from "next/image";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="fixed z-10 bg-[#1A1A1A] w-full h-14">
      <div className="items-center h-14">
        <Link href="/">
          <Image
            src="/images/amba_logo.png"
            fill
            alt=""
            style={{ objectFit: "contain" }}
          />
        </Link>
        {/* <IoMenu className="text-[#E6A800] size-5 mr-10 ml-auto mt-4"/> */}
      </div>
    </div>
  );
};

export default Header;