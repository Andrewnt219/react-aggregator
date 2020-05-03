import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../Auth/Input/Input';
import classes from '../../Auth/Form.module.scss';
import Button from 'components/ui/Button/Button';
import LoadingIndicator from 'components/ui/LoadingIndicator/LoadingIndicator';
import { selectIsSubmitted, setIsSubmitted } from 'features/contactUsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import subclasses from './Contact.module.scss'

function Contact({ email, onSubmit, isLoading }) {
    const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
    const isSubmitted = useSelector(selectIsSubmitted);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsSubmitted(false));
    }, [dispatch])

    let submitArea = isLoading
        ? <LoadingIndicator size="1rem" />
        : <Button type="submit">SUBMIT</Button>;

    if (isSubmitted)
        submitArea = (
            <div className={subclasses.svg}>
                <span>We will response to your message as soon as possible </span>
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="#2ec4b6" />
            </div>
        )

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
            <h1>Contact Us</h1>
            <Input
                name="email"
                type="text"
                value={email}
                label="Email"
                register={register}
                title="Your email" />


            <Input
                type="text"
                name="subject"
                label="Subject"
                errors={errors}
                register={register({ required: "Please enter a subject line" })}
                placeholder="Subject"
            />

            <Input
                isTextArea
                label="Message"
                register={register}
                title="Your message"
                name="message"
                placeholder="Please enter your message"
            />

            {submitArea}
        </form>
    )
}

export default Contact
