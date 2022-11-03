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

export const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: min-content;
    margin-left: auto;

    button {
        background: ${p => p.theme.colors.gray800} !important;
        border-radius: 12px !important;
        text-align: center;
        padding: 12px 17px !important;
        width: min-content !important;
        border: none;
        font-weight: ${p => p.theme.font.weight.regular} !important;

        &:first-child {
            margin-right: 20px;
            color: ${p => p.theme.colors.primary} !important;
        }
        &:last-child {
            color: ${p => p.theme.colors.assetRed} !important;
        }
    }
`
