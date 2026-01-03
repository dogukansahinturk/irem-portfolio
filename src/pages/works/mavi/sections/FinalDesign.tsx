import { RelevantCarousel } from "../components/RelevantCarousel"
import { Section } from "../components/Section"

const wireframeList = [
  "Homepage",
  "Product listing",
  "Product detail",
  "Jean guide",
  "Online Maviolog",
  "Style suggestions"
]

export const FinalDesign = () => {
  return (
    <Section id="final-design" title="Final Design">
      <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
        <p className='text-xl leading-9 tracking-wide'>
          The UI designs in this section reflect solutions developed in response to insights gathered from users and store staff. You can explore how these solutions are implemented across the&nbsp;
          <span className='font-semibold'>most critical user flows</span>
          &nbsp;— selected from the 11 flows detailed in the Wireframe section:
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
      <RelevantCarousel carouselItems={[]} title="Home Page" />
    </Section>
  )
}
