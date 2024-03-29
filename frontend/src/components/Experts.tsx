import p1 from "../assets/p1.jpg";
import bg from "../assets/bg.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

function Experts() {
  return (
    <div className="pt-16 " >
      <div className="relative">
        <img src={bg} className="rounded-t-full"></img>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="flex justify-center text-5xl font-bold pt-32 pb-28" id="speakerss">
            Meet Our Experts
          </div>
          <div className="py-5 px-28 flex justify-center">
            <Cards
              img={p1}
              name="Jay Carovi"
              title="Head of Digital Marketing at Indian Oil"
            />
            <Cards
              img={p2}
              name="Harlow Beck"
              title="Senior Marketing Strategist Bharat Petrolium"
            />
            <Cards img={p3} name="Tony Selby" title="Business Analyst at HP" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards({ img, name, title }: any) {
  return (
    <div className="px-5">
      <div className="relative">
        <img
          src={img}
          alt="Profile"
          className="rounded-3xl  h-[550px] w-[350px] object-cover "
        ></img>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-violet-600 bg-opacity-95 ps-8 rounded-3xl hover:to-violet-950 cursor-pointer duration-500 transition ease-in-out"
        >
          <div className="text-4xl py-4 font-semibold">{name}</div>
          <div className="text-xl font-thin pb-8">{title}</div>
        </a>
      </div>
    </div>
  );
}

export default Experts;
