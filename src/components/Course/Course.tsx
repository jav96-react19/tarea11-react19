import { Card } from 'react-bootstrap';
import {useContext} from 'react';
import { CourseProps } from '@/types/CourseType';
import { CourseJoinedContext } from '@/context/CourseJoinedContext';

export const Course = (props: CourseProps) => 
{
    const {setCourseJoined} = useContext(CourseJoinedContext);
    const {title, description, badge, img} = props;
    
    return (
        <Card style={{ width: '18rem' }} className="mx-auto col overflow-hidden hover-shadow transition duration-300">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <span className="badge bg-secondary">{badge}</span>
                <br/><br/>
                <button
                    onClick={() => setCourseJoined({ title, img })}
                    className="font-bold btn btn-primary">Join us!
                </button>                
            </Card.Body>
        </Card>
    )
}