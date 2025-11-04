import React from "react";

const testimonials = [
  {
    name: "Nat Reynolds",
    role: "Chief Accountant",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: `Vitae suscipit tellus mauris a diam maecenas sed enim ut.
            Mauris augue neque gravida in fermentum. Praesent semper
            feugiat nibh sed pulvinar pro.`,
  },
  {
    name: "Celia Almeda",
    role: "Secretary",
    image:
      "https://images.unsplash.com/photo-1508214751197-f66f2fc2f6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: `Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam
            elementum pulvinar etiam. Urna porttitor rhoncus dolor purus
            non enim praesent elementum.`,
  },
  {
    name: "Bob Roberts",
    role: "Sales Manager",
    image:
      "https://images.unsplash.com/photo-1508214751200-3d47a20e3b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: `Mauris augue neque gravida in fermentum. Praesent semper
            feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum
            rhoncus est pellentesque elit.`,
  },
  {
    name: "Mattie Smith",
    role: "Accountant-auditor",
    image:
      "https://images.unsplash.com/photo-1508214751203-14b6c7f3aadb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: `Nisl condimentum id venenatis a gravida in fermentum. Praesent
            semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum.`,
  },
];

const teamImage = "https://i.ibb.co/6B0X8vB/team-image.png"; // Replace with the actual image URL from user image

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