import { Button, Form } from 'react-bootstrap';
import {useContext} from "react";
import { CourseJoinedContext } from '@/context/CourseJoinedContext';

export const FormView = () => 
{
    const { courseJoined } = useContext(CourseJoinedContext);
    const {title, img} = courseJoined;

    return (

        <Form>
            <h1 className="my-5 fs-2">Join {title} course!</h1>
            <img src={img} className="mb-5"/>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" className="lg:w-1/2"/>
            </Form.Group>
    
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      );
}