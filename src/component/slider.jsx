import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const logos = [
    "/logo1.webp",
    "/logo2.webp",
    "/logo3.webp",
    "/logo4.webp",
    "/logo5.webp",
    "/logo6.webp",
    "/logo7.webp",
    "/logo8.webp",
    "/logo9.webp",
    "/logo10.webp",
    "/logo11.webp",
    "/logo12.webp",
    "/logo13.webp",
    "/logo14.webp",
    "/logo15.webp",
  ];

  const settings = {
    infinite: true, // Loop infinitely
    speed: 5000, // Transition speed
    slidesToShow: 6, // Number of logos visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables auto-sliding
    autoplaySpeed: 2000, // Time per slide (in ms)
    cssEase: "linear",
    pauseOnHover: false, // Keeps sliding even on hover
    responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 4, // Show 4 slides on mobile
        },
      },
      {
        breakpoint: 480, // Smaller screens
        settings: {
          slidesToShow: 3, // Show 2 slides for very small screens
        },
      },
    ],
  };

  return (
    <div className="w-full absolute bottom-0 bg-none py-6">
      <Slider {...settings} className="w-[100vw] bg-none  pt-2 mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center rounded-full">
            <img src={logo} alt={`Logo ${index}`} className="h-20 rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
