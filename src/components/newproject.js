import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Context } from "./context.js";
import { useForm } from "react-hook-form";

function New() {

    const [context, setContext] = useContext(Context);
    const [value, setValue] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setValue([...context, data])
    }

    useEffect(() => {
        setContext(value);
    }, [value]);

    return (
        <main>
            <h1>Create a new project</h1>
            <div className='app_content__wrapper'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {console.log(context)}
                    <Form.Field>
                        <label>Project Name</label>
                        <input
                            placeholder='Project Name'
                            type="text"
                            {...register("projectName", { required: true, maxLength: 10 })}
                        />
                    </Form.Field>
                    {errors.projectName && <p>Veuillez entrer un nom de projet.</p>}
                    <Form.Field>
                        <label>Lien de vidéo</label>
                        <input
                            placeholder='linkVideo'
                            type="text"
                            {...register("linkVideo", { required: true, maxLength: 10 })}
                        />
                    </Form.Field>
                    {errors.linkVideo && <p>Veuillez entrer un lien de vidéo</p>}
                    <Form.Field>
                        <label>Description du Projet</label>
                        <textarea
                            rows="5" cols="33"
                            {...register("descriptionProject",
                                {
                                    required: true, pattern: "@^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$@i"
                                })}
                        />
                    </Form.Field>
                    {errors.descriptionProject && <p>Veuillez fournir une description pour le projet.</p>}
                    <Form.Field>
                        <label>Type de montage: </label>
                        <select {...register("type", { required: true })}>
                            <option value="montage automatique">montage automatique</option>
                            <option value="montage via un monteur">montage via un monteur</option>
                        </select>
                    </Form.Field>
                    {errors.type && <p>Veuillez selectionner un type de montage</p>}
                    <Button className='submit__button' type='submit'>Submit</Button>
                </Form>
            </div>
        </main>
    )
}

export default New;