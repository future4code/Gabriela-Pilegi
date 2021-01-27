import React, { useState } from 'react'
import styled from 'styled-components'
import GetMatches from './GetMatches'
import PersonCard from './PersonCard'

const Header = styled.div`
  text-align: center;
`

function Home() {
  const [currentPage, setCurrentPage] = useState("Home")

  const changePage = () => {
    if (currentPage === "Home") {
      setCurrentPage("personCard")
    } else {
      setCurrentPage("Home")
    }
  }

  return(
    <div>
      <Header>
        <h1>AstroMatch</h1>
        <button onClick={changePage}>Ver matches</button>
      </Header>
      {currentPage === "Home" ? (
        <div>
        <PersonCard></PersonCard>
        {/* <p>Tela Home</p>
        <button>Match</button>
        <button>X</button> */}
        </div>
      ) : (
        <GetMatches />
      )}
      
    </div>
  )
}
export default Home