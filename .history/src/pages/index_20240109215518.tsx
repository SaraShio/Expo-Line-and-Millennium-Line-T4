import dynamic from "next/dynamic"

const DynamicMap = dynamic (()=> import('../../components/Map'), {ssr})

export default function Home() {
  return (
   
  )
}
