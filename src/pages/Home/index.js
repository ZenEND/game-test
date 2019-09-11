import React from "react"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"


export default
class NotFound
extends React.Component{
	render() {
		var title = "Home"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="v-not-found">
				<h1>{title}</h1>
				<Link to="/" className="u-button">
					To homepage
				</Link>
			</main>
		</>
	}
}