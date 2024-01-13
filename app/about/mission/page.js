import Button from "@/app/components/button";
import React from "react";
import Image from "next/image";
import girlImg from "@/public/images/girl.jpg";
const Mission = () => {
  return (
    <main className="mt-10">
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
        architecto quam ab magni deleniti corrupti incidunt, deserunt voluptate
        nihil vitae accusamus corporis itaque porro odit ex consequatur
        voluptatum labore id.
      </div>
      <div className="w-[400px]">
      <Image src={girlImg} alt="Gril Image" placeholder="blur"></Image>
      </div>
      <Button></Button>
    </main>
  );
};

export default Mission;
