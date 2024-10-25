import { createContext } from "react";
import { useCourseJoined } from '@/hooks/CourseJoined/useCourseJoined';
import { CourseJoinedContextProps, CourseJoinedProviderProps } from "@/types/CourseType";

const CourseJoinedContext = createContext<CourseJoinedContextProps>({
    courseJoined: {
        title: "",
        img: "",
    },
    setCourseJoined: () => {},
});

const CourseJoinedProvider = ({ children } : CourseJoinedProviderProps) => {
    const {courseJoined, setCourseJoined} = useCourseJoined();

    return (
            <CourseJoinedContext.Provider value={{
                courseJoined,
                setCourseJoined}}
            >
            {children}
        </CourseJoinedContext.Provider>
    );
};

export { CourseJoinedContext, CourseJoinedProvider };


