import { Section } from "../components/Section"
import userInterviewsScreenshots from '@/assets/mavi/user-interviews-screenshots.svg';
import headerRedIcon from '@/assets/mavi/header-red-icon.svg';
import storeInterviewPlan from '@/assets/mavi/store-interview-plan.svg';
import headerYellowIcon from '@/assets/mavi/header-yellow-icon.svg';
import { KeyInsights } from "../components/KeyInsigths";
import person1 from '@/assets/mavi/person-1.svg';

const storeStuffInterviewInsights = [
  {
    title: "JEAN SELECTION",
    quote: "During the COVID period, customers were hesitant to visit stores, so they called to ask about the fabric, fit, and details of the jeans.",
    bottom: "Since customers can’t replicate the in-store experience online, they call store staff for guidance and product advice.",
  },
  {
    title: "BEHIND THE COLLECTIONS",
    quote: 'Some customers ask what the “eco–friendly” theme actually means.',
    bottom: "The “eco–friendly” theme features collections like All Blue and reflects a commitment to sustainable production and resource conservation.",
  },
  {
    title: "JEAN SELECTION",
    quote: "Customers are not familiar with the stories or features of collections other than All Blue, and they frequently ask us about them.",
    bottom: "Each collection has its own story and features, but users often don’t know what they include—despite recognizing the names.",
  },
  {
    title: "SIZE SELECTION",
    quote: "For rigid, 100% cotton jeans with no elastane, I warn customers before they try them on, as the fabric doesn’t stretch, and I usually offer one size up.",
    bottom: "Jean sizing varies depending on the fabric composition, as the size can change based on how stretchy the denim is.",
  },
  {
    title: "ASSISTANCE",
    quote: "When a customer is unsure about which jean to choose, we ask about their style, preferred leg cut, color, and fabric to recommend the most suitable fit.",
    bottom: "Key decision criteria for users include their clothing style, preferred jean cut, color, and fabric.",
  },
  {
    title: "MIX & MATCH",
    quote: "Customers often ask for our advice when putting together outfits, and they usually want to try the combinations they see on the models.",
    bottom: "Seeing visual outfit options plays an important role in users’ decision-making when styling an outfit.",
  },
  {
    title: "STOCK AVAILABILITY",
    quote: "When their size isn’t available online, some users call stores to check.",
    bottom: "Users cannot see in-store stock availability on the product detail pages.",
  },
];

export const StoreStuffInterviews = () => {
  return (
    <Section id="store-stuff-in-depth-interviews" title="Store stuff in-depth interviews">
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
          <div className='flex flex-col'>
            <img className='relative right-15' src={headerRedIcon} width={37} height={34} alt="Interview Header Red Icon" />
            <div className='flex flex-col mt-3'>
              <h2 className='text-[2.5em] tracking-wider font-semibold'>
                Interview Goal
              </h2>
              <p className='mt-12 text-xl leading-9 tracking-wide'>
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

        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center content-center mx-auto max-w-6xl px-4 lg:px-6 mt-16 gap-7'>
          <div className='col-span-2 grid content-center'>
            <div className='flex flex-col gap-8'>
              <h5 className='text-2xl font-semibold '>
                Research objectives
              </h5>
              <div className='pl-10 text-xl tracking-tight leading-9'>
                <ul className='list-disc list-outside gap-4'>
                  <li>
                    <span>What are the main reasons <span className='font-semibold'>customers seek help</span> from store staff?</span>
                  </li>
                  <li className='mt-3'>
                    <span>In which areas do customers most frequently <span className='font-semibold'>request assistance?</span></span>
                  </li>
                  <li className='mt-3'>
                    <span>Are customers able to easily understand the <span className='font-semibold'>differences between products?</span> (Especially various jean fits and styles)</span>
                  </li>
                  <li className='mt-3'>
                    <span>What <span className='font-semibold'>challenges</span> do sales associates face when assisting customers?</span>
                  </li>
                  <li className='mt-3'>
                    <span>How have customers’ shopping habits changed <span className='font-semibold'>during the pandemic?</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={storeInterviewPlan} alt="Interview Plan" loading='lazy' />
          </div>
        </div>

        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-24'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col'>
              <img className='relative right-15' src={headerYellowIcon} width={37} height={34} alt="Interview Header Yellow Icon" />
              <div className='flex flex-col gap-10 mt-3'>
                <h2 className='text-[2.5em] tracking-wider font-semibold'>
                  Analyzing the interviews
                </h2>
                <p className='text-xl leading-9 tracking-wide'>
                  After completing the interviews, we&nbsp;
                  <span className='font-semibold'>transcribed each one</span>
                  &nbsp;individually and summarized the findings. Each entry was analyzed in Excel along with its category and, if available, any notes from the interviewer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-16'>
          <img src={userInterviewsScreenshots} alt="Interview Screenshots" loading='lazy' className='w-full h-auto' />
        </div>

        <KeyInsights
          insights={storeStuffInterviewInsights}
          personImg={person1}
          bubbleText="As a store staff, even I couldn’t tell the difference between the Marcus and Jake fits, when I first started working."
        />

        {/* <div className='flex flex-col mt-24'>
          <div className='flex justify-center'>
            <h2 className='text-3xl font-semibold'>
              Key Insights
            </h2>
          </div>
          <div className='mx-auto max-w-full grid 2xl:grid-cols-4 xl:grid-cols-2 md:grid-cols-2 px-4 mt-16 lg:px-6 gap-5'>
            <div>
            </div>
            <KeyInsightCard 
              title="JEAN SELECTION" 
              upperText="During the COVID period, customers were hesitant to visit stores, so they called to ask about the fabric, fit, and details of the jeans."
              lowerText="Since customers can’t replicate the in-store experience online, they call store staff for guidance and product advice."
              upperHeight={337}
              lowerHeight={264}
            />
            <KeyInsightCard 
              title="BEHIND THE COLLECTIONS"
              upperText="Some customers ask what the “eco-friendly” theme actually means."
              lowerText="The “eco-friendly” theme features collections like All Blue and reflects a commitment to sustainable production and resource conservation."
              upperHeight={337}
              lowerHeight={264}
            />
            <KeyInsightCard 
              title="JEAN SELECTION"
              upperText="Customers are not familiar with the stories or features of collections other than All Blue, and they frequently ask us about them."
              lowerText="Each collection has its own story and features, but users often don’t know what they include—despite recognizing the names."
              upperHeight={337}
              lowerHeight={264}
            />
            <KeyInsightCard 
              title="SIZE SELECTION" 
              upperText="For rigid, 100% cotton jeans with no elastane, I warn customers before they try them on, as the fabric doesn’t stretch, and I usually offer one size up."
              lowerText="Jean sizing varies depending on the fabric composition, as the size can change based on how stretchy the denim is."
              upperHeight={369}
              lowerHeight={200}
            />
            <KeyInsightCard 
              title="ASSISTANCE"
              upperText="When a customer is unsure about which jean to choose, we ask about their style, preferred leg cut, color, and fabric to recommend the most suitable fit."
              lowerText="Key decision criteria for users include their clothing style, preferred jean cut, color, and fabric."
              upperHeight={369}
              lowerHeight={200}
            />
            <KeyInsightCard 
              title="MIX & MATCH"
              upperText="Customers often ask for our advice when putting together outfits, and they usually want to try the combinations they see on the models."
              lowerText="Seeing visual outfit options plays an important role in users’ decision-making when styling an outfit."
              upperHeight={369}
              lowerHeight={200}
            />
            <KeyInsightCard 
              title="STOCK AVAILABILITY"
              upperText="When their size isn’t available online, some users call stores to check."
              lowerText="Users cannot see in-store stock availability on the product detail pages."
              upperHeight={369}
              lowerHeight={200}
            />
          </div>
        </div> */}
      </Section>
  )
}
