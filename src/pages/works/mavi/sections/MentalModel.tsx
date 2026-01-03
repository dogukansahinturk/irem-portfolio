import { Section } from "../components/Section"
import mentalModelScreenshot from '@/assets/mavi/mental-model-screenshot.svg';

export const MentalModel = () => {
  return (
    <Section id="mental-model" title="Mental Model">
      <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <p className='text-xl leading-9 tracking-wide'>
          We created a mental model by analyzing user behavior across three key stages:
          <br/>
          <br/>
          <span className='font-semibold'>Before purchase:</span> 
          &nbsp;What motivates them to buy, how they stay informed about Mavi and its discounts,
          <br/>
          <span className='font-semibold'>During purchase:</span> 
          &nbsp;People, events, or situations that influence them; how they describe the products; how they search for items they like; size selection; jean models and product features,
          <br/>
          <span className='font-semibold'>After purchase:</span> 
          &nbsp;How they style the product, and their experiences with return and exchange processes.
          <br/>
          <br/>
          Based on these insights, we developed a total of&nbsp;
          <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>130 design recommendations</span>
          &nbsp;across all user groups.
        </p>
      </div>
      <div className='w-full mt-16'>
        <img src={mentalModelScreenshot} alt="Mental Model Screenshot" loading='lazy' className='w-full h-auto' />
      </div>
    </Section>
  )
}
