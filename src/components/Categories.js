import React from "react";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "fashion",
      svgPath:
        "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      id: 2,
      name: "grocery",
      svgPath:
        "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      id: 3,
      name: "electronics",
      svgPath:
        "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      id: 4,
      name: "gifts",
      svgPath:
        "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    },
    {
      id: 5,
      name: "travel",
      svgPath:
        "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 sm:py-6 py-2">
        <div className="flex flex-wrap -m-4 text-center">
          {categories &&
            categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="p-4 w-1/5 flex flex-col justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={category.svgPath}
                    />
                  </svg>
                  <p className="leading-relaxed capitalize sm:text-lg text-xs">
                    {category.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
