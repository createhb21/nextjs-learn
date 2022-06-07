export default function Custom404() {
	return (
		<>
			<div>
				<h1>{"(>_<)"}</h1>
				<br />
				<p>{"The page you're looking for doesn't exist. Sorry."}</p>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					flex: 1;
					margin: 0 10px;
				}
			`}</style>
		</>
	)
}
