export const Section = ({
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
