import maviWebHomepage from '@/assets/mavi/mavi-homepage.svg';
import maviLogo from '@/assets/mavi/mavi-logo.svg';
import maviReserch1 from '@/assets/mavi/research_1.svg';
import maviReserch2 from '@/assets/mavi/research_2.svg';
import maviReserch3 from '@/assets/mavi/research_3.svg';
import maviReserch4 from '@/assets/mavi/research_4.svg';
import storeInterviewPlan from '@/assets/mavi/store-interview-plan.svg';
import interviewHeaderRedIcon from '@/assets/mavi/interview-header-red-icon.svg';
import interviewHeaderYellowIcon from '@/assets/mavi/interview-header-yellow-icon.svg';
import interviewScreenshots from '@/assets/mavi/interview-screenshots.svg';
import { Button } from '@/common/shadcn/components/button';

export default function MaviProject() {
  return (
    <div className="font-light scroll-smooth tracking-wider">

      <div className="bg-mavi">
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
                className='bg-white text-mavi hover:bg-white/80 h-[64px] w-[367px] rounded-[40px] text-[16px]' 
                size="lg"
                >View Prototype
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-4 lg:px-6 py-10 lg:py-16'>
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
                  <span>About Mavi & Project scope's</span>
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
              <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
                DESIGN
              </h2>
            </div>
            <div className='mt-15 pl-3'>
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

      <Section id="about" title="About Mavi & Project Scope">
        {/* <div> */}
          <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 py-10 lg:py-16 leading-7'>
            <p>
              <span className='font-extrabold'>About Mavi: </span>
              Mavi is a globally recognized fashion brand that serves customers through retail, wholesale, and digital channels in 
              <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'> 34 countries. </span>
              With a team of 5,872 employees, the brand blends global reach with local insight. Embracing its 
              <span className='font-semibold'> “Perfect Fit” philosophy, </span>
              Mavi designs
              <span className='font-semibold'> denim and lifestyle products </span>
              tailored to customers’ needs, supported by a loyalty program with over
              <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'> 10,000,000 members </span>
              that drives data-informed, user-centered experiences.
            </p>
            <p className='mt-4'>
              <span className='font-extrabold'>Project scope: </span>
              Through in-depth interviews with users and store staff, user behaviors during the decision-making process were explored, along with key factors influencing purchasing intent. Insights from this research informed an analysis of the
              <span className='font-semibold'> overall shopping experience </span>
              and helped 
              <span className='font-semibold'> identify pain points. </span> 
              Based on these findings, UX and UI design solutions were developed to improve engagement, streamline the journey, and better align with user expectations.
            </p>
          </div>
          <div className="py-6 lg:py-8 grid justify-center">
            <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
              RESEARCH
            </h2>
          </div>
          <div className='mx-auto max-w-7xl grid lg:grid-cols-4 md:grid-cols-2 px-4 lg:px-6 py-8 lg:py-10 gap-5'>
            <ResearchCard
              img={maviReserch1}
              imgAlt='Research Image 1'
              count={162}
              description='app/website benchmarks conducted'
            />

            <ResearchCard
              img={maviReserch2}
              imgAlt='Research Image 2'
              count={4}
              description='Mavi store staff interviewed'
            />

            <ResearchCard
              img={maviReserch3}
              imgAlt='Research Image 3'
              count={522}
              description='minutes of user interviews recorded'
            />

            <ResearchCard
              img={maviReserch4}
              imgAlt='Research Image 4'
              count={428}
              description='user insights gathered'
            />
          </div>
      </Section>

      <Section id="store-stuff-in-depth-interviews" title="Store stuff in-depth interviews">
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 py-10 lg:py-16 leading-7'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col'>
              <img src={interviewHeaderRedIcon} width={37} height={34} alt="Interview Header Red Icon" />
              <div className='flex flex-col gap-10 pl-16 mt-3'>
                <h2 className='text-3xl font-semibold'>
                  Interview Goal
                </h2>
                <p>
                  Before conducting user interviews, one-on-one sessions were held with&nbsp;
                  <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>4 store staffs</span> 
                  &nbsp;to gain preliminary insights about customers. These interviews&nbsp;
                  <span className='font-semibold'>focused on listening to real stories and understanding user complaints, needs, and gaps in knowledge.</span> 
                  &nbsp;It were also conducted with Mavi store stuffs to explore&nbsp;
                  <span className='font-semibold'>their expectations from the website.</span> 
                  &nbsp;Insights gathered from these sessions informed the user interviews, and all findings were later analyzed using a mental model framework.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16 gap-7 leading-7'>
          <div className='col-span-2'>
            <div className='flex flex-col gap-8'>
              <h5 className='text-2xl font-semibold '>
                Research objectives
              </h5>
              <div className='pl-3'>
                <ul className='list-disc list-inside gap-4'>
                  <li>
                    <span>What are the main reasons customers seek help from store staff?</span>
                  </li>
                  <li className='mt-3'>
                    <span>In which areas do customers most frequently request assistance?</span>
                  </li>
                  <li className='mt-3'>
                    <span>Are customers able to easily understand the differences between products? (Especially various jean fits and styles)</span>
                  </li>
                  <li className='mt-3'>
                    <span>What challenges do sales associates face when assisting customers?</span>
                  </li>
                  <li className='mt-3'>
                    <span>How have customers’ shopping habits changed during the pandemic?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={storeInterviewPlan} alt="Interview Plan" loading='lazy' />
          </div>
        </div>

        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 py-10 lg:py-16 leading-7'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col'>
              <img src={interviewHeaderYellowIcon} width={37} height={34} alt="Interview Header Yellow Icon" />
              <div className='flex flex-col gap-10 pl-16 mt-3'>
                <h2 className='text-3xl font-semibold'>
                  Analyzing the interviews
                </h2>
                <p>
                  After completing the interviews, we&nbsp;
                  <span className='font-semibold'>transcribed each one</span>
                  &nbsp;individually and summarized the findings. Each entry was analyzed in Excel along with its category and, if available, any notes from the interviewer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img src={interviewScreenshots} alt="Interview Screenshots" loading='lazy' />
        </div>
      </Section>

    </div>
  )
}

const Section = ({
  id,
  className = "",
  children,
  title,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}) => (
  <section
    id={id}
    className={`py-5 scroll-mt-24 lg:scroll-mt-28 ${className}`}
    aria-labelledby={`${id}-title`}
  >
    {title && (
      <header className="py-6 lg:py-10 bg-mavi text-white grid justify-center">
        <h2
          id={`${id}-title`}
          className="text-2xl lg:text-4xl font-medium tracking-tight"
        >
          {title}
        </h2>
      </header>
    )}
    {children}
  </section>
);


const ResearchCard = ({img, imgAlt, count, description}: {
  img: string;
  imgAlt: string;
  count: number;
  description: string;
}) => {
  return (
    <div className='border-mavi-yellow border-3 border-solid rounded-lg'>
      <div className="flex flex-col h-full">
        <div className='h-1/2 flex items-center justify-center p-12'>
          <img src={img} alt={imgAlt} loading='lazy' />
        </div>
        <div className='h-1/2 border-t-3 border-mavi-yellow flex items-center justify-center'>
          <div className='w-full h-full bg-mavi-yellow-background flex flex-col items-center px-6 py-8 gap-4'>
            <h3 className="font-medium text-4xl">{count}</h3>
            <p className="font-extralight text-xl text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
};
