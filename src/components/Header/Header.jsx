import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStyles } from './Header.styles';

/**
 * Header
 * Page title with an optional nav button
 * @param {Object} props
 * @property {string} props.content - Content to display in the header
 * @property {boolean} props.showBackButton - Whether to show the button that brings the page to the collectable list
 */
export const Header = ({ content, showBackButton }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1 className={classes.title}>{content}</h1>
      </header>
      {showBackButton && (
        <nav className={classes.nav}>
          <Link to="/" className={classes.link}>
            <img
              src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=currentColor"
              alt="go back icon"
              className={classes.icon}
            />
          </Link>
        </nav>
      )}
    </div>
  );
};

Header.propTypes = {
  content: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
};

Header.defaultProps = {
  showBackButton: false,
};
