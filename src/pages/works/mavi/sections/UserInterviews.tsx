import { KeyInsights } from "../components/KeyInsigths"
import { Section } from "../components/Section"
import headerRedIcon from '@/assets/mavi/header-red-icon.svg';
import headerYellowIcon from '@/assets/mavi/header-yellow-icon.svg';
import storeInterviewPlan from '@/assets/mavi/store-interview-plan.svg';
import interviewScreenshots from '@/assets/mavi/interview-screenshots.svg';
import person2 from '@/assets/mavi/person-2.svg';

const userInterviewInsights = [
  {
    title: "JEAN SELECTION",
    quote: "The description says “high-waisted”, but how high is it exactly? I look at where the waistband sits on the models—usually around the belly button—to get an idea.",
    bottom: "She figures out the rise of the jeans by looking at where the waistband sits in relation to the model’s belly button in the photos.",
  },
  {
    title: "SIZE SELECTION",
    quote: "Especially during the pandemic, since I can’t go and try the product on, I rely on reviews to judge the quality and figure out which size I should get.",
    bottom: "Reviews are really important when it comes to sizing and quality in online shopping.",
  },
  {
    title: "SIZE SELECTION",
    quote: "I think the way the products look on the website models can be misleading, since they have perfect bodies.",
    bottom: "She wants to see how the clothes fit on models with a similar body shape.",
  },
  {
    title: "SIZE SELECTION",
    quote: "Since the stretchiness of some jeans varies, I’m not always sure which size to order when shopping online.",
    bottom: "Jean sizing varies depending on the fabric composition, as the size can change based on how stretchy the denim is.",
  },
  {
    title: "BEHIND THE COLLECTIONS",
    quote: "I don’t understand what makes the BLACK collection different from the other black products.",
    bottom: "Each collection has a different story and unique product features, but users don’t easily understand the differences.",
  },
  {
    title: "BEHIND THE COLLECTIONS",
    quote: "I think they call the products eco-friendly because the profit from those items is donated.",
    bottom: "Products in the All Blue collection are produced with one or more preferred materials that contribute to lowering their environmental footprint.",
  },
  {
    title: "MIX & MATCH  ",
    quote: "I check out shopping lists shared by Instagram accounts I like. They also show how to style the items in 2–3 different ways.",
    bottom: "She’s interested in seeing how the items can be mixed and matched.",
  }
]

export const UserInterviews = () => {
  return (
    <Section id="user-interviews" title="User Interviews">
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
          <div className='flex flex-col'>
            <img className='relative right-15' src={headerRedIcon} width={37} height={34} alt="Interview Header Red Icon" />
            <div className='flex flex-col mt-3'>
              <h2 className='text-[2.5em] tracking-wider font-semibold'>
                Interview Goal
              </h2>
              <p className='mt-12 text-xl leading-9 tracking-wide'>
                In-depth interviews were conducted with&nbsp;
                <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>6 users</span>
                &nbsp;to better understand their experiences, needs, and expectations related to the project’s focus area. The participants included&nbsp;
                <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>3 mavi.com users</span>
                &nbsp;and&nbsp;
                <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>3 Mavi mobile app users.</span>
                &nbsp;In terms of age distribution, 2 participants were between 18–24 and 4 were between 25–34 years old. The sessions aimed to uncover user attitudes and behaviors through
                <span className='font-semibold'>storytelling and open-ended questions.</span>
                &nbsp;During the remote interviews, users were asked to navigate the mavi.com website, allowing for contextual insights into
                <span className='font-semibold'> their goals, challenges, and decision-making processes.</span>
              </p>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center content-center mx-auto max-w-6xl px-4 lg:px-6 mt-16 gap-7'>
          <div className='col-span-2 grid content-center'>
            <div className='flex flex-col gap-8'>
              <h5 className='text-xl font-semibold '>
                Research objectives
              </h5>
              <div className='pl-10 text-xl tracking-tight leading-9'>
                <ul className='list-disc list-outside gap-4'>
                  <li>
                    <span>What are the user’s general shopping <span className='font-semibold'>habits and motivations?</span></span>
                  </li>
                  <li className='mt-3'>
                    <span>What challenges or <span className='font-semibold'>pain points</span> do users experience while shopping?</span>
                  </li>
                  <li className='mt-3'>
                    <span>What are the user’s <span className='font-semibold'>needs and expectations</span> throughout the journey?</span>
                  </li>
                  <li className='mt-3'>
                    <span>What is the nature of the user’s <span className='font-semibold'>relationship with the brand</span>, and what do they think about Mavi?</span>
                  </li>
                  <li className='mt-3'>
                    <span>How do users <span className='font-semibold'>behave as Mavi customers?</span> (e.g., shopping frequency, channel usage, in-store experience)</span>
                  </li>
                  <li className='mt-3'>
                    <span>What are their preferences and focus points <span className='font-semibold'>in the store environment?</span></span>
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
          <img src={interviewScreenshots} alt="Interview Screenshots" loading='lazy' className='w-full h-auto' />
        </div>

        <KeyInsights
          insights={userInterviewInsights}
          personImg={person2}
          bubbleText="The jeans names on the listing page don’t clearly show their differences, so as a user, I need to check each detail page individually."
        />
      </Section>
  )
}
