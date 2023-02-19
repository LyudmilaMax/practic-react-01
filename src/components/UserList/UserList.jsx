import PropTypes from 'prop-types';
import User from '../User/User';

const UserList = ({ users }) => {
  console.log(users);
  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <User user={{ name, email }} />
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default UserList;
