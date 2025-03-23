import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { MyBlogContext } from "../../context/blog-contex.jsx";
import { Link } from "react-router";

const styles = {
  container: "relative mb-5",
  overlay: "bg-black opacity-1.5 absolute rounded-xl inset-0",
  content: "relative z-10 p-4",
  profileImage: "rounded-full inline",
  userName: "text-black capitalize ms-2",
  userProfession: "text-[13px] text-[#626262] mt-2 block",
  menuText: "underline mb-3",
  menuList: "text-[#626262] mt-2",
  menuItem: "text-[13px] hover:text-amber-600 cursor-pointer",
  authorsContainer: "relative",
  swiperContainer: "w-full p-2",
  authorCard: "p-4 bg-gray-800 rounded-lg capitalize text-white",
  authorImage: "rounded-full",
  authorProfession: "text-[13px] capitalize text-gray-400",
};

function Aside() {
  const { users } = useContext(MyBlogContext);
  const loginedUser = JSON.parse(localStorage.getItem("loginedUser")) || null;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <img
            src={
              loginedUser !== null
                ? loginedUser.profile_image
                : "../public/userprofile.jpg"
            }
            width={30}
            className={styles.profileImage}
            alt="profile photo"
          />
          <span className={styles.userName}>
            {loginedUser !== null ? loginedUser.name : "Unknown"}
          </span>
          <span className={styles.userProfession}>
            {loginedUser !== null ? loginedUser.profession : "unknown"}
          </span>
        </div>
      </div>

      {/* aside menu bar  */}
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <p className={styles.menuText}>Menu</p>
          <ul className={styles.menuList}>
            <li>
              <Link to={"/newpost"} className={styles.menuItem}>
                Create New Post +
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* author carousel */}
      <div className={styles.authorsContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <p className={styles.menuText}>Authors</p>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            className={styles.swiperContainer}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {users.map((user) => (
              <SwiperSlide key={user.user_id}>
                <div className={styles.authorCard}>
                  <img
                    src={user.profile_image}
                    width={45}
                    className={styles.authorImage}
                    alt=""
                  />
                  <h4>{user.name}</h4>
                  <span className={styles.authorProfession}>
                    {user.profession}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Aside;
