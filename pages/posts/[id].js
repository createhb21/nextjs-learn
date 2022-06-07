import Head from "next/head"

import Date from "../../components/date"
import Layout from "../../components/layout"
import utilStyles from "../../styles/utils.module.css"
import { getPostData } from "../../lib/posts"
import { useRouter } from "next/router"
import { useEffect } from "react"

export async function getStaticPaths() {
	// const paths = getAllPostIds()
	return {
		paths: [{ params: { id: "ssg-ssr" } }],
		// paths,
		fallback: true,
		// fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData,
		},
	}
}

export default function Post({ postData }) {
	// @Note When fallback: true;
	const router = useRouter()
	if (router.isFallback) {
		return <div>Loading...</div>
	}

	// Next js - API Routes
	useEffect(() => {
		const getText = async () => {
			const res = await fetch("/api/hello")
			const data = await res.json()

			alert(data.text)
		}

		getText()
	}, [])

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	)
}
