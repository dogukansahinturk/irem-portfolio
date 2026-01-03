import { Section } from "../components/Section"
import wireframeScreenshots from '@/assets/mavi/wireframe-screenshots.svg';

const wireframeList = [
  "Homepage",
  "Navigation menu",
  "Product listing",
  "Product detail",
  "Search",
  "Favorites",
  "Jean guide",
  "Online consultation",
  "Style suggestions",
  "User account",
  "Sign up & Log in"
]

export const Wireframes = () => {
  return (
    <Section id="wireframes" title="Wireframes">
      <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <p className='text-xl leading-9 tracking-wide'>
          We created &nbsp;
          <span className='font-semibold'>high-fidelity wireframes</span>
          &nbsp;to help clients better visualize the final user interface and to streamline the feedback process. The wireframes were developed across&nbsp;
          <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>11 key user flows,</span>
          &nbsp;including:
        </p>
        <br />
        <div className='pl-7 text-xl leading-9 tracking-wide'>
          <ul className='list-disc list-outside gap-4'>
            {wireframeList.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full mt-16'>
        <img src={wireframeScreenshots} alt="Wireframe Screenshots" loading='lazy' className='w-full h-auto' />
      </div>
    </Section>
  )
}
