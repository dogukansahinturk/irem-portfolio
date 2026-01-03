import { RelevantCarousel } from "../components/RelevantCarousel";
import { Section } from "../components/Section"
import { TrendAnalysisCategories } from "../components/TrendAnalysisCategories"
import trendsScreenshots from '@/assets/mavi/trends-screenshots.svg';

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
      "Creative solutions that allow users to experience physical elements in online environments — such as",
      <span className='font-semibold'>virtual try-ons, 360° product views, fabric simulation, and live video consultations</span>,
      " — helping users feel more confident and connected while shopping remotely."
    ]
  },
  {
    title: "NOSTALGIA",
    texts: [
      "Users connect emotionally with experiences that evoke the past. In UX/UI, ",
      <span className='font-semibold'>retro visuals, vintage animations,</span>,
      " and revived versions of ",
      <span className='font-semibold'>past brand visuals</span>,
      " help build warmth, trust, and engagement."
    ]
  },
  {
    title: "SHARING ECONOMY",
    texts: [
      "Users now prefer ",
      <span className='font-semibold'>rental, secondhand,</span>,
      " and clothing swaps over ownership. UX design responds with secure profiles, item condition info, and simple user flows to support trust and ease of use."
    ]
  },
  {
    title: "INFLUENCER AND AVATAR IMPACT",
    texts: [
      "Product discovery and decisions are driven by ",
      <span className='font-semibold'>influencers and virtual try-ons.</span>,
      " Familiar faces and AR tools boost trust and create more immersive, personalized shopping experiences."
    ]
  },
]

export const Trends = () => {
  return (
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
      <div className='w-full mt-16'>
        <img src={trendsScreenshots} alt="Trends Screenshots" loading='lazy' className='w-full h-auto' />
      </div>
      <RelevantCarousel carouselItems={[]} title="Relevant Trend Examples Aligned with the Insights" />
    </Section>
  )
}
