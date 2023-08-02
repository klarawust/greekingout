import img1 from "../images/normal_1280.webp";
import img2 from "../images/festlig_1280.webp";

function About({ links }) {
  return (
    <div className="flex flex-col gap-10 font-mono">
      <h1 className="text-4xl text-orange-600 z-10">About us</h1>
      <img className="w-96 -z-10" src={img1} alt="us three girls"></img>
      <p className="text-teal-700  z-10">
        We are three girls from the Oslo-area, who study Computer Science in
        Trondheim. We are on our third year, and will finish our Bachelor-degree
        after our semester in Athens. We will be documenting some of the cool
        things we experience in our 5 months in Greece!
      </p>
      <img className="w-96" src={img2} alt="us three girls partying"></img>
      <p className="text-teal-700 z-10">
        If you want to learn more about us, you can check out our personal
        websites or instagrams:{" "}
        <a href="https://www.helloklara.com">helloklara.com</a>,{" "}
        <a href="https://www.kennedy.com">kennedy.com</a> and{" "}
        <a href="https://www.instagram.com/taleeikenes">
          instagram.com/taleeikenes
        </a>
      </p>
    </div>
  );
}

export default About;
