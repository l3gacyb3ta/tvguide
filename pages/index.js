import Meta from '../components/head'
import guide from '../data/guide.json'
import styles from '../styles/Home.module.css'

function filter_data(event) {
  if (this != undefined) {
    return event.name.toLowerCase().includes(this.toLowerCase());
  }
  else {
    return true;
  }
}

function Home({ query }) {
  var filtered = guide.channels.filter(filter_data, query.search)
  return (
    <div className={styles.container}>
      <Meta />

      <h1 className={styles.heading}>TV Guide</h1>
      <div className={styles.center}>
        <div className="wrapper block fixed">
          <form action="/" method="get" className={styles.forminline}>
            <input type="text" name="search" class="block fixed" />
            <button className="block round accent " type="submit">Search!</button>
          </form>
        </div>
      </div>
      {
        Object.entries(filtered).map(([key, channel]) => {
          return (
            <div className="block fixed" key={key}>
              <h2>{channel.number + ' - ' + channel.name}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

Home.getInitialProps = ({ query }) => {
  return { query }
}

export default Home