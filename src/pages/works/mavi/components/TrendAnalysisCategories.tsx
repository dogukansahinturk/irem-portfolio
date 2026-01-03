export const TrendAnalysisCategories = ({ categories }: { categories: any[] }) => {
  return (
    <div className="max-w-full mx-auto mt-24 px-20">
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
