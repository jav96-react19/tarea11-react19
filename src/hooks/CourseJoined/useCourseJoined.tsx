import {useState} from "react";
import { CourseJoinedProps } from '@/types/CourseType.tsx';

export const useCourseJoined = () => {
    const [courseJoined, setCourseJoined] = useState<CourseJoinedProps>({
        title: "",
        img: "",
    })
    return {courseJoined, setCourseJoined}
}