import { ReactNode } from "react";

export type CourseJoinedProps = {
    title: string,
    img: string,
}
export type CourseProps = {
    title: string,
    description: string,
    badge: string,
    img: string
}
export type CourseJoinedContextProps = {
    courseJoined: CourseJoinedProps,
    setCourseJoined: (course: CourseJoinedProps) => void
}

export type CourseJoinedProviderProps = {
    children: ReactNode
}



