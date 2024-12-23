import AOS from "aos";
import "aos/dist/aos.css";
import CustomCarousel from "../components/common/Carousel";
import ImageCard from "../components/specific/LandingPage/ImageCard";
// 정적 이미지
import CarouselImg1 from "../assets/LandingPage/carousel1.jpg";
import CarouselImg2 from "../assets/LandingPage/carousel2.jpg";
import Food1 from "../assets/landingPage/food1.png";
import Food2 from "../assets/landingPage/food2.png";
import Food3 from "../assets/landingPage/food3.png";
import SubscribeImg from "../assets/LandingPage/subscribe.png";
import SellerImg from "../assets/LandingPage/seller.jpg";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const carouselItems = [
    {
      id: 1,
      image: CarouselImg1,
      title: "",
      description: "",
    },
    {
      id: 2,
      image: CarouselImg2,
      title: "",
      description: "",
    },
  ];

  return (
    <div className="w-full">
      {/* Carousel 섹션 */}
      <section className="relative pb-20">
        <div className="w-full">
          <CustomCarousel
            items={carouselItems}
            autoplay={true}
            speed={500}
            autoplaySpeed={4000}
          />
        </div>
      </section>

      {/* 가족의 식단 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-center mb-8">
            가족의 식단을 더 풍요롭게
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto">
            건강한 식단으로 한 달동안 여러분의 식탁을 더 풍요롭게 해드립니다.
          </p>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            바쁜 일상에서 소상한 구독과 함께 배부른 하루를 보내세요.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            <ImageCard src={Food1} alt="간편한 구독" />
            <ImageCard src={Food2} alt="맛있는 음식" />
            <ImageCard src={Food3} alt="다양한 메뉴" />
          </div>
        </div>
      </section>

      {/* 정기 배송 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <img
              src={SubscribeImg}
              alt="정기배송"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12" data-aos="fade-down">
            <h2 className="text-4xl font-bold mb-6">정기적인 배송</h2>
            <p className="text-gray-500">
              매주 정기적으로 신선한 재료를 배송해 드립니다.
            </p>
            <p className="text-gray-500">
              신선한 재료로 건강한 식사를 준비하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 상생하는 가게 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          <div
            className="md:w-1/2 mt-8 md:mt-0 md:pr-12 text-right"
            data-aos="fade-down"
          >
            <h2 className="text-4xl font-bold mb-6">상생하는 가게</h2>
            <p className="text-gray-500">
              소상공인과 고객을 잇는 새로운 연결고리
            </p>
            <p className="text-gray-500">
              가게는 안정적으로, 고객은 편리하게 소상한 구독이 행복을
              안겨드립니다.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              src={SellerImg}
              alt="상생하는 가게 이미지"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 마지막 부분 */}
      <section className="py-32 flex flex-col items-center text-lg">
        <p>소상한 구독의 소식이 궁금하다면?</p>
        <p>@sosanghan_9dog</p>
      </section>
    </div>
  );
};

export default LandingPage;
