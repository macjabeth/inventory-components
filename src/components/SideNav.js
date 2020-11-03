const styles = {
  nav: {
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column'
  },
  alert: {
    flex: 1
  }
};

export default function SideNav() {
  return (
    <nav style={styles.nav}>
      <h3>Taking Inventory</h3>
      <a href="/">Home</a>
      <a href="/items">Items</a>
      <a href="/alerts" style={styles.alert}>Alerts</a>
      <a href="/activities">Activities</a>
      <a href="/users">Users</a>
    </nav>
  );
}