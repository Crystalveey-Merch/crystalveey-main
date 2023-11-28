import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const secondaryAppConfig = {
  apiKey: "AIzaSyDWJE0ytStDj7tYrYe9cc7aYwh4IqMNLAI",
  authDomain: "crystaveey-atelier.firebaseapp.com",
  projectId: "crystaveey-atelier",
  storageBucket: "crystaveey-atelier.appspot.com",
  messagingSenderId: "778305329441",
  appId: "1:778305329441:web:093440c87a9af9d12ec660",
  measurementId: "G-BDGF3RM5LR"
};

const secondaryApp = initializeApp(secondaryAppConfig, "secondary");

const db = getFirestore(secondaryApp);

export const SectionFour = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const fetchTravelPackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        const newArrival = products.filter(
          (product) => product.newarrival === "True"
        );
        setProducts(newArrival);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTravelPackages();
  }, []);

  const breakpoints = {
    // Define the breakpoints where you want to change the slidesPerView
    300: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    639: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  console.log(products)
  return (
    <div className="py-14 px-14 flex flex-col gap-16   bg-gray-50 rounded-lg mx-20 xl:mx-10 xl:gap-12 xl:px-8 sm:px-3 sm:mx-7">
      <h3 className="text-gray-900 font-bold text-4xl Aceh  xl:text-4xl md:text-2xl">
        Top Selling Designs
      </h3>
      <div className=" flex justify-center items-center">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
         {products.map((item) => {
          return (
            <SwiperSlide key={item.id} className="mx-2">
            <Link to={`https://atelier.crystalveey.com/productdes/${item.id}`} target="_blank">
              <div
                className=" w-full h-full    relative hvr-float cursor-pointer "
               
              >
              <div className="w-full flex justify-center bg-stone-200 overflow overflow-hidden">
                <img
                  src={item.imgSrc[0]}
                  alt={item.name}
                  className="w-full   imghgt2"
                  style={{ height: "330px", width: "200px" }}
                />
              </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-0   p-5 sm:p-2 sm:pb-4">
                <h5 className=" text-gray-900 font-light text-xl  font-sans sm:text-x">
                 {item.name}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-sky-500 text-xl mb-4"> ₦{item.price}</p>
              </div>
              <button className="btn bg-black text-white w-40">Shop</button>
              </Link>
            </SwiperSlide>
          );
        })}

          
          
        </Swiper>
      </div>
    </div>
  );
};
