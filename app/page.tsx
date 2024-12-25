import LinkCard from "../components/Card/LinkCard";
import Card from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {

  return (
    <main>
      <nav className="flex justify-between items-center md:py-3">
        <span className="tracking-widest ml-10 font-bold text-[1.2rem]">TASKFLUID</span>

        <ul className="flex justify-between items-center gap-6 mr-10">
          <li>
            <a className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-200" href="/login">Login</a>
          </li>
          <li>
            <a className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-200" href="/signup">Signup</a>
          </li>
        </ul>

      </nav>

      <section className="relative bg-cover bg-center h-[80vh] rounded-[20px]" style={{ backgroundImage: "url('/landing.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
        <div className="relative flex justify-center items-center h-full">
          <p className="text-white text-3xl md:text-5xl font-bold">Turn Chaos into Clarity with TaskFluid</p>
        </div>
      </section>

      <section className="relative h-[90vh]">
        <p className="absolute w-[30rem] font-500 tracking-[0.3rem] text-[2.7rem] leading-[3rem] mb-6" style={{top: "40%", left: "6%"}}>Flow Through Your Day with TaskFluid</p>
        
        <div className="absolute hover:animate-bounce-smooth" style={{top: "10%", left: "35%"}}><Card title="Intuitive Dashboard" description="See all your tasks at a glance." /></div>
        <div className="absolute hover:animate-bounce-smooth" style={{top: "60%", left: "70%"}}><Card title="Seamless Collaboration" description="Share tasks and work with your team effortlessly." /></div>
        <div className="absolute hover:animate-bounce-smooth" style={{top: "65%", left: "15%"}}><Card title="Progress Tracking" description="Track task status and deadlines with ease." /></div>
        <div className="absolute hover:animate-bounce-smooth" style={{top: "15%", left: "70%"}}><Card title="Customizable Priorities" description="Focus on what matters most to you." /></div>
        <div className="absolute hover:animate-bounce-smooth" style={{top: "50%", left: "45%"}}><Card title="Secure & Reliable" description="Your tasks, safe and accessible anytime." /></div>
      </section>
  

      <section className="h-[90vh] bg-cover bg-center bg-gray-400 rounded-[20px] bg-[#18181B]">
        <p className="pb-[3.5rem] pt-[5rem] w-[60%] mx-[auto] text-center text-[1.35rem] text-white">TaskFluid is a powerful yet simple task management app designed to help you organize, prioritize, and track your tasks effortlessly. Boost your productivity and collaborate seamlessly—all in one platform.</p>
        <div className="flex justify-center">
          <div className="flex gap-[4rem]">
            <div><LinkCard title="Seamless Team Collaboration" description="Share tasks, assign responsibilities, and stay synced with your team effortlessly." image="./team.png" /></div>
            <div className="pt-[3rem]"><LinkCard title="Intuitive Task Management" description="Easily create, organize, and prioritize tasks with a clean, user-friendly interface." image="./task.png"  /></div>
            <div><LinkCard title="Progress Tracking & Insights" description="Monitor task status, deadlines, and productivity trends to stay on top of your goals." image="./progress.png"  /></div>
          </div>
        </div>
      </section>
      
      <section className="h-[90vh] bg-cover bg-center ">
        <div className="flex justify-center items-center h-full">
          <div>
            <header className="font-main text-[2.7rem] font-600">From our Community</header>
            <sub className="text-[1.4rem]">Here's what the users had to say about TaskFluid</sub>
            <div>
              //profile
            </div>
          </div>
          <Carousel />
        </div>
      </section>


    </main>
  );
}
