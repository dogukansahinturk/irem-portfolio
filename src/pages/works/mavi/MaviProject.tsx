import maviWebHomepage from '@/assets/mavi/mavi-homepage.svg';
import maviLogo from '@/assets/mavi/mavi-logo.svg';
import maviReserch1 from '@/assets/mavi/research_1.svg';
import maviReserch2 from '@/assets/mavi/research_2.svg';
import maviReserch3 from '@/assets/mavi/research_3.svg';
import maviReserch4 from '@/assets/mavi/research_4.svg';
import storeInterviewPlan from '@/assets/mavi/store-interview-plan.svg';
import headerRedIcon from '@/assets/mavi/header-red-icon.svg';
import headerYellowIcon from '@/assets/mavi/header-yellow-icon.svg';
import headerBlueIcon from '@/assets/mavi/header-blue-icon.svg';
import interviewScreenshots from '@/assets/mavi/interview-screenshots.svg';
import keyInsightsChatIcon from '@/assets/mavi/key-insights-chat-icon.svg';
import person1 from '@/assets/mavi/person-1.svg';
import person2 from '@/assets/mavi/person-2.svg';
import talkBubble from '@/assets/mavi/talk-bubble.svg';
import benchmarkScreenshots from '@/assets/mavi/benchmark-screenshots.svg';
import { Button } from '@/common/shadcn/components/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/common/shadcn/components/carousel"
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/common/shadcn/components/card';


const researchCards = [
  {
    img: maviReserch1,
    imgAlt: 'Research Image 1',
    count: 162,
    description: 'app/website benchmarks conducted'
  },
  {
    img: maviReserch2,
    imgAlt: 'Research Image 2',
    count: 4,
    description: 'Mavi store staff interviewed'
  },
  {
    img: maviReserch3,
    imgAlt: 'Research Image 3',
    count: 522,
    description: 'minutes of user interviews recorded'
  },
  {
    img: maviReserch4,
    imgAlt: 'Research Image 4',
    count: 428,
    description: 'user insights gathered'
  },
]


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

const trendAnalysisCategories = [
  {
    title: <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>SUSTAINABILITY</span>,
    texts: [
      "Product pages highlight labels such as “Eco-Friendly” and “Organic Fabric,” emphasizing each item’s",
      <span className='font-semibold'>positive impact on the environment.</span>,
      "Users are encouraged to shop less but more consciously, while features like",
      <span className='font-semibold'>eco-friendly filters, product care tips</span>,
      "to extend longevity, and",
      <span className='font-semibold'>in-store repair stations</span>,
      "are integrated into the overall experience."
    ]
  },
  {
    title: <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>THE INFLUENCE OF COVID-19</span>,
    texts: [
      "User behaviors shifted rapidly toward contactless, convenient, and safe shopping experiences. Clear delivery options,",
      <span className='font-semibold'>real-time stock information</span>,
      ", transparent return policies, and visible in-store health measures became central to UX design. Additionally, features like",
      <span className='font-semibold'>online styling assistance, smart fit quizzes</span>,
      ", and personalized product suggestions were widely adopted to help users make confident choices from home."
    ]
  },
  {
    title: <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>HOLISTIC DIGITAL-PHYSICAL EXPERIENCES</span>,
    texts: [
      "Users expect seamless integration between digital and physical touchpoints. Experiences like",
      <span className='font-semibold'>discovering a product online and trying it in-store</span>,
      ", or",
      <span className='font-semibold'>receiving online styling tips</span>,
      "that guide in-store shopping, are becoming standard. As a result, UX design focuses on creating cohesive solutions that bridge the digital and physical worlds."
    ]
  },
  {
    title: <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>PERSONALIZATION & AI</span>,
    texts: [
      "Users value experiences tailored to their needs and preferences.",
      <span className='font-semibold'>Recommendations based on purchase history, size preferences</span>,
      ", or browsing behavior not only improve conversion rates but also build trust and satisfaction. In UX design, personalization comes to life through",
      <span className='font-semibold'>dynamic content, smart filters</span>,
      ", and user-specific messaging."
    ]
  },
  {
    title: "WELLBEING",
    texts: [
      "UX design now embraces users’ mental and physical well-being. While digital experiences favor",
      <span className='font-semibold'>calm interfaces and fewer notifications</span>,
      ", some physical stores now host",
      <span className='font-semibold'>yoga sessions or include</span>,
      <span className='font-semibold'>healthy cafés</span>,
      ", offering not just products but a holistic lifestyle experience."
    ]
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    texts: [
      
    ]
  },
  {},
  {},
  {},
]


export default function MaviProject() {
  return (
    <div className="font-light scroll-smooth tracking-wider">

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
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16 text-xl leading-9'>
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

        <div className='flex flex-col mt-24'>
          <div className="grid justify-center">
            <h2 className='text-2xl font-normal underline decoration-[0.10rem] decoration-wavy underline-offset-4 decoration-mavi-yellow'>
              RESEARCH
            </h2>
          </div>
          <ResearchCards researchCards={researchCards} />
        </div>
      </Section>

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
          <img src={interviewScreenshots} alt="Interview Screenshots" loading='lazy' className='w-full h-auto' />
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
          <img src={interviewScreenshots} alt="Interview Screenshots" loading='lazy' className='w-full h-auto' />
        </div>

        <RelevantBenchmarks benchmarks={[]} />

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
          <img src={benchmarkScreenshots} alt="Benchmark Screenshots" loading='lazy' className='w-full h-auto' />
        </div>
      </Section>

      <Section id="trends" title="Trends">
        <div className='grid justify-center mx-auto max-w-3xl px-4 lg:px-6 mt-16'>
          <p className='text-xl leading-9 tracking-wide'>
            The trends study explored&nbsp;
            <span className='font-semibold'>how customer expectations are evolving in today’s context</span>
            &nbsp;— including the impact of the&nbsp;
            <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>COVID-19</span>
            &nbsp;pandemic and growing interest in more conscious, connected, and&nbsp;
            <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>personalized experiences.</span>
            &nbsp;Our goal was to identify patterns and insights that reflect these shifting user needs and can inspire future design directions. We grouped the trend examples we found into&nbsp;
            <span className='underline underline-offset-4 decoration-[0.12rem] decoration-red-500'>9 categories.</span>
          </p>
        </div>
        <TrendAnalysisCategories categories={trendAnalysisCategories} />
      </Section>

    </div>
  )
}

/* Key Insights */

const KeyInsightCard = ({ title, upperText, lowerText, upperHeight, lowerHeight }: { title: string; upperText: string; lowerText: string; upperHeight: number; lowerHeight: number }) => {
  const totalHeightStr = `${upperHeight + lowerHeight}px`;
  const upperHeightStr = `${upperHeight}px`;
  const lowerHeightStr = `${lowerHeight}px`;
  return (
    <div className={`flex flex-col border-key-insights-border border-3 border-solid rounded-lg w-[357px]`}>
      {/* <div className="grid h-full"> */}
      {/* <div className={`h-1/2`}> */}
      <div className='flex flex-col flex-1 px-8'>
        <div className='flex justify-center mt-9'>
          <img src={keyInsightsChatIcon} alt="Key Insights Chat Icon" loading='lazy' />
        </div>
        <div className='flex flex-col gap-4 mt-6 text-xl'>
          <h3 className='font-semibold'>{title}</h3>
          <p className='mb-9'>
            <span className='font-bold text-3xl leading-0'>‘</span>
            {upperText}
            <span className='font-bold text-3xl leading-0'>’</span>
          </p>
        </div>
      </div>
      {/* </div> */}
      <div className={`border-t-3 border-key-insights-border bg-key-insights-background rounded-lg flex flex-col flex-1`}>
        <div className='flex my-9 justify-center px-8 text-xl'>
          <div>
            <p>{lowerText}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
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
    className={`my-[7.5rem] scroll-mt-24 lg:scroll-mt-28 ${className}`}
    aria-labelledby={`${id}-title`}
  >
    {title && (
      <header className="py-14 bg-mavi text-white grid justify-center">
        <h2
          id={`${id}-title`}
          className="text-5xl font-normal tracking-tight"
        >
          {title}
        </h2>
      </header>
    )}
    {children}
  </section>
);


const ResearchCards = ({ researchCards }: { researchCards: any[] }) => {
  return (
    <div className='mx-auto max-w-7xl grid lg:grid-cols-4 md:grid-cols-2 px-4 mt-16 lg:px-6 gap-5'>
      {researchCards.map((card, index) => (
        <ResearchCard
          key={index}
          img={card.img}
          imgAlt={card.imgAlt}
          count={card.count}
          description={card.description}
        />
      ))}
    </div>
  )
}


const ResearchCard = ({ img, imgAlt, count, description }: {
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

const TrendAnalysisCategories = ({ categories }: { categories: any[] }) => {
  return (
    <div className="max-w-full mx-auto mt-24 px-10">
      <h2 className="text-[2.5em] tracking-wider font-semibold text-center">
        Trend Analysis Categories
      </h2>
      <div className="flex flex-wrap items-stretch justify-center gap-x-5 gap-y-9 mt-16">
        {categories.map((category, i) => (
          <div
            key={i}
            className="flex flex-col bg-mavi-yellow-background rounded-lg p-8 w-[483px]"
          >
            <h3 className='font-medium text-xl uppercase tracking-wide'>{category?.title}</h3>
            <p className="mt-6 text-xl leading-8 font-extralight">
              {category?.texts?.map((text: React.ReactNode, index: number) => (
                <span key={index}>
                  {index > 0 && <>&nbsp;</>}
                  {text}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const RelevantBenchmarks = ({ benchmarks }: { benchmarks: any[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="max-w-full mx-auto mt-24 px-10">
      <h2 className="text-[2.5em] tracking-wider font-semibold text-center">
        Relevant Benchmark Examples Aligned with the Insights
      </h2>
      <div className='flex flex-col items-center mt-16'>
        <Carousel setApi={setApi} className="w-full max-w-6xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-muted-foreground py-2 text-center text-xl mt-5">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  )
}


function KeyInsights({ insights, personImg, bubbleText }: { insights: any[]; personImg: string; bubbleText: string }) {

  return (
    <div className="max-w-full mx-auto mt-24 px-10">
      <h2 className="text-[2.5em] tracking-wider font-semibold text-center">
        Key Insights
      </h2>

      <div className="flex flex-wrap items-stretch justify-center gap-5 mt-16">
        <div className='w-[357px] pt-4'>
          <KeyInsightBubble
            text={bubbleText}
            img={personImg}
          />
        </div>
        {insights.map((insight, i) => (
          <div
            key={i}
            className="flex flex-col border-key-insights-border border-3 border-solid rounded-lg w-[357px]"
          >
            {/* Top Section */}
            <div className="flex flex-col text-xl p-8 h-[400px]">
              <div className="flex items-center justify-center">
                <img src={keyInsightsChatIcon} alt="Key Insights Chat Icon" loading='lazy' />
              </div>
              <h3 className='font-semibold uppercase tracking-wide mt-6'>{insight.title}</h3>
              <p className="italic mt-4 leading-8">
                <span className='font-bold text-3xl leading-0'>‘</span>
                {insight.quote}
                <span className='font-bold text-3xl leading-0'>’</span>
              </p>
            </div>

            <div className={`flex flex-col flex-1 text-xl leading-8 border-t-3 border-key-insights-border bg-key-insights-background rounded-lg p-8`}>
              <div className='flex flex-1 h-full items-center'>
                <p>{insight.bottom}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const KeyInsightBubble = ({ text, img }: { text: string; img: string }) => {
  return (
    <>
      <TalkBubbleIcon text={text} />
      <img src={img} alt="Person 1" loading='lazy' className='relative right-8' />
    </>
  )
}

function TalkBubbleIcon({ text }: { text?: string }) {
  return (
    <div className="relative">
      {/* SVG bubble */}
      <img src={talkBubble} alt="Talk Bubble" loading='lazy' className="w-full h-full" />
      {/* Text inside bubble */}
      <div className="absolute inset-8 bottom-12 flex items-center justify-center text-xl italic leading-8">
        <div>
          <span className='font-bold text-3xl leading-0'>‘</span>
          {text}
          <span className='font-bold text-3xl leading-0'>’</span>
        </div>
      </div>
    </div>
  );
}
