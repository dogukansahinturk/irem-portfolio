import { RelevantCarousel } from "../components/RelevantCarousel"
import { Section } from "../components/Section"
import headerRedIcon from '@/assets/mavi/header-red-icon.svg';
import headerBlueIcon from '@/assets/mavi/header-blue-icon.svg';
import benchmarkScreenshots from '@/assets/mavi/benchmark-screenshots.svg';
import brandBenchmarkingScreenshots2 from '@/assets/mavi/brand-benchmarking-screenshots-2.svg';

export const BrandBenchmarking = () => {
  return (
    <Section id="brand-benchmarking" title="Brand Benchmarking">
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
          <p className='text-xl leading-9 tracking-wide'>
            We analyzed the functions, concepts, and trends of approximately&nbsp;
            <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>162 brands,</span>
            &nbsp;including&nbsp;
            <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>both industry and non-industry</span>
            &nbsp;brands offering similar experiences. For each benchmark, we compiled a list of critical functions and generated solution ideas based on customer needs and a user-centered perspective.
          </p>
        </div>
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
          <div className='flex flex-col'>
            <img className='relative right-15' src={headerRedIcon} width={37} height={34} />
            <div className='flex flex-col mt-3'>
              <h2 className='text-[2.5em] tracking-wider font-semibold'>
                Benchmark Study
              </h2>
              <p className='mt-12 text-xl leading-9 tracking-wide'>
                In our benchmark study, we captured screenshots of around&nbsp;
                <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>162 different brands’</span>
                &nbsp;<span className='font-semibold'> homepages, menus, product listing pages, collection detail pages, product detail pages, checkout flows, and account creation flows</span>
                &nbsp;— both on mobile and desktop. We organized all of them in a Miro board. We added post-it notes on designs that stood out to us or supported the insights gathered from users and store staffs.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full mt-16'>
          <img src={benchmarkScreenshots} alt="Interview Screenshots" loading='lazy' className='w-full h-auto' />
        </div>

        <RelevantCarousel carouselItems={[]} title="Relevant Benchmark Examples Aligned with the Insights" />

        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-24'>
          <div className='flex flex-col'>
            <img className='relative right-15' src={headerBlueIcon} width={37} height={34} />
            <div className='flex flex-col mt-3'>
              <h2 className='text-[2.5em] tracking-wider font-semibold'>
                Benchmark Function List
              </h2>
              <p className='mt-12 text-xl leading-9 tracking-wide'>
                Using Excel, we listed and&nbsp;
                <span className='font-semibold'> analyzed key features </span>
                across categories like homepage, product listing, filtering, and checkout for each benchmarked platform.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full mt-16'>
          <img src={brandBenchmarkingScreenshots2} alt="Benchmark Screenshots" loading='lazy' className='w-full h-auto' />
        </div>
      </Section>
  )
}
