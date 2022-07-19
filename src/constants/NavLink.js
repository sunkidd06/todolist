import { SITE_MAP } from "./Path";
export const NAV_LINKS = [
    { LINK_TO: SITE_MAP.HOME, NAME: "All Task" },
    { LINK_TO: SITE_MAP.NEW_TASK, NAME: "New Task" },
    { LINK_TO: SITE_MAP.DOING_TASK, NAME: "Doing Task" },
    { LINK_TO: SITE_MAP.DONE_TASK, NAME: "Done Task" },
]

/* 
<li className="item">
            <NavLink
              to={SITE_MAP.HOME}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All Task
            </NavLink>
          </li>

*/