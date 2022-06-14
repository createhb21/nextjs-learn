import Head from "next/head"

import Date from "../../components/date"
import Layout from "../../components/layout"
import utilStyles from "../../styles/utils.module.css"
import { getPostData } from "../../lib/posts"
import { useRouter } from "next/router"
import { useEffect } from "react"

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData,
		},
	}
}

export async function getStaticPaths() {
	// const paths = getAllPostIds()
	// [
	// 	{
	// 		params: {
	// 			id: `ssg-ssr`,
	// 		},
	// 	},
	// 	{
	// 		params: {
	// 			id: `pre-rendering`,
	// 		},
	// 	},
	// ]
	return {
		paths: [{ params: { id: "ssg-ssr" } }],
		// paths,
		// fallback: "blocking",
		// fallback: true,
		fallback: false,
	}
}

// export async function getServerSideProps({ params, req }) {
// 	console.log(`req.cookies: ${JSON.stringify(req.cookies)}`)
// 	// cookie에 따라서 동작을 다르게 할 수도 있음
// 	// 왜 가능할까?
// 	// 서버 사이드 프롭스는 모든 리퀘스트때마다 화면을 새로 그리기 때문에
// 	// 리퀘스트가 존재
// 	const postData = await getPostData(params.id)
// 	return {
// 		props: {
// 			postData,
// 		},
// 	}
// }

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
