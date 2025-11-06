import React from "react";

const testimonials = [
  {
    name: "Nat Reynolds",
    role: "Chief Accountant",
    image:
      "/testimonial/p5.jpg",
    text: `Vitae suscipit tellus mauris a diam maecenas sed enim ut.
            Mauris augue neque gravida in fermentum. Praesent semper
            feugiat nibh sed pulvinar pro.`,
  },
  {
    name: "Celia Almeda",
    role: "Secretary",
    image:
      "/testimonial/p3.jpg",
    text: `Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam
            elementum pulvinar etiam. Urna porttitor rhoncus dolor purus
            non enim praesent elementum.`,
  },
  {
    name: "Bob Roberts",
    role: "Sales Manager",
    image:
      "/testimonial/p2.jpg",
    text: `Mauris augue neque gravida in fermentum. Praesent semper
            feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum
            rhoncus est pellentesque elit.`,
  },
  {
    name: "Mattie Smith",
    role: "Accountant-auditor",
    image:
      "/testimonial/p1.jpg",
    text: `Nisl condimentum id venenatis a gravida in fermentum. Praesent
            semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum.`,
  },
];


export default function Testimonial() {
  return (
    <div className="max-w-full mx-auto px-8 py-20 text-center">
      <h3 className="text-lg uppercase tracking-widest text-gray-500">TESTIMONIALS</h3>
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mt-3 mb-6">
        What Clients Say
      </h2>
      <p className="max-w-4xl mx-auto text-xl text-gray-700 mb-20">
        We place huge value on strong relationships and have seen the benefit they bring to our business.
        Customer feedback is vital in helping us to get it right.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {testimonials.map(({ image, text, name, role }) => (
          <div
            key={name}
            className="bg-gray-100 rounded-xl p-8 flex flex-col items-center text-gray-700 h-full"
          >
            <div className="w-32 h-32 mb-8 rounded-full ring-4 ring-green-600 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mb-8 text-center text-base leading-relaxed flex-grow">{text}</p>
            <h4 className="font-bold text-green-700 text-xl">{name}</h4>
            <p className="text-sm tracking-widest">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}