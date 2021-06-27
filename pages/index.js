import Meta from '../components/head'
import guide from '../data/guide.json'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log(guide.channels)
  return (
    <div className={styles.container}>
      <Meta />
      <h1 className={styles.heading}>TV Guide</h1>
      {
        Object.entries(guide.channels).map(([key, channel]) => {
          return (
            <div className="block fixed">
              <h2>{channel.number + ' - ' + channel.name}</h2>
            </div>
          )
        })
      }
    </div>
  )
}
