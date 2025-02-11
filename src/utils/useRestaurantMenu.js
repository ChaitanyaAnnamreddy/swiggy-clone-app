import { useEffect, useState } from 'react'
import { MENU_API } from '../utils/constants'

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(
      'https://api.allorigins.win/raw?url=' +
        encodeURIComponent(MENU_API + resId)
    )
    const json = await data.json()
    console.log(json)
    setResInfo(json)
  }
  return resInfo
}
export default useRestaurantMenu
