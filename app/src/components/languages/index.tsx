import React from "react"
import { Line } from "./styles"

interface Props {
  data: string[]
}

const Languages = ({ data }: Props) => {
  return <Line>{data.join(" | ")}</Line>
}

export default Languages
