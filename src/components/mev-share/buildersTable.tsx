import React, { useEffect, useState } from "react"
import { useDowgBuilders, Builder } from "./useDowgBuilders"

export default () => {
    const supportedBuilders = useDowgBuilders()
    const [builders, setBuilders] = useState<Array<Builder>>([])

    useEffect(() => {
        async function init() {
            setBuilders(await supportedBuilders)
        }
        if (builders.length === 0) {
            init()
        }
    }, [builders])

    return (<table>
        <thead>
            <th>Name</th>
            <th>RPC</th>
            <th>Supported APIs</th>
        </thead>
        {builders.map(builder => <tr>
            <td>{builder.name}</td>
            <td>{builder.rpc}</td>
            <td>{builder['supported-apis']}</td>
        </tr>)}
    </table>)
}
