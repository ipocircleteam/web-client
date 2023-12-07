import Footer from '@/components/Footer/footer'
import Menu from '@/components/Menu/menu'

export default async function About() {
  return (
    <div className="w-[100vw] ">
      <div className="w-[100%] h-[300px]">
        <div className="h-[100%] text-[50px] font-semibold text-primary flex justify-center items-center w-[100%] md:w-[80%] lg:w-[60%] border-b-2 mx-auto">
          WE ARE HERE TO STAY
        </div>
      </div>

      <div className="w-[100%] md:w-[65%] mx-auto p-4 text-gray-600 text-[18px] ">
        <h1 className="text-[25px] w-[80%] mx-auto my-[30px] text-center text-bold text-black">
          Welcome to IPO Circle - Transforming IPO Investing with
          <br /> Fintech Excellence! 🚀
        </h1>
        <p>
          Are you prepared to redefine your approach to IPO investments? IPO
          Circle stands at the forefront of the fintech revolution, introducing
          a groundbreaking platform equipped with cutting-edge algorithms to
          elevate your IPO investment experience. In the ever-evolving and
          fast-paced financial landscape, staying ahead is key to making
          informed decisions, especially in the primary market. IPO Circle
          pioneers this journey, offering a sophisticated suite of tracking
          tools providing real-time insights, data analytics, and predictive
          trends. These tools empower our clients, ensuring strategic choices
          for successful IPO investments.
        </p>
        <h1 className="text-[20px] text-bold text-black mt-[40px]">
          Our Mission
        </h1>
        <p>
          IPO Circle is committed to empowering both newcomers and seasoned
          investors. Our mission is to furnish the tools essential for unlocking
          the full potential of IPO opportunities. Whether you are an individual
          investor or a financial professional, IPO Circle is your gateway to
          unparalleled advantages that guide you toward intelligent investment
          decisions.
        </p>
        <h1 className="text-[20px] text-bold text-black mt-[40px]">
          Why Choose IPO Circle
        </h1>
        <p>
          - Revolutionary Tools: Access state-of-the-art algorithms for
          maximizing gains.
        </p>
        <p>
          - Real-Time Insights: Stay updated on market trends with our advanced
          tracking tools.
        </p>
        <p>
          - Predictive Analytics: Make informed decisions with our predictive
          trends feature.
        </p>
        <h1 className="text-[20px] text-bold text-black mt-[40px]">
          About IPO Circle
        </h1>
        <p>
          IPO Circle, headquartered in India, is a financial services company
          founded in 2023 by a group of passionate individuals. Our vision is to
          revolutionize your engagement with the primary marketplace. We provide
          advanced tools and features tailored for IPO investing, enhancing your
          probability of profit.
        </p>

        {/* <h1 className="text-[20px] text-bold text-black mt-[40px]">
          Team IPO Circle
        </h1> */}

        <br />
        <p className="font-bold text-[18px]">
          Join us as we reshape the future of IPO investing! Explore the
          possibilities with IPO Circle - Where Fintech Meets Financial
          Prosperity. 🌐
        </p>
      </div>
    </div>
  )
}
