"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const buttonClasses = {
    black: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",
    white: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
  }
  return (
    <div className="min-h-screen grid grid-rows-1 font-[family-name:var(--font-geist-mono)]">
      <div className="grid grid-cols-[1fr_2fr_1fr]">
        <div className="bg-slate-100"></div>
        <div className="flex flex-col gap-8 p-5 items-center sm:items-start">
          <p className="text-3xl">Sriharsha Keshavamurthy</p>
          <button className={accordionOpen ? buttonClasses.white : buttonClasses.black} onClick={() => setAccordionOpen(false)}>What I do?</button>
          <button className={accordionOpen ? buttonClasses.black : buttonClasses.white} onClick={() => setAccordionOpen(true)}>Looking for my CV?</button>
          {accordionOpen && <div>
            <div className="bioname">
              <p>Creative mind and curious learner seeking a software developer position in a growth-oriented organisation where I can utilise my software design and developing skills to my full potential.</p>
            </div>
            <div className="workExperience">
              <h2 className="font-semibold mb-2">Software Developer at Nous Info Systems, Bengaluru</h2>
              <div className="mb-3">
                <p className="text-sm">Implemented DNA Catalyst center project for CISCO, focusing on centralized network management and automation for enterprise wireless LAN controllers, enhancing network efficiency and scalability.</p>
              </div>
              <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">Designed and implemented a parser to convert JSON configurations into interactive user interfaces using React.js web components.</li>
                <li className="mb-2">Modified Figma mockups to meet business requirements by analyzing a legacy system, identifying and addressing redundancies and technical difficulties.</li>
                <li className="mb-2">Mentored junior developers on new code generation tools, improving team efficiency.</li>
                <li className="mb-2">Participated in Agile Scrum practices, contributing to sprint planning, daily stand-ups, and retrospective meetings to ensure timely and efficient project delivery.</li>
              </ol>
            </div>
            <div className="workExperience">
              <h2 className="font-semibold mb-2">Full Stack Developer at Notitia,  Melbourne</h2>
              <div className="mb-3">
                <p className="text-sm">Collaborated with team members and internal stakeholders to ensure successful project delivery.Established CI/CD pipelines using Azure DevOps, enabled seamless deployment of front-end and back-end applications on Azure App Engines.</p>
              </div>
              <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">Designed and implemented a parser to convert JSON configurations into interactive user interfaces using React.js web components.</li>
                <li className="mb-2">Modified Figma mockups to meet business requirements by analyzing a legacy system, identifying and addressing redundancies and technical difficulties.</li>
                <li className="mb-2">Mentored junior developers on new code generation tools, improving team efficiency.</li>
                <li className="mb-2">Participated in Agile Scrum practices, contributing to sprint planning, daily stand-ups, and retrospective meetings to ensure timely and efficient project delivery.</li>
              </ol>
            </div>
            <div className="workExperience">
              <h2 className="font-semibold mb-2">Front End Developer at Starlly,  Bangalore</h2>
              <div className="mb-3">
                <p className="text-sm">Involved in the development of a Lead Management system and Web pages for capturing customer leads for the client.</p>
              </div>
              <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">Designed and implemented a parser to convert JSON configurations into interactive user interfaces using React.js web components.</li>
                <li className="mb-2">Modified Figma mockups to meet business requirements by analyzing a legacy system, identifying and addressing redundancies and technical difficulties.</li>
                <li className="mb-2">Mentored junior developers on new code generation tools, improving team efficiency.</li>
                <li className="mb-2">Participated in Agile Scrum practices, contributing to sprint planning, daily stand-ups, and retrospective meetings to ensure timely and efficient project delivery.</li>
              </ol>
            </div>
          </div>}
        </div>
        <div className="bg-slate-100"></div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portf/phone-call.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          8971138094
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:sriharsha19mel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portf/email.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Sriharshak95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portf/github.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
