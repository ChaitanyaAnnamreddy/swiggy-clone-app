import { useEffect, useState } from 'react'
import { MENU_API } from '../utils/constants'

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(
      'https://thingproxy.freeboard.io/fetch/' + MENU_API + resId
    )
    const json = await data.json()
    setResInfo(json)
  }
  return resInfo
}
export default useRestaurantMenu
