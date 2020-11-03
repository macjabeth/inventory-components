import Header from '../components/Header';
import SideNav from '../components/SideNav';
import PropTypes from 'prop-types';

const styles = {
  main: {
    display: 'flex'
  }
};

export default function MainLayout({ children }) {
  return (
    <main style={styles.main}>
      <SideNav />
      <div>
        <Header />
        {children}
      </div>
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.string.isRequired
};