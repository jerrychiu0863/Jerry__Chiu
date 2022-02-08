import React from 'react';
import '../css/Contact.css';

const contactLists = [
  {
    icon: 'fas fa-map-pin',
    body: 'Changhua, Taiwan',
  },
  {
    icon: 'fas fa-phone',
    body: '+886910-200-918',
  },
  // {
  //   icon: 'fas fa-envelope',
  //   body: 'm08632000@hotmail.com',
  // },
  {
    icon: 'fab fa-github',
    body: 'https://github.com/jerrychiu0863',
  },
];

const Contact = () => {
  const renderContactInfo = (lists) => {
    return lists.map((list, index) => (
      <li className="Contact__list--item" key={index}>
        <i className={`Contact__list--icon ${list.icon}`} />
        <p className="Contact__list--info">{list.body}</p>
      </li>
    ));
  };

  return (
    <div className="Contact" id="contact">
      <div className="row">
        <div className="Contact__left col-0 col-sm-0 col-md-6" />
        <div className="Contact__right col-12 col-sm-12 col-md-6 container">
          <span className="Contact__right--header">Contact Info</span>
          <ul className="Contact__list">
            {renderContactInfo(contactLists)}{' '}
            <li className="Contact__list--item">
              <i className="Contact__list--icon fas fa-envelope" />
              <a
                className="Contact__list--info"
                href="mailto:m08632000@hotmail.com"
              >
                m08632000@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
