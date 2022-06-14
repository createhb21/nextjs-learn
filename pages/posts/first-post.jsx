import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "../../components/layout"

export default function FirstPost() {
	const router = useRouter()
	useEffect(() => {
		router.push("posts/first-post/?counter=10", undefined, { shallow: true })
		// shallow하면 url을 바꿔치기 할 수있음.
		// 예를 들어 tab을 이용해 id 값을 1이나 2로 설정해줄 수 있다.
	}, [])

	// useEffect(() => {
	// 	alert(router.query.counter)
	// }, [router.query.counter])

	useEffect(() => {
		alert(JSON.stringify(router.query))
	}, [router.query.counter]) // server side 코드 없이 static build된  페이지에서 router.query는 처음에는 빈 객체가 나오고 그 다음 query가 채워진다. 즉, hydration 된 다음에 query가 들어간다. 이게 기본이다. 그래서 빈 객체를 무시해주는 코드를 만들어 놓는게 좋다.

	return (
		<Layout>
			<Head>
				<title>First Post</title>
				<meta name="author" content="createhb21" />
				<meta name="description" content="이 페이지는 블로그다" />
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	)
}
