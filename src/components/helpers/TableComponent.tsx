type TableComponent = {
    colHeader: string[]
    rowContents: React.ReactNode[][]
    boldCol1?: boolean
}

export default function TableComponent({ colHeader, rowContents, boldCol1 = false }: TableComponent) {
    return (
        colHeader.length >= 1 && rowContents.length >= 1
            ? <table>
                <thead>
                    <tr>
                        {colHeader.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowContents.map((row, idx) => {
                        const keyIdx = (Number(idx) + 1) * 100

                        return (
                            <tr key={keyIdx}>
                                {row.map((contents, idxRow) => {
                                    if (idxRow === 0 && boldCol1) return (
                                        <th key={keyIdx + idxRow}>{contents}</th>
                                    )
                                    
                                    return (
                                        <td key={keyIdx + idxRow}>{contents}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            : <p>The table lacks information to show.</p>
    )
} 