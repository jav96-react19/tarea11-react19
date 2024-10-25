import { Courses } from '@/models/Courses.tsx';
import { Course } from '@/components/Course/Course.tsx';
import react from "@/assets/img/react.svg";
import angular from "@/assets/img/angular.svg";
import vue from "@/assets/img/vue.svg"; 


export const CoursesList = () => {
  
  return (
        <div className="row row-cols-3 gap-4">
          {Courses.map((item, index) => (
            <Course
                key={index}
                title={item.title}
                description={item.description}
                badge={item.badge}
                img = {item.title === "React 19" ? react : item.title === "Angular 18" ? angular : vue}
            />
          ))}
      </div>
    )
}