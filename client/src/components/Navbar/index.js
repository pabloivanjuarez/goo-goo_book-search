import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">Google Books</a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Search <img className="nav-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNERCQkVCOyIgZD0iTTQ5My4yMSw0NTAuNzljMTEuNzIsMTEuNzEsMTEuNzIsMzAuNzEsMCw0Mi40MmMtNS44Niw1Ljg2LTEzLjUzLDguNzktMjEuMjEsOC43OSAgcy0xNS4zNS0yLjkzLTIxLjIxLTguNzlsLTk2LjU3LTk2LjU3YzE1Ljc3LTEyLjQsMzAuMDItMjYuNjUsNDIuNDItNDIuNDJMNDkzLjIxLDQ1MC43OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRjVDRDsiIGQ9Ik0zNTMuODMsMzExLjQxbDQyLjgxLDQyLjgxYy0xMi40LDE1Ljc3LTI2LjY1LDMwLjAyLTQyLjQyLDQyLjQybC00Mi44MS00Mi44MXYtMC4wMSAgYzE2LjI3LTExLjgxLDMwLjYtMjYuMTQsNDIuNDEtNDIuNDFIMzUzLjgzeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNERCQkVCOyIgZD0iTTM5MCwyMDBjMCw0MS41OC0xMy40Myw4MC4wOS0zNi4xOCwxMTEuNDFjLTExLjgxLDE2LjI3LTI2LjE0LDMwLjYtNDIuNDEsNDIuNDEgIEMyODAuMDksMzc2LjU3LDI0MS41OCwzOTAsMjAwLDM5MEM5NS4yMywzOTAsMTAsMzA0Ljc3LDEwLDIwMFM5NS4yMywxMCwyMDAsMTBTMzkwLDk1LjIzLDM5MCwyMDB6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNCRUU3RjQ7IiBkPSJNMjAwLDUwYzgyLjcxLDAsMTUwLDY3LjI5LDE1MCwxNTBzLTY3LjI5LDE1MC0xNTAsMTUwUzUwLDI4Mi43MSw1MCwyMDBTMTE3LjI5LDUwLDIwMCw1MHoiLz4KPHBhdGggZD0iTTUwMC4yODEsNDQzLjcxOWwtMTMzLjQ4LTEzMy40OEMzODguNTQ2LDI3Ny40ODUsNDAwLDIzOS41NTUsNDAwLDIwMEM0MDAsODkuNzIsMzEwLjI4LDAsMjAwLDBTMCw4OS43MiwwLDIwMCAgczg5LjcyLDIwMCwyMDAsMjAwYzM5LjU1NiwwLDc3LjQ4Ni0xMS40NTUsMTEwLjIzOS0zMy4xOThsMzYuODk1LDM2Ljg5NWMwLjAwNSwwLjAwNSwwLjAxLDAuMDEsMC4wMTYsMC4wMTZsOTYuNTY4LDk2LjU2OCAgQzQ1MS4yNzYsNTA3LjgzOCw0NjEuMzE5LDUxMiw0NzIsNTEyczIwLjcyNC00LjE2MiwyOC4yNzgtMTEuNzE2QzUwNy44MzcsNDkyLjczMSw1MTIsNDgyLjY4Nyw1MTIsNDcyICBTNTA3LjgzNyw0NTEuMjY5LDUwMC4yODEsNDQzLjcxOXogTTMyNi41MTYsMzU0Ljc5M2MxMC4zNS04LjQ2NywxOS44MTEtMTcuOTI4LDI4LjI3Ny0yOC4yNzdsMjguMzcxLDI4LjM3MSAgYy04LjYyOCwxMC4xODMtMTguMDk0LDE5LjY1LTI4LjI3NywyOC4yNzdMMzI2LjUxNiwzNTQuNzkzeiBNMjAsMjAwYzAtOTkuMjUyLDgwLjc0OC0xODAsMTgwLTE4MHMxODAsODAuNzQ4LDE4MCwxODAgIGMwLDM4LjE3NS0xMS44NTEsNzQuNjY3LTM0LjI3MiwxMDUuNTM1Yy0xMS4yMTcsMTUuNDUzLTI0LjczOSwyOC45NzYtNDAuMTkyLDQwLjE5MmMwLDAuMDAxLTAuMDAxLDAuMDAxLTAuMDAyLDAuMDAyICBDMjc0LjY2NywzNjguMTQ5LDIzOC4xNzUsMzgwLDIwMCwzODBDMTAwLjc0OCwzODAsMjAsMjk5LjI1MiwyMCwyMDB6IE00ODYuMTM5LDQ4Ni4xMzljLTMuNzgsMy43OC04LjgwMSw1Ljg2MS0xNC4xMzksNS44NjEgIHMtMTAuMzU5LTIuMDgxLTE0LjEzOS01Ljg2MWwtODguNzk1LTg4Ljc5NWMxMC4xMjctOC42OTEsMTkuNTg3LTE4LjE1LDI4LjI3Ny0yOC4yNzdsODguNzk4LDg4Ljc5OCAgQzQ4OS45MTksNDYxLjYzOSw0OTIsNDY2LjY1OCw0OTIsNDcyUzQ4OS45MTksNDgyLjM2MSw0ODYuMTM5LDQ4Ni4xMzl6Ii8+CjxwYXRoIGQ9Ik0zNjAsMjAwYzAtODguMjI1LTcxLjc3NS0xNjAtMTYwLTE2MFM0MCwxMTEuNzc1LDQwLDIwMHM3MS43NzUsMTYwLDE2MCwxNjBTMzYwLDI4OC4yMjUsMzYwLDIwMHogTTIwMCwzNDAgIGMtNzcuMTk2LDAtMTQwLTYyLjgwNC0xNDAtMTQwUzEyMi44MDQsNjAsMjAwLDYwczE0MCw2Mi44MDQsMTQwLDE0MFMyNzcuMTk2LDM0MCwyMDAsMzQweiIvPgo8cGF0aCBkPSJNMzA2LjMxNywxNjkuOTk1YzUuMTU1LTEuOTgxLDcuNzI5LTcuNzY2LDUuNzQ4LTEyLjkyMmMtOC42MTEtMjIuNDEyLTIzLjYwNC00MS41NzQtNDMuMzYtNTUuNDEzICBDMjQ4LjQ3OSw4Ny40OSwyMjQuNzIxLDgwLDIwMCw4MGMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMHM0LjQ3OCwxMCwxMCwxMGM0MS4wOTksMCw3OC42MzEsMjUuODE4LDkzLjM5Niw2NC4yNDcgIGMxLjUyOCwzLjk3Niw1LjMxNyw2LjQxNiw5LjMzNyw2LjQxNkMzMDMuOTI1LDE3MC42NjMsMzA1LjEzOCwxNzAuNDQ4LDMwNi4zMTcsMTY5Ljk5NXoiLz4KPHBhdGggZD0iTTMxMCwxOTBjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMzMTUuNTIsMTkwLDMxMCwxOTB6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">Saved <img className="nav-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDgwLjAwOTU4IDQ4MCIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtOCA2NC4wMDM5MDZoMTEyYzQuNDE3OTY5IDAgOCAzLjU4MjAzMiA4IDh2NDAwYzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTExMmMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHYtNDAwYzAtNC40MTc5NjggMy41ODIwMzEtOCA4LTh6bTAgMCIgZmlsbD0iIzM0OThkYiIvPjxwYXRoIGQ9Im0xMzYgLjAwMzkwNjI1aDEwNGM0LjQxNzk2OSAwIDggMy41ODIwMzE3NSA4IDcuOTk5OTk5NzV2NDY0YzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTEwNGMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHYtNDY0YzAtNC40MTc5NjggMy41ODIwMzEtNy45OTk5OTk3NSA4LTcuOTk5OTk5NzV6bTAgMCIgZmlsbD0iI2ZmY2M1YyIvPjxwYXRoIGQ9Im00NzQuMDc4MTI1IDQ0Ny43NjU2MjUtMTIwIDMyYy0uNjc5Njg3LjE1NjI1LTEuMzc4OTA2LjIzODI4MS0yLjA3ODEyNS4yMzgyODEtMS40MTAxNTYgMC0yLjc5Mjk2OS0uMzg2NzE4LTQtMS4xMTcxODctMS44NTU0NjktMS4wNjI1LTMuMjA3MDMxLTIuODIwMzEzLTMuNzYxNzE5LTQuODgyODEzbC05Ni0zNjhjLTEuMDgyMDMxLTQuMjU3ODEyIDEuNDQ1MzEzLTguNTk3NjU2IDUuNjgzNTk0LTkuNzU3ODEybDEyMC0zMmM0LjI5Njg3NS0xLjA1ODU5NCA4LjY1NjI1IDEuNDkyMTg3IDkuODM5ODQ0IDUuNzU3ODEybDk2IDM2OGMxLjA4MjAzMSA0LjI1NzgxMy0xLjQ0NTMxMyA4LjYwMTU2My01LjY4MzU5NCA5Ljc2MTcxOXptMCAwIiBmaWxsPSIjYjNiM2IzIi8+PHBhdGggZD0ibTQ2LjM5ODQzOCAxNTIuMDAzOTA2aDUxLjIwMzEyNGMzLjUzMTI1IDAgNi4zOTg0MzggMi44NjcxODggNi4zOTg0MzggNi40MDIzNDR2NTEuMTk5MjE5YzAgMy41MzUxNTYtMi44NjcxODggNi4zOTg0MzctNi4zOTg0MzggNi4zOTg0MzdoLTUxLjIwMzEyNGMtMy41MzEyNSAwLTYuMzk4NDM4LTIuODYzMjgxLTYuMzk4NDM4LTYuMzk4NDM3di01MS4xOTkyMTljMC0zLjUzNTE1NiAyLjg2NzE4OC02LjQwMjM0NCA2LjM5ODQzOC02LjQwMjM0NHptMCAwIiBmaWxsPSIjYjNiM2IzIi8+PHBhdGggZD0ibTI0MCAuMDAzOTA2MjVoLTEwNGMtNC40MTc5NjkgMC04IDMuNTgyMDMxNzUtOCA3Ljk5OTk5OTc1djU2aC0xMjBjLTQuNDE3OTY5IDAtOCAzLjU4MjAzMi04IDh2NDAwYzAgNC40MTc5NjkgMy41ODIwMzEgOCA4IDhoMjMyYzQuNDE3OTY5IDAgOC0zLjU4MjAzMSA4LTh2LTQ2NGMwLTQuNDE3OTY4LTMuNTgyMDMxLTcuOTk5OTk5NzUtOC03Ljk5OTk5OTc1em0tOCA0MTUuOTk5OTk5NzVoLTg4di0xNmg4OHptLTIxNi0yOTZoMTEydjI0MGgtMTEyem0yMTYtMzJoLTg4di0yNGg4OHptLTIxNiAyODhoMTEydjI0aC0xMTJ6bTEyOCA4di0yODBoODh2Mjgwem04OC0zNjh2MzJoLTg4di0zMnptLTEwNCA2NHYyNGgtMTEydi0yNHptLTExMiAzMzZoMTEydjQ4aC0xMTJ6bTEyOCA0OHYtMzJoODh2MzJ6bTAgMCIvPjxwYXRoIGQ9Im00NzkuNzQyMTg4IDQzNy45ODgyODEtOTYtMzY4Yy0uNTM1MTU3LTIuMDYyNS0xLjg3MTA5NC0zLjgyNDIxOS0zLjcxNDg0NC00Ljg5NDUzMS0xLjgzOTg0NC0xLjA3NDIxOS00LjAzMTI1LTEuMzY3MTg4LTYuMDg5ODQ0LS44MTY0MDZsLTEyMCAzMmMtNC4yNSAxLjEzMjgxMi02Ljc4OTA2MiA1LjQ4NDM3NS01LjY3OTY4OCA5Ljc0MjE4N2w5NiAzNjhjLjUzNTE1NyAyLjA2MjUgMS44NzUgMy44MjQyMTkgMy43MTg3NSA0Ljg5ODQzOCAxLjgzOTg0NCAxLjA2NjQwNiA0LjAzMTI1IDEuMzUxNTYyIDYuMDg1OTM4Ljc5Njg3NWwxMjAtMzJjNC4yNDIxODgtMS4xMzI4MTMgNi43NzczNDQtNS40NzI2NTYgNS42Nzk2ODgtOS43MjY1NjN6bS0yMDEuMjQ2MDk0LTI3OS40NDE0MDYgMTA0LjU0Mjk2OC0yNy44NzEwOTQgMy43NjE3MTkgMTQuNDAyMzQ0LTEwNC41MzUxNTYgMjcuOTEwMTU2em0xMTIuMzQzNzUgMi4wNTA3ODEgNDYuMzk4NDM3IDE3Ny45ODQzNzUtMTA0LjUwMzkwNiAyNy44Nzg5MDctNDYuMzk4NDM3LTE3Ny45OTIxODh6bTUwLjQ3MjY1NiAxOTMuNDcyNjU2IDguMTkxNDA2IDMxLjM5MDYyNi0xMDQuNTQyOTY4IDI3Ljg3MTA5My04LjE2MDE1Ny0zMS4zODI4MTJ6bS03MS4wMjM0MzgtMjcyLjI2NTYyNCA4LjcxMDkzOCAzMy4zOTg0MzctMTA0LjU0Mjk2OSAyNy44NjcxODctOC43MDMxMjUtMzMuMzg2NzE4em0tMTIuNTc4MTI0IDM4MC4zOTg0MzctOC43MTA5MzgtMzMuMzk4NDM3IDEwNC41NDI5NjktMjcuODc4OTA3IDguNzAzMTI1IDMzLjM4MjgxM3ptMCAwIi8+PHBhdGggZD0ibTEwNCAxNDQuMDAzOTA2aC02NGMtNC40MTc5NjkgMC04IDMuNTgyMDMyLTggOHY2NGMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDY0YzQuNDE3OTY5IDAgOC0zLjU4MjAzMSA4LTh2LTY0YzAtNC40MTc5NjgtMy41ODIwMzEtOC04LTh6bS04IDY0aC00OHYtNDhoNDh6bTAgMCIvPjwvc3ZnPgo=" /></a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;