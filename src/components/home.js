
import React, { useContext } from 'react';
import { Context } from "./context";
import archive from '../images/archive.png';
import trash from '../images/trash.png';

function Home() {
    const [context, setContext] = useContext(Context);

    const deleteProject = (index) => {
        console.log(index)
        const newContext = [...context];
        newContext.splice(index, 1);
        setContext(newContext);
    }

    return (
        <main>
            <div className='app_header'>
                <h1>EasyMovie</h1>
                <p>EasyMovie is a web application that allows you to create a movie project and add movies to it. You can also add a movie to your favorites.</p>
                <div className='app__video__wrapper'>
                    <iframe title='video easymovie' width="560" height="315" src="https://www.youtube.com/embed/YE9txnis1Eg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className='app_content__header'>
                <h2>Liste des projets</h2>
                <div className='app_content__wrapper'>
                    <div className='app_content'>
                        {context && context.length > 0
                            ? (<> {context.map((item, index) => (
                                <div key={index} className='projet_item__wrapper'>
                                    <div className='projet_item_details'>
                                        <h3>{item.projectName}</h3>
                                        <span>{item.descriptionProject}</span>
                                        <span>{item.type}</span>
                                    </div>
                                    <div className='projet_item_actions'>
                                        <div className='projet_item_icon' >
                                            <img src={archive} alt='archive icon' />
                                        </div>
                                        <div className='projet_item_icon' onClick={deleteProject}>
                                            <img src={trash} alt='trash icon' />
                                        </div>
                                    </div>
                                </div>
                            ))}</>
                            ) : (<div className='projet_item__wrapper projet_no_item'>Aucun projet</div>)
                        }
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home;