import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

function TransactionList() {
    const {transactions, deleteTransaction} = useGlobalState()

    return (
        <div>{
            transactions.map(transaction => (
                <div key={transaction.id}>
                    <p>{transaction.description}</p>
                    <span>{transaction.amount}</span>
                    <button onClick={() => {
                        deleteTransaction(transaction.id)
                    }}>
                        X
                    </button>
                </div>
            ))
        }</div>
    )
}

export default TransactionList
