import maviWebHomepage from '@/assets/mavi/mavi-homepage.svg';
import maviLogo from '@/assets/mavi/mavi-logo.svg';
import { Button } from '@/common/shadcn/components/button';

export default function MaviProject() {
  return (
    <div className="flex flex-col font-light">

      <div className="bg-mavi">
        <div className="my-28 mx-28">
          <div className="flex items-center gap-20">
            <div className='flex shrink-0 items-center w-[672px] h-[414px]'>
              <img src={maviWebHomepage} alt="Mavi Web Homepage" />
            </div>
            <div className='flex flex-col justify-between text-white h-[579px] w-[733px]'>
              <div>
                <img src={maviLogo} alt="Mavi Logo" />
              </div>
              <div>
                <span className="text-white text-2xl font-normal">
                  The website is an online platform where users can browse and purchase clothing and accessories.
                </span>
              </div>
              <div className='flex flex-col justify-between h-[240px]'>
                <div>
                  <span className='font-bold'>Project type: </span> 
                  <span>End-to-End Redesign of the E-Commerce Experience</span>
                </div>
                <div>
                  <span className='font-bold'>Role: </span> 
                  <span>
                    UX researcher + UX/UI designer 
                    <span className='italic text-mavi-italic'>
                      (with support from my team at Userspots agency, Avengers, and design critique, Tuğba Işık)
                    </span>
                  </span>
                </div>
                <div>
                  <span className='font-bold'>Industry: </span> 
                  <span>Fashion, E-commerce</span>
                </div>
                <div>
                  <span className='font-bold'>Tools: </span> 
                  <span>Figma, Sketch, Miro</span>
                </div>
                <div>
                  <span className='font-bold'>Duration: </span> 
                  <span>Q4 2020-Q1 2021</span>
                </div>
              </div>
              <div>
                <Button 
                  className='bg-white text-mavi hover:bg-white/80 h-[64px] w-[367px] rounded-[40px] text-[16px]' 
                  size="lg"
                  >View Prototype
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-20 mx-28'>
        <div className='flex justify-around'>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-medium'>PROJECT OVERVIEW</h2>
            </div>
            <div className='mt-15'>
              <ul className='list-disc list-inside text-link underline underline-offset-4'>
                <li>
                  <span>About Mavi & Project scope's</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-medium'>RESEARCH</h2>
            </div>
            <div className='mt-15'>
              <ul className='list-disc list-inside gap-4 text-link underline underline-offset-4'>
                <li>
                  <span>Store stuff In-depth interviews (4)</span>
                </li>
                <li className='mt-3'>
                  <span>User interviews (6)</span>
                </li>
                <li className='mt-3'>
                  <span>Brand benchmarking (162)</span>
                </li>
                <li className='mt-3'>
                  <span>Trends study</span>
                </li>
                <li className='mt-3'>
                  <span>Mental model</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <h2 className='text-2xl font-medium'>DESIGN</h2>
            </div>
            <div className='mt-15'>
              <ul className='list-disc list-inside gap-4 text-link underline underline-offset-4'>
                <li>
                  <span>High-fidelity wireframes</span>
                </li>
                <li className='mt-3'>
                  <span>Final design</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
