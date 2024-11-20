import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hi!, I'm <br /> <span className="text-accent">Daniel Lozada</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I have more than 2 years of experience in developing web
              applications with technologies such as Next Js, Contentful, AWS
              and Java, applying high standards of usability and accessibility.
            </p>
            {/*btn & social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>Socials</div>
            </div>
          </div>
          {/*photo*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
