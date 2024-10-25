import './App.css'
import { CoursesList } from '@/components/CoursesList/CoursesList.tsx';
import { FormView } from '@/components/Form/Form.tsx';
import {useContext} from "react";
import { CourseJoinedContext } from './context/CourseJoinedContext';

function App() {

  const { courseJoined } = useContext(CourseJoinedContext);
  const { title } = courseJoined

  return (
    <>
        <CoursesList />
        {title!=="" && (
          <>
            <FormView />
          </>
        )}
    </>
  )
}

export default App
