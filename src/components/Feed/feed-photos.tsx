import { Photo } from "@/actions/get-photos";
import Image from "next/image";
import Link from "next/link";
import styles from './FeedPhotos.module.css'

export default function FeedPhotos({photos}: {photos: Photo[]}) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo) =>
        <li className={styles.photo} key={photo.id}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image src={photo.src} alt={photo.title} width={1500} height={1500} sizes="" />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      )}
    </ul>
  )
}