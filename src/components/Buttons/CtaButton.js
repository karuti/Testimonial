import styled from "styled-components"
export const ScheduleButton = styled.button`
  margin: 1.9em 0 0 0;
  padding: auto;
  width: 15em;
  height: 3em;
  background: none;
  color: #febd55;
  border-radius: 0.2em;
  border: solid 0.125em #febd55;
  font-weight: 800;
  font-size: 1.25em;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  :hover {
    box-shadow: 0 1em 2em #00000016;
  }
@media (max-width: 450px) {
 width:14em;
 margin: 0.8em 0 0em 0em;
}
`
export const DownloadButton = styled.button`
  margin: 1.9em 0 0 1.25em;
  padding: auto;
  width: 15em;
  height: 3em;
  background: #febd55;
  color: #fefefe;
  border-radius: 0.2em;
  border: none;
  font-weight: 800;
  font-size: 1.25em;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  :hover {
    box-shadow: 0 1em 2em #00000016;
  }
  @media (max-width: 450px) {
 width:14em;
 margin: 1.9em 0 0 0em;
}
`