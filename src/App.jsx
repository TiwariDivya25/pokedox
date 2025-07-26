import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/Navbar"

import { useState } from 'react'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  // showSideMenu: true means the side menu is visible, false means it's hidden.
  const [showSideMenu, setShowSideMenu] = useState(false)

  function handleToggleMenu() {
    setShowSideMenu(prev => !prev)
  }

  function handleCloseMenu() {
    setShowSideMenu(false)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav
        showSideMenu={showSideMenu}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        handleCloseMenu={handleCloseMenu} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App