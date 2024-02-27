// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <div className="text-center text-white w-full px-10 py-6 bg-[#1b1b1b]">
      <h1>Footer</h1>
    </div>
  );
};

Footer.defaultProps = {
  routes: [{ name: 'Home Page', path: '/' }],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = '/src/widgets/layout/footer.jsx';

export default Footer;
