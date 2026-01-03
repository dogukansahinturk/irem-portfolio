import talkBubble from '@/assets/mavi/talk-bubble.svg';
import keyInsightsChatIcon from '@/assets/mavi/key-insights-chat-icon.svg';

// const KeyInsightCard = ({ title, upperText, lowerText, upperHeight, lowerHeight }: { title: string; upperText: string; lowerText: string; upperHeight: number; lowerHeight: number }) => {
//   const totalHeightStr = `${upperHeight + lowerHeight}px`;
//   const upperHeightStr = `${upperHeight}px`;
//   const lowerHeightStr = `${lowerHeight}px`;
//   return (
//     <div className={`flex flex-col border-key-insights-border border-3 border-solid rounded-lg w-[357px]`}>
//       {/* <div className="grid h-full"> */}
//       {/* <div className={`h-1/2`}> */}
//       <div className='flex flex-col flex-1 px-8'>
//         <div className='flex justify-center mt-9'>
//           <img src={keyInsightsChatIcon} alt="Key Insights Chat Icon" loading='lazy' />
//         </div>
//         <div className='flex flex-col gap-4 mt-6 text-xl'>
//           <h3 className='font-semibold'>{title}</h3>
//           <p className='mb-9'>
//             <span className='font-bold text-3xl leading-0'>‘</span>
//             {upperText}
//             <span className='font-bold text-3xl leading-0'>’</span>
//           </p>
//         </div>
//       </div>
//       {/* </div> */}
//       <div className={`border-t-3 border-key-insights-border bg-key-insights-background rounded-lg flex flex-col flex-1`}>
//         <div className='flex my-9 justify-center px-8 text-xl'>
//           <div>
//             <p>{lowerText}</p>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   )
// }

export const KeyInsights = ({ insights, personImg, bubbleText }: { insights: any[]; personImg: string; bubbleText: string }) => {

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
