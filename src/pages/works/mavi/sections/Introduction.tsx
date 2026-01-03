import { Button } from "@/common/shadcn/components/button"
import maviWebHomepage from '@/assets/mavi/mavi-homepage.svg';
import maviLogo from '@/assets/mavi/mavi-logo.svg';

export const Introduction = () => {

  return (
    <>
      <div className="bg-mavi mb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-20 items-center">
          <div className='relative'>
            <div className='grid place-items-center'>
              <img src={maviWebHomepage} alt="Mavi Web Homepage" loading='lazy' />
            </div>
          </div>
          <div className='text-white flex flex-col gap-12'>
            <div>
              <img src={maviLogo} alt="Mavi Logo" loading='lazy' />
            </div>
            <div>
              <h2 className="text-white text-2xl font-normal">
                The website is an online platform where users can browse and purchase clothing and accessories.
              </h2>
            </div>
            <div className='flex flex-col justify-between h-[240px]'>
              <p>
                <span className='font-bold'>Project type: </span>
                <span>End-to-End Redesign of the E-Commerce Experience</span>
              </p>
              <p>
                <span className='font-bold'>Role: </span>
                <span>
                  UX researcher + UX/UI designer
                  <span className='italic text-mavi-yellow'>
                    (with support from my team at Userspots agency, Avengers, and design critique, Tuğba Işık)
                  </span>
                </span>
              </p>
              <p>
                <span className='font-bold'>Industry: </span>
                <span>Fashion, E-commerce</span>
              </p>
              <p>
                <span className='font-bold'>Tools: </span>
                <span>Figma, Sketch, Miro</span>
              </p>
              <p>
                <span className='font-bold'>Duration: </span>
                <span>Q4 2020-Q1 2021</span>
              </p>
            </div>
            <div>
              <Button
                className='bg-white text-mavi hover:bg-white/80 h-[64px] w-[367px] rounded-[40px] text-base'
                size="lg"
              >View Prototype
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                PROJECT OVERVIEW
              </h2>
            </div>
            <div className='mt-15 pl-3'>
              <ul className='list-disc list-inside text-link underline underline-offset-4'>
                <li>
                  <a href="#about">About Mavi & Project scope's</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                RESEARCH
              </h2>
            </div>
            <div className='mt-15 pl-3'>
              <ul className='list-disc list-inside gap-4 text-link underline underline-offset-4'>
                <li>
                  <a href="#store-stuff-in-depth-interviews">Store stuff In-depth interviews (4)</a>
                </li>
                <li className='mt-3'>
                  <a href="#user-interviews">User interviews (6)</a>
                </li>
                <li className='mt-3'>
                  <a href="#brand-benchmarking">Brand benchmarking (162)</a>
                </li>
                <li className='mt-3'>
                  <a href="#trends">Trends study</a>
                </li>
                <li className='mt-3'>
                  <a href="#mental-model">Mental model</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                DESIGN
              </h2>
            </div>
            <div className='mt-15 pl-3'>
              <ul className='list-disc list-inside gap-4 text-link underline underline-offset-4'>
                <li>
                  <a href="#wireframes">High-fidelity wireframes</a>
                </li>
                <li className='mt-3'>
                  <a href="#final-design">Final design</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
