export function Partners() {
  const partners = [
    { name: "myFatoorah", colors: "text-blue-600" },
    { name: "pass", colors: "text-teal" },
    { name: "SADAD", colors: "text-red-600" },
    { name: "JEYAAD", colors: "text-blue-800" },
    { name: "E-Commerce", colors: "text-green-700" },
  ];

  return (
    <section className="border-y border-border bg-[#ebe8e3] py-10 md:py-12">
      <div className="section-container">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Our Partners</h2>
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {partners.map((p) => (
            <span
              key={p.name}
              className={`text-xl font-bold opacity-80 md:text-2xl ${p.colors}`}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
