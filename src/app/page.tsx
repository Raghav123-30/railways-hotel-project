"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
const HomePage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const onLogOut = async () => {
    const domain = process.env.PRODUCTION_URL || "";
    const url = domain + "/api/users/logout";
    const response = await axios.post(url);
    if (response.status == 200) {
      toast({
        title: "Goodbye",
        description: "See you soon",
      });
      setTimeout(() => {
        router.push(routes.LOGINPAGE);
      }, 2000);
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Latest updates</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum
        architecto consequatur accusantium inventore itaque saepe praesentium
        possimus? Consequatur numquam explicabo ullam iure repudiandae veritatis
        fugiat corrupti error quidem deserunt? Voluptates molestiae laudantium
        suscipit cumque ducimus eveniet autem consectetur eaque quidem error
        quas, unde iusto id totam reprehenderit rem exercitationem, nobis
        architecto odit ipsam? Fugit quod eos accusantium animi atque. Quia,
        recusandae nulla consequuntur dolore quibusdam ipsum numquam nesciunt
        placeat et voluptas illum a voluptatum hic repellat laudantium nobis
        tempore? Dolor quo aspernatur beatae rem sapiente, minima pariatur
        expedita possimus. Nobis voluptates praesentium, vel a obcaecati
        possimus minima, at quos harum itaque temporibus adipisci nostrum fugiat
        alias dicta, molestias autem voluptas facere atque? Id perferendis
        voluptates autem necessitatibus dignissimos fugiat! Earum nemo odio
        neque aspernatur quibusdam iste. Sequi nulla ad placeat temporibus, ea
        illo numquam. Soluta id porro minus ipsam at quae ea fugiat libero
        maiores molestiae, deleniti voluptates est?
      </p>
      <Button onClick={onLogOut} className="w-fit">
        Logout
      </Button>
    </div>
  );
};

export default HomePage;
