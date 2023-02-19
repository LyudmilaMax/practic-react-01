import {Text, SpanText} from './User.styled'
import PropTypes from 'prop-types';

const User = ({ user: { name, email } }) => {
    console.log(name);
    const emailEnd = email.endsWith('biz')
  return (
    <>
      <Text>Name: <SpanText>{name}</SpanText></Text>
      <Text>Email: <SpanText isGreen={emailEnd}>{email}</SpanText></Text>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
