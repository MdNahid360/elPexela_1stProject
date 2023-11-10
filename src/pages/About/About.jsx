import vct from "../../assets/img/home-banner-three.webp";
import Testimonials from "../../component/CommonComponent/Testimonials/Testimonials";
const About = () => {
  return (
    <div>
      <div className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-12">
        <div className="md:grid gap-4 grid-cols-2">
          <div className="flex h-full items-center">
            <div className="">
              <h1 className="text-5xl font-bold text-black">Our Story</h1>
              <p className="mt-12 text-gray-600">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="mt-8 text-gray-600">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="">
            <img src={vct} alt="" />
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  );
};

export default About;
