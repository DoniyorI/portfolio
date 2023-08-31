import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWork,MdSchool} from 'react-icons/md';


const Experience = () => {
  return (
    <div className="object-center bg-black-pearl-500 experienceOrange bg-full bg-cover pb-10 pt-24" id = "Experience">
      <h1 className="text-white text-center font-Roboto font-bold text-4xl">
        Experience
      </h1>
      <p className="text-white text-center font-Roboto font-light text-sm pt-4 pb-20">
        A short summary of my work experience..
      </p>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work lg:text-white"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="July 2022 - Present"
          iconStyle={{ background: "rgb(245,1,87)", color: "#ff" }}
          icon = {<MdWork/>}
        >
          <h3 className="vertical-timeline-element-title ">Software Developer @Resilience, Inc. - Social Emotional Learning Programs</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
          • Utilized React Native framework to build and enhance the SELENA app, ensuring cross-platform compatibility and optimal user experience on both iOS and Android platforms<br></br>
          • Collaborated closely with UI/UX designers to implement intuitive and visually appealing interfaces align with the app’s Social Emotional Learning (SEL) objectives, resulting in a user-friendly and engaging design<br></br>
          • Demonstrated strong problem-solving skills, finding innovative solutions to technical challenges and continuously seeking opportunities to optimize app performance and user satisfaction<br></br>
          • Enhanced app functionality by integrating external APIs and analytics tools, leveraging user engagement data for informed decisions<br></br>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:text-white"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="January 2022 - Present"
          iconStyle={{ background: "rgb(245,1,87)", color: "#ff" }}
          icon = {<MdSchool/>}
        >
          <h3 className="vertical-timeline-element-title ">Undergraduate Teaching Assistant @University at Buffalo</h3>
          <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
          <p>
          • Co-instructed engaging recitation classes, fostering active student participation and comprehension<br></br>
          • Delivered comprehensive grading of assignments and exams, providing constructive feedback to over 100 students<br></br>
          • Demonstrated exceptional communication skills while answering students’ questions during weekly office hours and
            recitation periods<br></br>
          • Hosted frequent office hours to provide one-on-one academic support, assisting students with course material,
            assignments, and conceptual understanding<br></br>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:text-white"
          date="November 2019 - Present"
          iconStyle={{ background: "rgb(32,150,243)", color: "#fff" }}
          icon = {<MdWork/>}
        >
          <h3 className="vertical-timeline-element-title text-black">Cashier @The Medicine Chest LLC</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Brooklyn, NY
          </h4>
          <p className="text-black">
            • Processed Hundreds of transactions a day swift and effectively for best customer experiences<br></br>
            • Collaborated with Co-Workers to build schedules fitting everyone needs weekly<br></br>
            • Advised 20+ customers a day in acquiring specific items and recommended Alternatives Products<br></br>
            • Maintained cleanliness and order of checkout areas and lanes hourly ensuring customer satisfaction<br></br>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:text-white"
          date="July 2020 - August 202"
          iconStyle={{ background: "rgb(32,150,243)", color: "#fff" }}
          icon = {<MdWork/>}
        >
          <h3 className="vertical-timeline-element-title text-black">Safety-Manger/Accounting @UFO Logistics LLC</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Remote
          </h4>
          <p className="text-black">
            • Approved payroll and benefits administration for 10 employees deploying with Microsoft Excel<br></br>
            • Processed payments excess of $20,000 weekly and without going over budget<br></br>
            • Fashioned and Analyzed Quarterly IFTA Taxes Reports and Submitted in a timely manner<br></br>
            • Handled training and development efforts for new hires of over 8 people<br></br>
          </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
