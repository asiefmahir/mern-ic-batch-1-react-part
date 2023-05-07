import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<header class="header">
			<div class="container">
				<nav class="header__navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/todos">Todos</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/notes">Notes</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
