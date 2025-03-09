import PageMarkdown from '@/components/page.markdown';
import { useEffect, useState } from 'react';
import style from '@/styles/projects.module.css';

const Projects = () => {

  return (
    <>
      <div className={style.container}>
        <ul>
          <li>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Roblox Card Games<div className="badge badge-warning">Working</div></h2>
                <p>A Roblox Server develop with team.</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-info">More</button>
                </div> */}
              </div>
            </div>
          </li>
          <li>
            <div className="card image-full shadow-sm">
              <figure>
                <img src="/assets/images/33073599_211637626110296_168321705360490496_n.jpg" style={{ width: '100%', height: '180px' }}/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Horizon Fall Minecraft Server <div className="badge badge-error">Server is completely closed</div></h2>
                <p>A Minecraft Server</p>
                <div className="card-actions justify-end">
                  <a className="btn btn-info" target='_blank' href='https://web.facebook.com/HorizonFallMC/'>More</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;