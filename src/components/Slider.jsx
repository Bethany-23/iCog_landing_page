// src/components/Slider.jsx
import servicesImg from "../assets/services.jpg";
import blogImg from "../assets/blog.jpg";
import newsImg from "../assets/news.jpg";
import partnerImg from "../assets/partners.jpg";

const sliderItems = [
  {
    image: servicesImg,
    title: "Services",
    detail:"iCog Labs provides a variety of research and development services for any international customers, including Artificial Intelligence and Bioinformatics research, machine learning based data analysis, and application software development.",
    link: "https://icog-labs.com/icog-makers/"
  },
  {
    image: blogImg,
    title: "iCog Blog",
    detail: "iCog blog gives a window into some of the broader issues that interest our AI and software development team. Technological, philosophical and sociocultural themes intermix, all in the spirit of creating a radically better future for Ethiopia, Africa and the world.",
    link: "https://icog-labs.com/anyone-can-code/"
  },
  {
    image: newsImg,
    title: "Latest News",
    detail: "iCog Labs propose its first community based project called ‘the iCog Makers Robo-soccer Competition’. Opening in few weeks later, hundreds of students from 5 universities will ascend on the task of hacking and programming humanoid robots for their shot at the coveted cup.",
    link: "https://icog-labs.com/innovate-ethiopia/"
  },
  {
    image: partnerImg,
    title: "Future AI Initiative",
    detail: "iCog Labs carries out its operations in collaboration with a number of international partners including: SingularityNET, US AI firm Novamente LLC, US bioinformatics firm Biomind LLC, the, and the nonprofit futurist Humanity+.",
    link: "https://icog-labs.com/future-ai-initiative/"
  }
];

const Slider = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-futuristic text-center text-gray-800 mb-14">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105 overflow-hidden flex flex-col animate-fade-in"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.detail}
                  </p>
                </div>
                <a
                  href={item.link}
                  className="mt-auto inline-block text-center bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-2 px-6 rounded-full shadow-md transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;