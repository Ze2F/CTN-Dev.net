import { FC } from 'react';

export interface IProjectItemProps {
  title: string;
  status: string;
  statusStyle?: string;
  description: string;
  moreDetails?: string;
  img?: string;
  link?: string;
  linkText?: string;
  linkStyle?: string;
}

const ProjectItem: FC<IProjectItemProps> = ({
  title, status, statusStyle: statusStyle, description, moreDetails, img, link, linkText, linkStyle: linkStyle
}) => {

  return (
    < div className="card bg-base-100 image-full shadow-sm" >
      {
        !(img) ||
        <figure>
          < img src={img} style={{ width: '100%', height: '180px' }
          } />
        </figure >
      }
      <div className="card-body">
        <h2 className="card-title">{title}
          <div className={`badge badge-${statusStyle}`}>{status}</div>
        </h2>
        <p>{description}
        </p>
        {
          !(moreDetails) ||
          <div dangerouslySetInnerHTML={{ __html: moreDetails }}></div>
        }
        {
          !(link) ||
          < div className="card-actions justify-end">
            <a className={`btn btn-${linkStyle}`} target='_blank' href={link}>{linkText}</a>
          </div>
        }
      </div>
    </div >
  );
};

export default ProjectItem;