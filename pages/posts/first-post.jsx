import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirstPost() {
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
