"use client";

import Container from "../../common/Container";
import Title from "../../common/Title";
import { projets } from "../../../constant/index";
import ProjectItem from "./ProjectItem"; // Import the new ProjectItem component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Project() {
  return (
    <section id="Projects" className="py-16 lg:py-24 bg-[#F4EDEA]">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <Title label="My Projects"></Title>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {projets.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectItem project={project} isReversed={index % 2 !== 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Project;