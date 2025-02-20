import { Button } from "@/components/ui/button";

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br /> <span className="text-accent">Daniel Lozada</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Let's boost your business with AI and SEO.
            Better search engine positioning, more organic traffic and more customers. <br /> 
            Grow smartly.
            </p>
            {/*btn & social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Find out how here!</span>
              </Button>
              <div className="mb-8 xl:mb-0 flex items-center">
                <Social 
                containerStyles ="flex gap-6 " 
                iconStyles = "w-9 h-9 border border-accent rounded-full flex
                 justify-center items-center text-accent text-base hover:bg-accent 
                hover:text-primary hover:transition-all duration-500"
                /> 
              </div>
            </div>
          </div>
          {/*photo*/}
          <div><Photo/></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
