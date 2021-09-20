import PropTypes from "prop-types";
import { useLocation } from "react-router";

import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
	const location = useLocation();
	return (
		<header className="header">
			<h1>{title}</h1>
			{location.pathname === "/" && (
				<Button
					color={showAddTask ? "red" : "green"}
					text={showAddTask ? "close" : "Add"}
					onAdd={onAdd}
				/>
			)}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;