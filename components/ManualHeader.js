import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export const ManualHeader = () => {
    const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } =
        useMoralis()

    const enableWeb3Wallet = async () => {
        await enableWeb3()
    }

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button onClick={enableWeb3Wallet}>Connect</button>
            )}
        </div>
    )
}
