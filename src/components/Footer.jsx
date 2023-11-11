import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Locate,
  Mail,
  Phone,
} from "lucide-react";
import React from "react";
import SectionHeader from "./headers/SectionHeader";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 pt-10 pb-16 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
      <header className="flex justify-start items-center py-4 gap-4">
        <Locate />
        <SectionHeader text={"Find Us"} />
      </header>
      <section className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            Atharva College of Engineering
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
              Charkop Naka, Malad West, Mumbai 400 095
            </p>

            <div className="flex gap-2 md:gap-3 font-semibold">
              <Mail /> Email :{" "}
              <span className="text-csi-secondary-light font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                csiace@gmail.com
              </span>
            </div>
            <div className="flex gap-2 md:gap-3 font-semibold">
              <Phone /> Arnav Sangekar :{" "}
              <span className="text-csi-secondary-light font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              +91 9136833103
              </span>
            </div>
            <div className="flex gap-2 md:gap-3 font-semibold">
              <Phone /> Amey Pandit :{" "}
              <span className="text-csi-secondary-light font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              +91 9702153712
              </span>
            </div>
            <div className="flex gap-2 md:gap-3 font-semibold">
              <Phone /> Ritik Yadav :{" "}
              <span className="text-csi-secondary-light font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              +91 8291563516
              </span>
            </div>
          </div>
        </div>
        <div className="grid place-items-center relative">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.942130860132!2d72.82467711103591!3d19.19772974806442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1696181696449!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="py-10 grid place-items-center relative">
        <div className="absolute border-t-2 border-csi-secondary-bg w-[200%] top-0 left-[50%] -translate-x-[50%] border-dotted"></div>

        <div className="flex justify-between items-center max-w-xs lg:max-w-md xl:max-w-3xl w-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm md:text-base">Let&apos;s Connent!</h4>
            <button type="button" className="flex gap-2 py-1 px-2">
              <Github /> GitHub
            </button>
            <button type="button" className="flex gap-2 py-1 px-2">
              <Linkedin /> LinkedIn
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm md:text-base">Social Media</h4>
            <button type="button" className="flex gap-2 py-1 px-2">
              <Instagram /> Instagram
            </button>
            <button type="button" className="flex gap-2 py-1 px-2">
              <Facebook /> Facebook
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
