export const ResearchCards = ({ researchCards }: { researchCards: any[] }) => {
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


export const ResearchCard = ({ img, imgAlt, count, description }: {
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
