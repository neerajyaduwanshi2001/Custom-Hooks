import styled from "styled-components"

function getStatusColor(status, colors) {
    if (status === 0) return colors.assetRed
    else if (status === 1) return colors.assetYellow
    else return colors.assetBlue
}

export const DataTable = styled.div`
    margin-top: 2rem;
`

export const Image = styled.img`
    width: 64px;
    border-radius: 16px;
`

export const StatusColor = styled.p`
    color: ${p => getStatusColor(p.status, p.theme.colors)} !important;
    background: ${p => p.theme.colors.gray800} !important;
    border-radius: 12px;
    text-align: center;
    padding: 12px 20px;
    width: min-content;
`
