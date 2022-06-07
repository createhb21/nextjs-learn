import React from "react"
import styles from "./Box.module.css"

const Box = () => {
	return (
		<div className={styles.box}>
			<video className={styles.video} autoPlay loop muted playsInline>
				<source
					src="https://static.toss.im/assets/homepage/tossbank/video-02.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	)
}

export default Box
