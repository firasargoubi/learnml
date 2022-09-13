import React from 'react';
import ContainerHeading from '../common/container-heading';
import './ressources.scss';
import { useTranslation } from 'react-i18next';

type Link = {
  link: string;
  helperText: string;
};

const Ressources = () => {
  const { t } = useTranslation();
  const ressourcesLinks: Link[] = t('Ressources.links', {
    returnObjects: true,
  });
  return (
    <div className='ressources'>
      <ContainerHeading title='Ressources' />
      <div>
        <p className='ressources-text'>{t('Ressources.text')}</p>
        <ul>
          {ressourcesLinks.map((item, index) => (
            <li key={index}>
              <p className='ressources-text'>
                {' '}
                <a href={item.link}>{item.link}</a> ({item.helperText})
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ressources;
