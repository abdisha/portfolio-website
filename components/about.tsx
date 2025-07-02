"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information System </span>, I decided to pursue my
        passion for programming. I joined the ERP Solution company, developing various Modules, and now I'm working on the OpenMRS implementation for the MOH of Ethiopia.
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        A feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Heavy backend with Java Springboot, git, CI/CD, React, Angular+2, and MySQL.
        </span>
        I also have experience working with .NET, ASP.NET Core, and SQL, and I'm always eager to learn new technologies.
        I am currently looking for a {" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic"> Leisure activities </span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">Working on Personal Project</span>. I am currently
        working on {" "}
        <span className="font-medium">Service provider and requester app</span>. I'm also
        learning LLM.
      </p>
    </motion.section>
  );
}
