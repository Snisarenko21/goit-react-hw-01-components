// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = props => {
  const { location, username, tag, avatar, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.nambers}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.nambers}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
