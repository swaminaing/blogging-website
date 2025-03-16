import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { MyBlogContext } from "../../context/blog-contex.jsx";

function Aside() {
  // get users from db.json(json-server) by using context value
  const { users } = useContext(MyBlogContext);
  // fetch and validate login user from local storage
  const loginedUser = JSON.parse(localStorage.getItem("loginedUser")) || null;

  return (
    <div>
      <div className="relative mb-5">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <img
            src={
              loginedUser !== null
                ? loginedUser.profile_image
                : "../public/userprofile.jpg"
            }
            width={30}
            className="rounded-full inline"
            alt="profile photo"
          />
          <span className="text-black capitalize ms-2">
            {loginedUser !== null ? loginedUser.name : "Unknown"}
          </span>
          <span className="text-[13px] text-[#626262] mt-2 block">
            {loginedUser !== null ? loginedUser.profession : "unknown"}
          </span>
        </div>
      </div>

      <div className="relative mb-5">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <p className="underline">Menu</p>
          <ul className="text-[#626262] mt-2">
            <li>
              <a href="#" className="text-[13px] hover:text-amber-600">
                Dashboard +
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <p className="underline mb-3">Authors</p>
          {/* Swiper library */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            className="w-full"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {" "}
            <>
              {users.map((user) => {
                return (
                  <SwiperSlide key={user.user_id}>
                    <div className="p-4 bg-gray-800 rounded-lg text-white">
                      <img
                        src={user.profile_image}
                        width={45}
                        className="rounded-full"
                        alt=""
                      />
                      <h4>{user.name}</h4>
                      <span className="text-[13px] text-gray-400">
                        {user.profession}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Aside;
