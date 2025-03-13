import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { getUsers } from "../../utils/http";

function Aside() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsersProfile() {
      const response = await getUsers();

      setUsers(response);
    }

    getUsersProfile();
  }, []);
  return (
    <div>
      <div className="relative mb-5">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <h3 className="text-black">Jane Doe</h3>
          <span className="text-[13px] text-[#626262]">Developer</span>
        </div>
      </div>

      <div className="relative mb-5">
        <div className="bg-black opacity-1.5 absolute rounded-xl inset-0"></div>
        <div className="relative z-10 p-4">
          <p className="underline">Menu</p>
          <ul className="text-[#626262] mt-2">
            <li>
              <a href="#" className="text-[13px] hover:text-black">
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
