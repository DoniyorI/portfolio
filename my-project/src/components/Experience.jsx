import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWork,MdSchool} from 'react-icons/md';


const Experience = () => {
  return (
    <div className="object-center bg-black-pearl-500 experienceOrange bg-full bg-cover pb-10">
      <h1 className="text-white text-center font-Roboto font-bold text-4xl">
        Experience
      </h1>
      <p className="text-white text-center font-Roboto font-light text-sm pt-4 pb-20">
        A short summary of my work experience..
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(245,1,87)", color: "#ff" }}
          icon = {<MdSchool/>}

          
        >
          <h3 className="vertical-timeline-element-title">Full-Time Student @University at Buffalo</h3>
          <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
          <p>
            Bachelor of Science in Computer Science
            GPA: 3.75, Honors: Dean's List, Pride of New York Scholarship
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
            • Approved payroll and benefits administration for 10 employees deploying with Microsoft Excel
            • Processed payments excess of $20,000 weekly and without going over budget
            • Fashioned and Analyzed Quarterly IFTA Taxes Reports and Submitted in a timely manner
            • Handled training and development efforts for new hires of over 8 people
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:gitext-white"
          date="November 2019 - Jun 2021"
          iconStyle={{ background: "rgb(32,150,243)", color: "#fff" }}
          icon = {<MdWork/>}
        >
          <h3 className="vertical-timeline-element-title text-black">Cashier @The Medicine Chest LLC</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Brooklyn, NY
          </h4>
          <p className="text-black">
            • Processed Hundreds of transactions a day swift and effectively for best customer experiences
            • Collaborated with Co-Workers to build schedules fitting everyone needs weekly
            • Advised 20+ customers a day in acquiring specific items and recommended Alternatives Products
            • Maintained cleanliness and order of checkout areas and lanes hourly ensuring customer satisfaction
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
