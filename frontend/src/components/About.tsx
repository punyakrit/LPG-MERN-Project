import img from "../assets/mig.jpg";

function About() {
  return (
    <div className="py-20 px-10">
      <div className="flex items-center">
        <div className="w-2/3">
            <img className="object-fill h-[500px] rounded-2xl hover:rotate-12 transform duration-500" src={img}></img>
        </div>
        <div className="w-1/3 flex flex-col text-left items-center">
          <div className="text-6xl font-bold">About LPG Automation Systems</div>
          <div className="py-6 text-3xl">
            Level up your brand with the latest digital marketing trends.
          </div>
          <div className="text-lg">
            At LPG Automation Systems, we believe that safety should come first.
            That's why we provide cutting-edge solutions to help our clients
            maintain safe and reliable operations. With years of experience in
            the industry, our team of experts is dedicated to delivering
            exceptional service and support.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
