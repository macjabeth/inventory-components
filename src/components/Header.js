const styles = {
  header: {
    borderBottom: '1px solid black',
    marginBottom: '1.25rem'
  }
};

export default function Header() {
  return (
    <header style={styles.header}>
      <h2>Dashboard</h2>
    </header>
  );
}