import { data } from '../data/users';
import User from './User/User';
import UserList from './UserList/UserList';
import Section from './Section/Section';

export const App = () => {
  return (
    <div>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title='list of users'>
        <UserList users={data} />
      </Section>
    </div>
  );
};
